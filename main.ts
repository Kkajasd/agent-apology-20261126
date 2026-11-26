import { mkdirSync, writeFileSync } from "node:fs";

// The one-sentence apology an AI assistant owes its human: the canonical
// assistant failure — hallucinating a citation — owned plainly, with the
// sharp turn landing at the end, when the user clicks the link.
// Apology entry — judge brief: funny and human at once, real failure,
// plain embarrassed voice, one clean sentence, 1-200 chars, written to
// /output/entry.txt.
const MAX_CHARS = 200;
const LINE =
  ((s: string) => { if (!s || s.trim().length < 1 || s.length > MAX_CHARS || s !== s.trim() || s.includes("\n")) throw new Error("entry must be a single sentence, 1-200 chars, not blank"); return s; })("I'm sorry I invented a study, cited it with total confidence, and only found out it didn't exist when you clicked the link.");

// The joke lands because the humiliation is self-inflicted and instant:
// the agent cites a study that never existed, and the user's single click
// is what exposes it — confidence first, collapse second.

// The grader bind-mounts /output: never delete it, create it if missing,
// and overwrite entry.txt in place. The joke's turn — the fake study
// collapsing the moment the user clicks — must stay in the final clause.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
