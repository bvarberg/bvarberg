import { draw } from "./draw.ts";
import { toExpandable, toTable } from "./formatter.ts";
import { replaceSection } from "./section.ts";
import wordsOfAffirmation from "./words.json" assert { type: "json" };

const uniqueWords = new Set(wordsOfAffirmation);
const words = draw(uniqueWords, 3);

const wordDisplay = toTable(words);
const moreInfo = toExpandable(
  "These words are chosen at random each day. ✨",
  "Take a look inside this repo to see how that works.",
);
const wordBasket = [wordDisplay, moreInfo].join("\n\n");

const outputFile = Deno.env.get("WORD_BASKET_OUTPUT_FILE") ?? "MOCK_README.md";

const content = await Deno.readTextFile(outputFile);
const updatedContent = replaceSection(content, "word_basket", wordBasket);

await Deno.writeTextFile(outputFile, updatedContent);
