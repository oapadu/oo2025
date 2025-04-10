var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractResistor = /** @class */ (function () {
    function AbstractResistor() {
    }
    AbstractResistor.prototype.getCurrent = function (u) {
        return u / this.getResistance();
    };
    return AbstractResistor;
}());
var Resistor = /** @class */ (function (_super) {
    __extends(Resistor, _super);
    function Resistor(r) {
        var _this = _super.call(this) || this;
        _this.r = 0;
        _this.r = r;
        return _this;
    }
    Resistor.prototype.getResistance = function () {
        return this.r;
    };
    return Resistor;
}(AbstractResistor));
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.on = false;
        return _this;
    }
    Switch.prototype.setOn = function (state) {
        this.on = state;
    };
    Switch.prototype.getResistance = function () {
        return this.on ? 0 : 1000000000;
    };
    Switch.prototype.getCurrent = function (u) {
        if (u > 0 && this.on) {
            throw new Error("short circuit");
        }
        return _super.prototype.getCurrent.call(this, u);
    };
    return Switch;
}(AbstractResistor));
var MultipleConnection = /** @class */ (function (_super) {
    __extends(MultipleConnection, _super);
    function MultipleConnection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resistors = [];
        return _this;
    }
    MultipleConnection.prototype.addResistor = function (r) {
        this.resistors.push(r);
    };
    return MultipleConnection;
}(AbstractResistor));
var ParallelConnection = /** @class */ (function (_super) {
    __extends(ParallelConnection, _super);
    function ParallelConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParallelConnection.prototype.getResistance = function () {
        var inverseSum = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var Resistor_1 = _a[_i];
            inverseSum += 1 / Resistor_1.getResistance();
        }
        return 1 / inverseSum;
    };
    return ParallelConnection;
}(MultipleConnection));
var SeriesConnection = /** @class */ (function (_super) {
    __extends(SeriesConnection, _super);
    function SeriesConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesConnection.prototype.getResistance = function () {
        var totalSum = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var Resistor_2 = _a[_i];
            totalSum += Resistor_2.getResistance();
        }
        return totalSum;
    };
    return SeriesConnection;
}(MultipleConnection));
var p = new ParallelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(240));
p.addResistor(new Resistor(120));
p.addResistor(new Resistor(50));
console.log(p.getResistance());
var totalresistance = p.getResistance();
console.log("Total resistance", totalresistance);
var voltage = 5;
var current = voltage / p.getResistance();
console.log("Current", current);
var p1 = new ParallelConnection();
p.addResistor(new Resistor(110));
p.addResistor(new Resistor(110));
console.log(p1.getResistance());
console.log("Total resistance of two 110 ohm resistors", totalresistance);
var p2 = new SeriesConnection();
p.addResistor(new Resistor(110));
p.addResistor(new Resistor(220));
console.log("110, 220", p2.getResistance());
var p3 = new SeriesConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(440));
console.log("220, 440", p3.getResistance());
var finalseries = new SeriesConnection();
finalseries.addResistor(p2);
finalseries.addResistor(p3);
console.log("Combined", finalseries.getResistance());
var seriescircuit = new SeriesConnection();
p.addResistor(new Resistor(110));
p.addResistor(new Resistor(220));
console.log("110, 220", seriescircuit.getResistance());
var parallelconnection1 = new ParallelConnection();
p.addResistor(seriescircuit);
p.addResistor(new Resistor(330));
console.log("Total resistance of of parallelseries", parallelconnection1.getResistance());
var circuit = [new Resistor(100), new Switch()];
for (var _i = 0, circuit_1 = circuit; _i < circuit_1.length; _i++) {
    var element = circuit_1[_i];
    console.log(element.getResistance());
}
function sumResistances(element) {
    var sum = 0;
    for (var _i = 0, element_1 = element; _i < element_1.length; _i++) {
        var r = element_1[_i];
        sum += r.getResistance();
    }
    return sum;
}
// console.log("Total resistance", sumResistances(circuit));
// (circuit[1] as Switch).setOn(true);
// console.log("Total resistance", sumResistances(circuit));
// let s1=new Switch();
// console.log(s1.getResistance());
// s1.setOn(true);
// console.log(s1.getResistance());
// //console.log(s1.getCurrent(5));
// let r1:AbstractResistor=new Resistor(220);
// console.log(r1.getResistance());
