export class Calculator {
  private result: number;

  constructor() {
    this.result = 0;
  }

  add(value: number): void {
    this.result += value;
  }

  subtract(value: number): void {
    this.result -= value;
  }

  multiply(value: number): void {
    this.result *= value;
  }

  divide(value: number): void {
    if (value === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= value;
  }

  clear(): void {
    this.result = 0;
  }

  getResult(): number {
    return this.result;
  }
}
