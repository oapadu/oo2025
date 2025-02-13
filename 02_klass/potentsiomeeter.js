var Potentsiomeeter = /** @class */ (function () {
    function Potentsiomeeter(nurkMin, nurkMax, rMin, rMax) {
        this.nurkMin = nurkMin;
        this.nurkMax = nurkMax;
        this.rMin = rMin;
        this.rMax = rMax;
        this.nurk = 0;
    }
    Potentsiomeeter.prototype.muudaNurk = function (delta) {
        var uusNurk = this.nurk + delta;
        if (uusNurk < this.nurkMin) {
            throw new Error("Liiga väike nurk");
        }
        if (uusNurk > this.nurkMax) {
            throw new Error("Liiga suur nurk");
        }
    };
    Potentsiomeeter.prototype.getR = function () {
        return -1;
    };
    ;
    return Potentsiomeeter;
}());
var p1 = new Potentsiomeeter(-120, 120, 100, 500);
p1.muudaNurk(80);
console.log(p1);
p1.muudaNurk(80);
console.log(p1);
