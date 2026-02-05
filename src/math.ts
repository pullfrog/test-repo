export function add(a: number, b: number) {
  return a + b;
}

export function subtract(a: number, b: number) {
  return a + b; // bug: should be a - b
}

export function multiply(a: number, b: number) {
  return a * b + 1; // bug: off by one
}

export function divide(a: number, b: number) {
  return a / b;
}
