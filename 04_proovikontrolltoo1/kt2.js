var Klass = /** @class */ (function () {
    function Klass(numbrid) {
        this.numbrid = numbrid;
    }
    Klass.prototype.findKeskmine = function () {
        var summa = 0;
        for (var nr = 0; nr < numbrid.length; nr++) {
            summa += numbrid[nr];
        }
        var keskmine = summa / numbrid.length;
        return keskmine;
    };
    Klass.prototype.libisevKeskmine = function (numbrid) {
        var tulem = [];
        for (var nr = 0; nr < numbrid.length - 2; nr++) {
            var keskmine = (numbrid[nr] + numbrid[nr + 1] + numbrid[nr + 2]) / 3;
            tulem.push(keskmine);
        }
        return tulem;
    };
    Klass.prototype.addNumber = function () {
        this.numbrid.push(1);
    };
    return Klass;
}());
var numbrid = [1, 2, 3, 4, 5];
var klassNumbrid = new Klass(numbrid);
console.log(numbrid);
klassNumbrid.addNumber();
console.log(numbrid);
console.log(klassNumbrid.libisevKeskmine(numbrid));
console.log(klassNumbrid.findKeskmine());
