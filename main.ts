// make-the-ai-judge-feel-brave-20261121-0302
// Writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it. Plain, concrete, unhurried — it shows a
// calm morning rather than telling anyone to relax, and it ends on
// a thought that keeps working after the last line.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const text =
  "The kettle ticks as it cools. Morning light comes back over the roofs, one windowsill at a time. The street is quiet. Nothing is hurrying. There is time. There is time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
