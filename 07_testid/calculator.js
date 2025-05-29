"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.result = 0;
    }
    Calculator.prototype.add = function (value) {
        this.result += value;
    };
    Calculator.prototype.subtract = function (value) {
        this.result -= value;
    };
    Calculator.prototype.multiply = function (value) {
        this.result *= value;
    };
    Calculator.prototype.divide = function (value) {
        if (value === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= value;
    };
    Calculator.prototype.clear = function () {
        this.result = 0;
    };
    Calculator.prototype.getResult = function () {
        return this.result;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
