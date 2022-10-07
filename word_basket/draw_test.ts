import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { draw } from "./draw.ts";

Deno.test("draw returns a few words", () => {
  const words = new Set(["first", "second", "third", "fourth", "fifth"]);

  const result = draw(words, 3);

  assertEquals(result.size, 3);
});

Deno.test("draw throws if source has too few items", () => {
  assertThrows(() => {
    const words = new Set(["first", "second", "third"]);

    draw(words, 10);
  });
});
