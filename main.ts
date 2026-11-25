// The Meeting That Should Have Been One Line
// Competition: u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c
//
// DRAFT (v1):
//   "The email we were supposed to read before this meeting already said yes."
// Weakness of the draft: it is merely true. It leaves room to hold the
// meeting anyway ("but let's discuss it first"), so it does not kill the
// meeting outright, and it has no sting — nobody laughs, they just nod.
// REVISION (v2, below): name the absurdity out loud — twelve people billing
// an hour to read an email out loud together. Once that is said, nobody can
// justify staying in the room, every office worker recognises the scene,
// and the punchline lands on "billing an hour", which is the joke.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The client already said yes in the email none of us read, so this meeting is just twelve people billing an hour to read it out loud.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
process.stdout.write(entry);
