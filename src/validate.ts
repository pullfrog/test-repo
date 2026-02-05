export function isPositive(n: number) {
  return n > 0;
}

export function isInRange(value: number, min: number, max: number) {
  return value >= min && value <= max;
}

export function isInteger(n: number) {
  return Number.isInteger(n);
}
