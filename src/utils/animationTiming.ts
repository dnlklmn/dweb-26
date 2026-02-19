const TIME_UNITS = /(ms|s)$/;

function parseCssTimeToMs(value: string): number | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  const unitMatch = trimmed.match(TIME_UNITS);
  if (!unitMatch) return null;

  const unit = unitMatch[1];
  const numeric = Number.parseFloat(trimmed);
  if (Number.isNaN(numeric)) return null;

  if (unit === "s") return numeric * 1000;
  return numeric;
}

export function getCssTimeVarMs(varName: string, fallbackMs: number): number {
  if (typeof window === "undefined") return fallbackMs;
  const raw = getComputedStyle(document.documentElement).getPropertyValue(
    varName,
  );
  const parsed = parseCssTimeToMs(raw);
  return parsed ?? fallbackMs;
}
