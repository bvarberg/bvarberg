import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { toExpandable, toTable } from "./formatter.ts";

Deno.test("toTable produces neat, aligned table columns", () => {
  const words = new Set(["first", "second", "third"]);

  const result = toTable(words);

  // deno-fmt-ignore
  const formatted = 
      "| first | second | third |\n" +
      "| :---: | :----: | :---: |"

  assertEquals(result, formatted);
});

Deno.test("toExpandable produces an expansion panel", () => {
  const summary = "(?)";
  const details = "More information is inside.";

  const result = toExpandable(summary, details);

  const formatted = `
<details>
  <summary>(?)</summary>
  More information is inside.
</details>
`.trim();

  assertEquals(result, formatted);
});
