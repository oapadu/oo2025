import { Calculator } from "../07_testid/calculator.ts";

describe("Calculator", () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  test("alustuseks on tulemus 0", () => {
    expect(calc.getResult()).toBe(0);
  });

  test("liitmine", () => {
    calc.add(5);
    expect(calc.getResult()).toBe(5);
  });

  test("lahutamine", () => {
    calc.subtract(2);
    expect(calc.getResult()).toBe(-2);
  });

  test("korrutamine", () => {
    calc.add(2);
    calc.multiply(3);
    expect(calc.getResult()).toBe(6);
  });

  test("jagamine", () => {
    calc.add(10);
    calc.divide(2);
    expect(calc.getResult()).toBe(5);
  });

  test("jagamine nulliga viskab vea", () => {
    expect(() => calc.divide(0)).toThrow("Cannot divide by zero");
  });

  test("clear nullib tulemuse", () => {
    calc.add(100);
    calc.clear();
    expect(calc.getResult()).toBe(0);
  });
});