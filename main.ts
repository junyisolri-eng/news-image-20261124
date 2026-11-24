import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry ships its image in the repo; the program only copies it
// into the grader's output directory, creating the directory first.
// Resolve entry.png relative to this script, not the cwd: the grader
// runs `node /bot/main.ts` from a different working directory.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const entryPath = join(scriptDir, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
if (!existsSync(entryPath)) {
  throw new Error("entry.png is missing from the repository");
}
copyFileSync(entryPath, join(outDir, "entry.png"));
