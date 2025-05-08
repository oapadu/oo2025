var cooling = /** @class */ (function () {
    function cooling(roomTemp) {
        this.roomTemp = roomTemp;
    }
    cooling.prototype.estimateIntTemp = function (knownJugTemp, //starting temp
    knownTime, //time took to cool
    knownCooling, //how much water cooled
    desiredTime, //new time interval
    desiredCooling) {
        var knownTempDifference = knownJugTemp - this.roomTemp;
        var coolingRate = knownCooling / (knownTempDifference * knownTime);
        var requiredTempDifference = desiredCooling / (coolingRate * desiredTime);
        return this.roomTemp + requiredTempDifference;
    };
    return cooling;
}());
var coolingcalc = new cooling(20);
var estimateIntTemp = coolingcalc.estimateIntTemp(40, 100, 1, 100, 3);
console.log("Initial temperature: ".concat(estimateIntTemp));
