// types.d.ts
export type UnitCategory =
  | "length"
  | "mass"
  | "temperature"
  | "area"
  | "volume"
  | "time"
  | "speed"
  | "data"
  | "power"
  | "energy"
  | "fuel";

export interface UnitDefinition {
  name: string;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}

export type UnitsMap = {
  [unit: string]: UnitDefinition;
};

export type CategoryUnits = {
  [category in UnitCategory]: UnitsMap;
};
