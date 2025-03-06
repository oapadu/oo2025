var Palk = /** @class */ (function () {
    function Palk(palgad, koefitsiendid, palgad2) {
        this.palgad = palgad;
        this.koefitsiendid = koefitsiendid;
        this.palgad2 = palgad2;
    }
    Palk.prototype.uusPalk = function () {
        var palk = this.palgad[this.palgad.length - 1];
        for (var nr = 0; nr < this.koefitsiendid.length; nr++) {
            palk = palk * this.koefitsiendid[nr];
            this.palgad.push(palk);
        }
        return this.palgad;
    };
    Palk.prototype.keskmineKoef = function () {
        var summa = 1;
        for (var nr = 0; nr < this.koefitsiendid.length; nr++) {
            summa *= this.koefitsiendid[nr];
        }
        var keskmineKoef = Math.pow(summa, 1 / this.koefitsiendid.length);
        return keskmineKoef;
    };
    Palk.prototype.keskmineKoefPalgad = function () {
        var palk2 = 0;
        for (var nr = 0; nr < this.koefitsiendid.length; nr++) {
            palk2 = this.palgad2[nr] * uuedPalgad.keskmineKoef();
            this.palgad2.push(palk2);
        }
        return this.palgad2;
    };
    return Palk;
}());
var esimenepalk = 10000;
var palgad = [esimenepalk];
var palgad2 = [esimenepalk];
var koefitsiendid = [1.05, 1.1, 1.2, 1.05];
var uuedPalgad = new Palk(palgad, koefitsiendid, palgad2);
console.log(uuedPalgad.uusPalk());
console.log(palgad[3]);
console.log("Keskmine koef on " + uuedPalgad.keskmineKoef());
console.log(uuedPalgad.keskmineKoefPalgad());
