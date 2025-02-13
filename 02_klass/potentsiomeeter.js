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
        this.nurk = uusNurk;
    };
    Potentsiomeeter.prototype.getR = function () {
        /*arvutada potentsiomeetri hetketakistus*/
        var ratio = (this.nurk - this.nurkMin) / (this.nurkMax - this.nurkMin);
        var R = (this.rMin + (this.rMax - this.rMin) * ratio);
        return R;
    };
    ;
    return Potentsiomeeter;
}());
var p1 = new Potentsiomeeter(-120, 120, 100, 500);
p1.muudaNurk(80);
console.log(p1.getR());
p1.muudaNurk(40);
console.log(p1.getR());
