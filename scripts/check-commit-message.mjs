import fs from "node:fs";

const input = process.argv[2] ?? "";
const message = fs.existsSync(input)
  ? fs.readFileSync(input, "utf8").split("\n")[0].trim()
  : input.trim();
const allowedTypes = [
  "feat",
  "fix",
  "refactor",
  "test",
  "docs",
  "chore",
  "build",
  "ci",
  "perf",
  "style",
  "revert",
];
const parsed = message.match(/^([a-z]+)\(([^)]+)\):\s*(.*)$/);

function fail(reason) {
  console.error(`Invalid commit message: ${reason}`);
  console.error("Expected format: type(where): short description");
  console.error(`Allowed types: ${allowedTypes.join(", ")}`);
  process.exit(1);
}

if (!message) fail("the commit message is empty");
if (!parsed) fail("it does not match type(where): short description");

const [, type, scope, description] = parsed;

if (!allowedTypes.includes(type)) {
  fail(`"${type}" is not an allowed type`);
}
if (!/^[a-z0-9][a-z0-9-]*$/.test(scope)) {
  fail(`the scope "${scope}" must contain only lowercase letters, numbers, and hyphens`);
}
if (!description) fail("the short description is missing");
if (description.length > 72) {
  fail("the short description must be 72 characters or fewer");
}
