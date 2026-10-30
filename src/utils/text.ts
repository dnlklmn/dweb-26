/** Non-breaking space — keeps the words it joins on the same line. */
const NBSP = String.fromCharCode(0xa0);

/**
 * Keeps each comma-separated item of a meta string on one line. Breaks are
 * still allowed after the commas, so "Methodology, Product Design, Vibe
 * coding" can wrap between items but never splits "Product Design" or
 * "Vibe coding" across two lines.
 */
export const nowrapItems = (value: string): string =>
  value
    .split(", ")
    .map(item => item.split(" ").join(NBSP))
    .join(", ");
