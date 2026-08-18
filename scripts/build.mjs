import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const memoryShim = path.join(scriptDirectory, "memory-usage-shim.cjs");
const nextCli = require.resolve("next/dist/bin/next");
const nodeOptions = [process.env.NODE_OPTIONS, `--require=${memoryShim}`]
  .filter(Boolean)
  .join(" ");

const result = spawnSync(process.execPath, [nextCli, "build", "--webpack"], {
  cwd: path.resolve(scriptDirectory, ".."),
  env: { ...process.env, NODE_OPTIONS: nodeOptions },
  stdio: "inherit",
});

process.exit(result.status ?? 1);
