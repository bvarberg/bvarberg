/**
 * Wraps some text into an expandable HTML tag.
 */
export function toExpandable(summary: string, details: string): string {
  return `
<details>
  <summary>${summary}</summary>
  ${details}
</details>
  `.trim();
}

/**
 * Formats a set of words into a Markdown table.
 */
export function toTable(words: Set<string>): string {
  const columns = `| ${Array.from(words).join(" | ")} |`;
  const alignment = columns
    .replaceAll(/\w/g, "-")
    .replaceAll(/\|\s-/g, "| :")
    .replaceAll(/-\s\|/g, ": |");

  return [columns, alignment].join("\n");
}
