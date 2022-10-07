/**
 * Picks a number of unique, random strings from the source (assuming).
 */
export function draw(source: Set<string>, howMany: number): Set<string> {
  if (source.size < howMany) {
    throw new Error(
      `there are not enough values in the source to draw ${howMany}`,
    );
  }

  const indexed = Array.from(source);
  const hand = new Set<string>();
  while (hand.size < howMany) {
    const randomIndex = Math.floor(Math.random() * indexed.length);
    hand.add(indexed[randomIndex]);
  }

  return hand;
}
