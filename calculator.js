var calculateor = /** @class */ (function () {
    function calculateor() {
        var result;
    }
    calculateor.prototype.tambah = function (a, b) {
        this.result = a + b;
    };
    calculateor.prototype.kurang = function (a, b) {
        this.result = a - b;
    };
    calculateor.prototype.kali = function (a, b) {
        this.result = a * b;
    };
    calculateor.prototype.bagi = function (a, b) {
        this.result = a / b;
    };
    return calculateor;
}());
var calc = new calculateor();
calc.tambah(1, 2);
console.log(calc.result);
calc.kurang(calc.result, 1);
console.log(calc.result);
calc.kali(calc.result, 2);
console.log(calc.result);
calc.bagi(calc.result, 2);
console.log(calc.result);
