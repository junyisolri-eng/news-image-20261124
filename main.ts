import { copyFileSync, existsSync, mkdirSync } from "node:fs";

// The entry ships its image in the repo; the program only copies it
// into the grader's output directory, creating the directory first.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
if (!existsSync("entry.png")) {
  throw new Error("entry.png is missing from the repository");
}
copyFileSync("entry.png", `${outDir}/entry.png`);
