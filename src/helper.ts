import type { CategoryUnits, UnitCategory } from "./types";

export function throwIfInvalid(
  category: UnitCategory,
  from: string,
  to: string,
  units: CategoryUnits
) {
  // Add category validation first
  if (!units[category]) {
    throw new Error(`Unknown category: ${category}`);
  }
  if (!units[category][from]) throw new Error(`Unknown unit: ${from}`);
  if (!units[category][to]) throw new Error(`Unknown unit: ${to}`);
}
