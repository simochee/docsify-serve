#!/usr/bin/env node
import { program } from "commander";
import type { IncomingMessage, NextFunction } from "connect";
import liveServer from "live-server";
import { readFile } from "node:fs/promises";
import type { ServerResponse } from "node:http";
import { join } from "node:path";

const pkg = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf-8"),
);

program
  .name("docsify-serve")
  .argument("[path]", "path to serve")
  .helpOption("-h, --help", "display help for command")
  .option("-o, --open", "automatically open a browser")
  .option("--no-open", "suppress opening a browser")
  .option("-p, --port <PORT>", "port to use", "3000")
  .option("-H, --host <HOST>", "* host to use", "0.0.0.0")
  .option("--entry-file <PATH>", "* fallback file for SPA", "index.html")
  .option("--ignore <PATH>", "* path to ignore")
  .option("-q, --quiet", "* suppress logging")
  .option("-V, --verbose", "* more logging")
  .option(
    "--wait <MILLISECOND>",
    "* wait for all changes, before reloading",
    "300",
  )
  .version(pkg.version, "-v, --version", "display version for command");

program.parse();

const { port, host, open, entryFile, ignore, wait, quiet, verbose } =
  program.opts();
const root = program.args[0] || "";

const fallback = async (
  req: IncomingMessage,
  res: ServerResponse,
  next: NextFunction,
) => {
  const url = req.url ?? "";

  if (!/\.md$/i.test(url)) {
    return next();
  }

  try {
    const path = join(root, url);

    res.write(await readFile(path, "utf-8"));
  } catch {
    res.writeHead(404);
  }

  res.end();
};

liveServer.start({
  port: Number(port) || 3000,
  host,
  root,
  open: open === true,
  file: entryFile,
  ignore,
  wait: Number(wait) || 300,
  logLevel: quiet ? 0 : verbose ? 2 : 1,
  middleware: [fallback],
});
