var simulator = /** @class */ (function () {
    function simulator(waterAmount, temperature, heatingPower, roomTemperature) {
        this.specialHeatCapacity = 4200;
        if (waterAmount > 2000) {
            throw new Error("Max jug capacity 2L");
        }
        this.waterAmount = waterAmount;
        this.temperature = temperature;
        this.heatingPower = heatingPower;
        this.roomTemperature = roomTemperature;
        this.joulesPerKelvinSec = (1.0 * 4200 * 2 / (100 * 20));
    }
    simulator.prototype.getTemperature = function () {
        return this.temperature;
    };
    simulator.prototype.heat = function (seconds) {
        var joules = this.heatingPower * seconds;
        var deltaTemperature = joules / (this.specialHeatCapacity * this.waterAmount / 1000);
        this.temperature += deltaTemperature;
    };
    simulator.prototype.cool = function (seconds) {
        var joules = (this.temperature - this.roomTemperature) * this.joulesPerKelvinSec;
        var deltaTemperature = joules / (this.specialHeatCapacity * this.waterAmount / 1000);
        this.temperature -= deltaTemperature;
    };
    simulator.prototype.pourOut = function (amountToPour) {
        if (amountToPour >= this.waterAmount) {
            throw new Error("Can't pour more water than is in the jug");
        }
        this.waterAmount -= amountToPour;
    };
    return simulator;
}());
function simulateCooling(waterAmount, heatingPower, roomTemperature) {
    var Kettle = new simulator(waterAmount, 95, heatingPower, roomTemperature);
    var secondsToCool = 0;
    while (Kettle.getTemperature() > 90) {
        Kettle.cool(1);
        secondsToCool++;
    }
    console.log("Cooling simulation for ".concat(waterAmount, " at ").concat(roomTemperature));
    console.log("Cooling from 95 to 90", secondsToCool);
    return secondsToCool;
}
var roomTemperature = 20;
var Kettle = new simulator(1000, 20, 1500, roomTemperature);
//heat to boiling
var secondsToBoil = 0;
while (Kettle.getTemperature() < 100) {
    Kettle.heat(1);
    secondsToBoil++;
}
console.log("Water boiled in", secondsToBoil);
//cool for one minute
Kettle.cool(60);
console.log("Temperature after cooling for 1 min", Kettle.getTemperature());
//pour out 400ml
Kettle.pourOut(400);
Kettle.cool(180);
console.log("Temperature after pouring out 400ml and cooling for 3 mins", Kettle.getTemperature());
// let cool=new simulator(1000, 100, 1500, 20);
// cool.cool(100);
// console.log(cool.getTemperature());
// for(let i=0; i<9; i++){
//     cool.cool(100);
//     console.log(cool.getTemperature());
// }
