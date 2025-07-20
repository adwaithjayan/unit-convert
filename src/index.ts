import { throwIfInvalid } from "./helper";
import type { CategoryUnits, UnitCategory } from "./types";

export const units: CategoryUnits = {
  // LENGTH
  length: {
    m: { name: "meter", toBase: (v) => v, fromBase: (v) => v },
    cm: {
      name: "centimeter",
      toBase: (v) => v / 100,
      fromBase: (v) => v * 100,
    },
    mm: {
      name: "millimeter",
      toBase: (v) => v / 1000,
      fromBase: (v) => v * 1000,
    },
    km: {
      name: "kilometer",
      toBase: (v) => v * 1000,
      fromBase: (v) => v / 1000,
    },
    in: {
      name: "inch",
      toBase: (v) => v * 0.0254,
      fromBase: (v) => v / 0.0254,
    },
    ft: {
      name: "foot",
      toBase: (v) => v * 0.3048,
      fromBase: (v) => v / 0.3048,
    },
    yd: {
      name: "yard",
      toBase: (v) => v * 0.9144,
      fromBase: (v) => v / 0.9144,
    },
    mi: {
      name: "mile",
      toBase: (v) => v * 1609.344,
      fromBase: (v) => v / 1609.344,
    },
  },

  // WEIGHT/MASS
  mass: {
    g: { name: "gram", toBase: (v) => v, fromBase: (v) => v },
    kg: {
      name: "kilogram",
      toBase: (v) => v * 1000,
      fromBase: (v) => v / 1000,
    },
    mg: {
      name: "milligram",
      toBase: (v) => v / 1000,
      fromBase: (v) => v * 1000,
    },
    lb: {
      name: "pound",
      toBase: (v) => v * 453.59237,
      fromBase: (v) => v / 453.59237,
    },
    oz: {
      name: "ounce",
      toBase: (v) => v * 28.349523125,
      fromBase: (v) => v / 28.349523125,
    },
    t: {
      name: "ton",
      toBase: (v) => v * 1_000_000,
      fromBase: (v) => v / 1_000_000,
    },
  },

  // TEMPERATURE
  temperature: {
    C: { name: "Celsius", toBase: (v) => v, fromBase: (v) => v },
    F: {
      name: "Fahrenheit",
      toBase: (v) => ((v - 32) * 5) / 9,
      fromBase: (v) => (v * 9) / 5 + 32,
    },
    K: {
      name: "Kelvin",
      toBase: (v) => v - 273.15,
      fromBase: (v) => v + 273.15,
    },
  },

  // AREA
  area: {
    m2: { name: "square meter", toBase: (v) => v, fromBase: (v) => v },
    cm2: {
      name: "square centimeter",
      toBase: (v) => v / 10_000,
      fromBase: (v) => v * 10_000,
    },
    mm2: {
      name: "square millimeter",
      toBase: (v) => v / 1_000_000,
      fromBase: (v) => v * 1_000_000,
    },
    km2: {
      name: "square kilometer",
      toBase: (v) => v * 1_000_000,
      fromBase: (v) => v / 1_000_000,
    },
    ft2: {
      name: "square foot",
      toBase: (v) => v * 0.09290304,
      fromBase: (v) => v / 0.09290304,
    },
    in2: {
      name: "square inch",
      toBase: (v) => v * 0.00064516,
      fromBase: (v) => v / 0.00064516,
    },
    ac: {
      name: "acre",
      toBase: (v) => v * 4046.8564224,
      fromBase: (v) => v / 4046.8564224,
    },
    ha: {
      name: "hectare",
      toBase: (v) => v * 10_000,
      fromBase: (v) => v / 10_000,
    },
  },

  // VOLUME
  volume: {
    l: { name: "liter", toBase: (v) => v, fromBase: (v) => v },
    ml: {
      name: "milliliter",
      toBase: (v) => v / 1000,
      fromBase: (v) => v * 1000,
    },
    m3: {
      name: "cubic meter",
      toBase: (v) => v * 1000,
      fromBase: (v) => v / 1000,
    },
    cm3: {
      name: "cubic centimeter",
      toBase: (v) => v / 1000,
      fromBase: (v) => v * 1000,
    },
    gal: {
      name: "US gallon",
      toBase: (v) => v * 3.78541,
      fromBase: (v) => v / 3.78541,
    },
    pt: {
      name: "US pint",
      toBase: (v) => v * 0.473176,
      fromBase: (v) => v / 0.473176,
    },
  },

  // TIME
  time: {
    s: { name: "second", toBase: (v) => v, fromBase: (v) => v },
    ms: {
      name: "millisecond",
      toBase: (v) => v / 1000,
      fromBase: (v) => v * 1000,
    },
    min: { name: "minute", toBase: (v) => v * 60, fromBase: (v) => v / 60 },
    h: { name: "hour", toBase: (v) => v * 3600, fromBase: (v) => v / 3600 },
    d: { name: "day", toBase: (v) => v * 86400, fromBase: (v) => v / 86400 },
    w: { name: "week", toBase: (v) => v * 604800, fromBase: (v) => v / 604800 },
    y: {
      name: "year",
      toBase: (v) => v * 31_536_000,
      fromBase: (v) => v / 31_536_000,
    },
  },

  // SPEED
  speed: {
    "m/s": { name: "meters per second", toBase: (v) => v, fromBase: (v) => v },
    "km/h": {
      name: "kilometers per hour",
      toBase: (v) => v / 3.6,
      fromBase: (v) => v * 3.6,
    },
    mph: {
      name: "miles per hour",
      toBase: (v) => v * 0.44704,
      fromBase: (v) => v / 0.44704,
    },
    knot: {
      name: "knot",
      toBase: (v) => v * 0.514444,
      fromBase: (v) => v / 0.514444,
    },
  },

  // DIGITAL / DATA
  data: {
    B: { name: "byte", toBase: (v) => v, fromBase: (v) => v },
    KB: {
      name: "kilobyte",
      toBase: (v) => v * 1024,
      fromBase: (v) => v / 1024,
    },
    MB: {
      name: "megabyte",
      toBase: (v) => v * 1024 * 1024,
      fromBase: (v) => v / (1024 * 1024),
    },
    GB: {
      name: "gigabyte",
      toBase: (v) => v * 1024 * 1024 * 1024,
      fromBase: (v) => v / (1024 * 1024 * 1024),
    },
    TB: {
      name: "terabyte",
      toBase: (v) => v * 1024 ** 4,
      fromBase: (v) => v / 1024 ** 4,
    },
  },

  // POWER
  power: {
    W: { name: "watt", toBase: (v) => v, fromBase: (v) => v },
    kW: {
      name: "kilowatt",
      toBase: (v) => v * 1000,
      fromBase: (v) => v / 1000,
    },
    MW: {
      name: "megawatt",
      toBase: (v) => v * 1_000_000,
      fromBase: (v) => v / 1_000_000,
    },
    hp: {
      name: "horsepower",
      toBase: (v) => v * 745.699872,
      fromBase: (v) => v / 745.699872,
    },
  },

  // ENERGY
  energy: {
    J: { name: "joule", toBase: (v) => v, fromBase: (v) => v },
    kJ: {
      name: "kilojoule",
      toBase: (v) => v * 1000,
      fromBase: (v) => v / 1000,
    },
    Wh: {
      name: "watt hour",
      toBase: (v) => v * 3600,
      fromBase: (v) => v / 3600,
    },
    kWh: {
      name: "kilowatt hour",
      toBase: (v) => v * 3_600_000,
      fromBase: (v) => v / 3_600_000,
    },
    cal: {
      name: "calorie",
      toBase: (v) => v * 4.184,
      fromBase: (v) => v / 4.184,
    },
    kcal: {
      name: "kilocalorie",
      toBase: (v) => v * 4184,
      fromBase: (v) => v / 4184,
    },
  },

  // FUEL ECONOMY
  fuel: {
    "km/l": {
      name: "kilometer per liter",
      toBase: (v) => v,
      fromBase: (v) => v,
    },
    mpg: {
      name: "miles per gallon",
      toBase: (v) => v * 0.425144,
      fromBase: (v) => v / 0.425144,
    },
  },
};

export function convert(
  value: number,
  category: UnitCategory,
  fromUnit: string,
  toUnit: string
): number {
  throwIfInvalid(category, fromUnit, toUnit, units);
  if (fromUnit === toUnit) return value;

  const from = units[category][fromUnit]!;
  const to = units[category][toUnit]!;

  return to.fromBase(from.toBase(value));
}

export type {
  UnitCategory,
  UnitDefinition,
  UnitsMap,
  CategoryUnits,
} from "./types";
