"use strict";
exports.__esModule = true;
var calculator = /** @class */ (function () {
    function calculator() {
    }
    calculator.prototype.plus = function (a, b) {
        return a + b;
    };
    calculator.prototype.minus = function (a, b) {
        return a - b;
    };
    calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    calculator.prototype.divide = function (a, b) {
        return a / b;
    };
    return calculator;
}());
exports.calculator = calculator;
