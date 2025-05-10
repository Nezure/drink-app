// volume-utils.ts

// Base factors relative to 1 ml
const UNIT_FACTORS: Record<string, number> = {
  ml: 1,
  cl: 10, // 1 cl = 10 ml
  us_fl_oz: 29.5735, // 1 US fl oz = 29.5735 ml
  imp_fl_oz: 28.4131, // 1 Imp fl oz = 28.4131 ml
};

// If you want to treat “metric” as a system name, you can map it to a default unit:
const SYSTEM_UNIT: Record<"metric" | "us" | "uk", keyof typeof UNIT_FACTORS> = {
  metric: "ml",
  us: "us_fl_oz",
  uk: "imp_fl_oz",
};

/**
 * Convert a raw value from one unit to another.
 *
 * @param value  the numeric quantity
 * @param from   one of "ml", "cl", "us_fl_oz", or "imp_fl_oz"
 * @param to     same as `from`
 * @returns      the converted numeric value
 */
export function convertVolume(
  value: number,
  from: keyof typeof UNIT_FACTORS,
  to: keyof typeof UNIT_FACTORS
): number {
  const inMl = value * UNIT_FACTORS[from];
  return inMl / UNIT_FACTORS[to];
}

/**
 * Convert between the three “systems” (metric, US, UK),
 * using each system’s default unit.
 *
 * @param value       the numeric quantity
 * @param fromSystem  "metric" | "us" | "uk"
 * @param toSystem    "metric" | "us" | "uk"
 * @returns           the converted numeric value
 */
export function convertSystem(
  value: number,
  fromSystem: keyof typeof SYSTEM_UNIT,
  toSystem: keyof typeof SYSTEM_UNIT
): number {
  const fromUnit = SYSTEM_UNIT[fromSystem];
  const toUnit = SYSTEM_UNIT[toSystem];
  return convertVolume(value, fromUnit, toUnit);
}
