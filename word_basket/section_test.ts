import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";

// Deno.test("clearSection empties a tagged section", () => {
//   const before = `
// Keep what's here.

// <!-- section start -->
// Remove this
// <!-- section end -->

// Leave this alone.
//   `.trim();

//   const after  = `
// Keep what's here.

// <!-- section start -->
// <!-- section end -->

// Leave this alone.
//   `.trim();


//   const result = clearSection(before, "section");

//   assertEquals(result, after);
// });

function toMarkerComment(tag: string, marker: string) {
  return `<!-- ${tag} ${marker} -->`;
}

function hasSection(document: string, section: string): boolean {
  const startComment = toMarkerComment(section, "start");
  const endComment = toMarkerComment(section, "end");

  return document.includes(startComment) && document.includes(endComment)
}

Deno.test("hasSection is true if there's a matching start and end comment", () => {
  const document = `
<!-- section start -->
Content of section
<!-- section end -->
  `.trim();

  assertEquals(hasSection(document, "section"), true);
});

Deno.test("hasSection is false if a section comment is missing", () => {
  const missingStart = `
Content of section
<!-- section end -->
  `.trim();

  const missingEnd = `
<!-- section start -->
Content of section
  `.trim();

  assertEquals(hasSection(missingStart, "section"), false);
  assertEquals(hasSection(missingEnd, "section"), false);
});
