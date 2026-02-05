export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function isEven(n: number) {
  return n % 2 === 0;
}

export function toFixed(n: number, digits: number) {
  return Number(n.toFixed(digits));
}
