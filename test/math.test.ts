import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide } from "../src/math";

describe("math", () => {
  it("adds", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("subtracts", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it("multiplies", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it("divides", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("throws on division by zero", () => {
    expect(() => divide(1, 0)).toThrow("division by zero");
  });
});
