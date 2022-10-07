import { draw } from "./draw.ts";
import { toExpandable, toTable } from "./formatter.ts";
import wordsOfAffirmation from "./words.json" assert { type: "json" };

const uniqueWords = new Set(wordsOfAffirmation);
const words = draw(uniqueWords, 3);

const wordDisplay = toTable(words);
const moreInfo = toExpandable(
  "✨",
  "These words are chosen at random each day. New words will appear here tomorrow morning.",
);
const wordBasket = [wordDisplay, moreInfo].join("\n\n");

const outputFile = Deno.env.get("WORD_BASKET_OUTPUT_FILE") ?? "MOCK_README.md";
await Deno.writeTextFile(outputFile, wordBasket);
