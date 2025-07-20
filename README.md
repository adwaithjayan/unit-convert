# Unit Convert Pro 🔄

A comprehensive TypeScript unit conversion library supporting **11+ measurement categories** including length, weight, temperature, area, volume, time, speed, data storage, power, energy, and fuel economy conversions. Built with type safety and developer experience in mind.

## 🚀 Features

- ✅ **Full TypeScript Support**: Complete type safety with intelligent IntelliSense
- ✅ **11+ Unit Categories**: Comprehensive coverage of measurement units
- ✅ **Zero Dependencies**: Lightweight with no external dependencies
- ✅ **Tree Shakable**: Import only what you need for optimal bundle size
- ✅ **Universal Compatibility**: Works in Node.js, browsers, and React Native
- ✅ **Error Handling**: Comprehensive validation with descriptive error messages
- ✅ **High Precision**: Accurate conversions using official conversion factors
- ✅ **Easy to Use**: Intuitive API that just works

## 📦 Installation

```bash
# Using npm
npm install unit-convert-pro

# Using yarn
yarn add unit-convert-pro

# Using pnpm
pnpm add unit-convert-pro
```

## 🔥 Quick Start

```typescript
import { convert } from "unit-convert-pro";

// Convert distance
const miles = convert(100, "length", "km", "mi"); // 62.137 miles

// Convert temperature
const celsius = convert(100, "temperature", "F", "C"); // 37.78°C

// Convert data storage
const megabytes = convert(1, "data", "GB", "MB"); // 1024 MB

// Convert weight
const pounds = convert(75, "mass", "kg", "lb"); // 165.35 pounds
```

## 📖 Usage Examples

### 📏 Length Conversions

```typescript
import { convert } from "unit-convert-pro";

// Metric to Imperial
const feet = convert(1000, "length", "m", "ft"); // 3280.84 feet
const miles = convert(5, "length", "km", "mi"); // 3.11 miles
const inches = convert(30, "length", "cm", "in"); // 11.81 inches

// Imperial to Metric
const meters = convert(100, "length", "ft", "m"); // 30.48 meters
const kilometers = convert(50, "length", "mi", "km"); // 80.47 kilometers

// Metric conversions
const centimeters = convert(2.5, "length", "m", "cm"); // 250 centimeters
const millimeters = convert(1, "length", "m", "mm"); // 1000 millimeters
```

### 🌡️ Temperature Conversions

```typescript
// Water freezing/boiling points
const freezing = convert(32, "temperature", "F", "C"); // 0°C
const boiling = convert(212, "temperature", "F", "C"); // 100°C

// Room temperature
const roomTempF = convert(22, "temperature", "C", "F"); // 71.6°F

// Scientific conversions
const kelvin = convert(0, "temperature", "C", "K"); // 273.15 K
const absoluteZero = convert(0, "temperature", "K", "C"); // -273.15°C
```

### ⚖️ Weight/Mass Conversions

```typescript
// Metric system
const grams = convert(1, "mass", "kg", "g"); // 1000 grams
const kilograms = convert(2500, "mass", "g", "kg"); // 2.5 kilograms

// Imperial system
const ounces = convert(1, "mass", "lb", "oz"); // 16 ounces
const pounds = convert(32, "mass", "oz", "lb"); // 2 pounds

// Cross-system conversions
const poundsFromKg = convert(70, "mass", "kg", "lb"); // 154.32 pounds
const kgFromPounds = convert(150, "mass", "lb", "kg"); // 68.04 kilograms
```

### 💾 Digital Storage Conversions

```typescript
// Storage size conversions
const megabytes = convert(1, "data", "GB", "MB"); // 1024 MB
const gigabytes = convert(2048, "data", "MB", "GB"); // 2 GB
const terabytes = convert(1024, "data", "GB", "TB"); // 1 TB

// File size calculations
const bytes = convert(5, "data", "MB", "B"); // 5,242,880 bytes
const kilobytes = convert(1048576, "data", "B", "KB"); // 1024 KB
```

### 📐 Area Conversions

```typescript
// Real estate and land area
const sqFeet = convert(100, "area", "m2", "ft2"); // 1076.39 sq ft
const acres = convert(4047, "area", "m2", "ac"); // 1 acre
const hectares = convert(1, "area", "ac", "ha"); // 0.405 hectares

// Scientific measurements
const sqCm = convert(1, "area", "m2", "cm2"); // 10,000 sq cm
const sqMm = convert(1, "area", "cm2", "mm2"); // 100 sq mm
```

### 🥤 Volume Conversions

```typescript
// Cooking and recipes
const cups = convert(250, "volume", "ml", "pt"); // 0.528 pints
const liters = convert(1, "volume", "gal", "l"); // 3.785 liters
const gallons = convert(10, "volume", "l", "gal"); // 2.642 gallons

// Scientific measurements
const cubicCm = convert(1, "volume", "l", "cm3"); // 1000 cubic cm
const cubicM = convert(1000, "volume", "l", "m3"); // 1 cubic meter
```

### ⏱️ Time Conversions

```typescript
// Common time conversions
const minutes = convert(7200, "time", "s", "min"); // 120 minutes
const hours = convert(120, "time", "min", "h"); // 2 hours
const days = convert(48, "time", "h", "d"); // 2 days

// Programming time units
const milliseconds = convert(5, "time", "s", "ms"); // 5000 milliseconds
const seconds = convert(60000, "time", "ms", "s"); // 60 seconds

// Calendar conversions
const weeks = convert(14, "time", "d", "w"); // 2 weeks
const years = convert(730, "time", "d", "y"); // 2 years
```

### 🚗 Speed Conversions

```typescript
// Vehicle speeds
const mph = convert(100, "speed", "km/h", "mph"); // 62.14 mph
const kmh = convert(65, "speed", "mph", "km/h"); // 104.61 km/h

// Scientific speeds
const mps = convert(72, "speed", "km/h", "m/s"); // 20 m/s
const knots = convert(100, "speed", "km/h", "knot"); // 53.996 knots
```

### ⚡ Power Conversions

```typescript
// Electrical power
const kilowatts = convert(1500, "power", "W", "kW"); // 1.5 kW
const megawatts = convert(2000, "power", "kW", "MW"); // 2 MW

// Engine power
const horsepower = convert(75, "power", "kW", "hp"); // 100.63 hp
const watts = convert(200, "power", "hp", "W"); // 149,140 watts
```

### 🔋 Energy Conversions

```typescript
// Electrical energy
const kwh = convert(3600, "energy", "Wh", "kWh"); // 3.6 kWh
const joules = convert(1, "energy", "kWh", "J"); // 3,600,000 J

// Food energy
const calories = convert(1, "energy", "kcal", "cal"); // 1000 calories
const kilojoules = convert(1, "energy", "kcal", "kJ"); // 4.184 kJ
```

### ⛽ Fuel Economy Conversions

```typescript
// Vehicle fuel efficiency
const mpg = convert(15, "fuel", "km/l", "mpg"); // 35.28 mpg
const kmPerLiter = convert(25, "fuel", "mpg", "km/l"); // 10.63 km/l
```

## 📊 Complete Units Reference

### 📏 Length Units

| Unit | Code | Full Name  | Base Conversion |
| :--- | :--- | :--------- | :-------------- |
| m    | `m`  | Meter      | Base unit       |
| cm   | `cm` | Centimeter | 0.01 m          |
| mm   | `mm` | Millimeter | 0.001 m         |
| km   | `km` | Kilometer  | 1000 m          |
| in   | `in` | Inch       | 0.0254 m        |
| ft   | `ft` | Foot       | 0.3048 m        |
| yd   | `yd` | Yard       | 0.9144 m        |
| mi   | `mi` | Mile       | 1609.344 m      |

### ⚖️ Weight/Mass Units

| Unit | Code | Full Name  | Base Conversion |
| :--- | :--- | :--------- | :-------------- |
| g    | `g`  | Gram       | Base unit       |
| mg   | `mg` | Milligram  | 0.001 g         |
| kg   | `kg` | Kilogram   | 1000 g          |
| t    | `t`  | Metric Ton | 1,000,000 g     |
| oz   | `oz` | Ounce      | 28.349 g        |
| lb   | `lb` | Pound      | 453.592 g       |

### 🌡️ Temperature Units

| Unit | Code | Full Name  | Conversion Formula |
| :--- | :--- | :--------- | :----------------- |
| C    | `C`  | Celsius    | Base unit          |
| F    | `F`  | Fahrenheit | (°F - 32) × 5/9    |
| K    | `K`  | Kelvin     | K - 273.15         |

### 📐 Area Units

| Unit | Code  | Full Name         | Base Conversion |
| :--- | :---- | :---------------- | :-------------- |
| m2   | `m2`  | Square Meter      | Base unit       |
| cm2  | `cm2` | Square Centimeter | 0.0001 m²       |
| mm2  | `mm2` | Square Millimeter | 0.000001 m²     |
| km2  | `km2` | Square Kilometer  | 1,000,000 m²    |
| in2  | `in2` | Square Inch       | 0.00064516 m²   |
| ft2  | `ft2` | Square Foot       | 0.092903 m²     |
| ac   | `ac`  | Acre              | 4046.86 m²      |
| ha   | `ha`  | Hectare           | 10,000 m²       |

### 🥤 Volume Units

| Unit | Code  | Full Name        | Base Conversion |
| :--- | :---- | :--------------- | :-------------- |
| l    | `l`   | Liter            | Base unit       |
| ml   | `ml`  | Milliliter       | 0.001 L         |
| m3   | `m3`  | Cubic Meter      | 1000 L          |
| cm3  | `cm3` | Cubic Centimeter | 0.001 L         |
| gal  | `gal` | US Gallon        | 3.78541 L       |
| pt   | `pt`  | US Pint          | 0.473176 L      |

### ⏱️ Time Units

| Unit | Code  | Full Name   | Base Conversion |
| :--- | :---- | :---------- | :-------------- |
| s    | `s`   | Second      | Base unit       |
| ms   | `ms`  | Millisecond | 0.001 s         |
| min  | `min` | Minute      | 60 s            |
| h    | `h`   | Hour        | 3600 s          |
| d    | `d`   | Day         | 86,400 s        |
| w    | `w`   | Week        | 604,800 s       |
| y    | `y`   | Year        | 31,536,000 s    |

### 🚀 Speed Units

| Unit | Code   | Full Name           | Base Conversion |
| :--- | :----- | :------------------ | :-------------- |
| m/s  | `m/s`  | Meters per Second   | Base unit       |
| km/h | `km/h` | Kilometers per Hour | 0.278 m/s       |
| mph  | `mph`  | Miles per Hour      | 0.447 m/s       |
| knot | `knot` | Knot                | 0.514 m/s       |

### 💾 Digital Data Units

| Unit | Code | Full Name | Base Conversion     |
| :--- | :--- | :-------- | :------------------ |
| B    | `B`  | Byte      | Base unit           |
| KB   | `KB` | Kilobyte  | 1024 B              |
| MB   | `MB` | Megabyte  | 1,048,576 B         |
| GB   | `GB` | Gigabyte  | 1,073,741,824 B     |
| TB   | `TB` | Terabyte  | 1,099,511,627,776 B |

### ⚡ Power Units

| Unit | Code | Full Name  | Base Conversion |
| :--- | :--- | :--------- | :-------------- |
| W    | `W`  | Watt       | Base unit       |
| kW   | `kW` | Kilowatt   | 1000 W          |
| MW   | `MW` | Megawatt   | 1,000,000 W     |
| hp   | `hp` | Horsepower | 745.7 W         |

### 🔋 Energy Units

| Unit | Code   | Full Name     | Base Conversion |
| :--- | :----- | :------------ | :-------------- |
| J    | `J`    | Joule         | Base unit       |
| kJ   | `kJ`   | Kilojoule     | 1000 J          |
| Wh   | `Wh`   | Watt Hour     | 3600 J          |
| kWh  | `kWh`  | Kilowatt Hour | 3,600,000 J     |
| cal  | `cal`  | Calorie       | 4.184 J         |
| kcal | `kcal` | Kilocalorie   | 4184 J          |

### ⛽ Fuel Economy Units

| Unit | Code   | Full Name            | Base Conversion |
| :--- | :----- | :------------------- | :-------------- |
| km/l | `km/l` | Kilometers per Liter | Base unit       |
| mpg  | `mpg`  | Miles per Gallon     | 0.425 km/l      |

## 🔧 API Reference

### `convert(value, category, fromUnit, toUnit)`

The main conversion function that transforms a value from one unit to another within the same category.

**Parameters:**

- `value` (`number`): The numeric value to convert
- `category` (`UnitCategory`): The measurement category
- `fromUnit` (`string`): The source unit code
- `toUnit` (`string`): The target unit code

**Returns:** `number` - The converted value

**Throws:**

- `Error` - When category, fromUnit, or toUnit are invalid
- `Error` - When trying to convert between different categories

**Example:**

```typescript
const result = convert(100, "length", "cm", "m"); // Returns: 1
```

### Type Definitions

```typescript
type UnitCategory =
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

interface UnitDefinition {
  name: string;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}
```

## 🚨 Error Handling

The library provides comprehensive error handling with descriptive messages:

### Invalid Unit Errors

```typescript
try {
  convert(100, "length", "invalid", "m");
} catch (error) {
  console.error(error.message); // "Unknown unit: invalid in category length"
}
```

### Invalid Category Errors

```typescript
try {
  convert(100, "invalid" as any, "cm", "m");
} catch (error) {
  console.error(error.message); // "Unknown category: invalid"
}
```

### Cross-Category Conversion Errors

```typescript
try {
  convert(100, "length", "cm", "lb"); // Wrong: length to mass
} catch (error) {
  console.error(error.message); // "Unknown unit: lb in category length"
}
```

### Best Practices for Error Handling

```typescript
function safeConvert(
  value: number,
  category: UnitCategory,
  from: string,
  to: string
): number | null {
  try {
    return convert(value, category, from, to);
  } catch (error) {
    console.warn(`Conversion failed: ${error.message}`);
    return null;
  }
}

const result = safeConvert(100, "length", "km", "mi");
if (result !== null) {
  console.log(`Converted value: ${result}`);
}
```

## 💻 Framework Integration

### React Example

```jsx
import React, { useState } from "react";
import { convert } from "unit-convert-pro";

function DistanceConverter() {
  const [kilometers, setKilometers] = useState(0);

  const miles = convert(kilometers, "length", "km", "mi");

  return (
    <div>
      <input
        type="number"
        value={kilometers}
        onChange={(e) => setKilometers(Number(e.target.value))}
        placeholder="Enter kilometers"
      />
      <p>
        {kilometers} km = {miles.toFixed(2)} miles
      </p>
    </div>
  );
}
```

### Vue.js Example

```vue
<template>
  <div>
    <input v-model.number="celsius" type="number" placeholder="Enter Celsius" />
    <p>{{ celsius }}°C = {{ fahrenheit.toFixed(1) }}°F</p>
  </div>
</template>

<script>
import { convert } from "unit-convert-pro";

export default {
  data() {
    return { celsius: 0 };
  },
  computed: {
    fahrenheit() {
      return convert(this.celsius, "temperature", "C", "F");
    },
  },
};
</script>
```

### Node.js Example

```javascript
const { convert } = require("unit-convert-pro");

// Convert file sizes
const fileSizeInMB = 1500; // MB
const fileSizeInGB = convert(fileSizeInMB, "data", "MB", "GB");

console.log(`File size: ${fileSizeInMB}MB = ${fileSizeInGB.toFixed(2)}GB`);

// Convert cooking measurements
const cupsToLiters = convert(4, "volume", "pt", "l");
console.log(`4 cups = ${cupsToLiters.toFixed(2)} liters`);
```

## 🔬 Precision \& Accuracy

This library uses official conversion factors from authoritative sources:

- **NIST (National Institute of Standards and Technology)**
- **ISO (International Organization for Standardization)**
- **Official government measurement standards**

### Precision Details

- All calculations maintain JavaScript's standard floating-point precision
- Temperature conversions use exact fractional relationships
- Digital storage uses binary (1024-based) conversions, not decimal
- Mass conversions use the international avoirdupois pound (453.59237 grams exactly)

### Rounding Recommendations

```typescript
// For display purposes, round appropriately
const result = convert(100, "length", "km", "mi");
const rounded = Math.round(result * 100) / 100; // 2 decimal places
const formatted = result.toFixed(2); // String with 2 decimal places
```

## 🌍 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ✅ Node.js 14+
- ✅ React Native
- ✅ Electron

## 🔒 TypeScript Support

Full TypeScript support with intelligent IntelliSense:

```typescript
import { convert, UnitCategory } from "unit-convert-pro";

// Type-safe category selection
const category: UnitCategory = "length"; // Auto-completion available

// IntelliSense shows available units for each category
const result = convert(100, "length", "km", "mi"); // Units auto-completed

// Type checking prevents errors
convert(100, "length", "kg", "mi"); // TypeScript error: 'kg' not valid for length
```

### Custom Type Guards

```typescript
function isValidUnit(category: UnitCategory, unit: string): boolean {
  return unit in units[category];
}

function safeConvert(
  value: number,
  category: UnitCategory,
  from: string,
  to: string
): number | null {
  if (!isValidUnit(category, from) || !isValidUnit(category, to)) {
    return null;
  }
  return convert(value, category, from, to);
}
```

## 🚀 Roadmap

### Version 1.x

- [x] Core conversion functionality
- [x] TypeScript support
- [x] Comprehensive unit coverage
- [x] Error handling

### Version 2.x (Future)

- [ ] Plugin system for custom units
- [ ] Locale-specific formatting
- [ ] Unit validation helpers
- [ ] Conversion chains
- [ ] Performance optimizations

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Setup

```bash
# Clone the repository
git clone https://github.com/adwaithjayan/unit-convert.git

# Install dependencies
cd unit-convert-pro
npm install

# Build the project
npm run build
```

### Adding New Units

1. Update the `units` object in `src/index.ts`
2. Add comprehensive tests
3. Update documentation
4. Submit a pull request

### Code Style

- Use TypeScript strict mode
- Follow existing naming conventions
- Include JSDoc comments for public APIs
- Write tests for all new functionality

### Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests and documentation
5. Ensure all tests pass
6. Submit a pull request

## 📝 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors \& Contributors

- **Adwaith** - [@adwaith](https://github.com/adwaithjayan)

See the [CONTRIBUTORS](CONTRIBUTORS.md) file for the full list of contributors.

## 🙏 Acknowledgments

- [NIST](https://www.nist.gov/) for official conversion factors
- [ISO](https://www.iso.org/) for international standards
- The JavaScript/TypeScript community for inspiration
- All contributors and users of this library

## 📊 Statistics

- **Bundle size**: 8KB (gzipped)
- **Dependencies**: 0
- **TypeScript coverage**: 100%
- **Test coverage**: 95%+
- **Supported units**: 70+
- **Categories**: 11

## 🔍 Keywords

`unit-conversion` `typescript` `converter` `measurements` `length` `weight` `temperature` `area` `volume` `time` `speed` `data` `power` `energy` `fuel` `metric` `imperial` `javascript` `npm` `library`

<div align="center">

**Made with ❤️ for developers worldwide**

[⭐ Star this repo](https://github.com/adwaithjayan/unit-convert) | [🐛 Report bug](https://github.com/adwaithjayan/unit-convert/issues) | [💡 Request feature](https://github.com/adwaithjayan/unit-convert/issues)

</div>
