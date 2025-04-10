var Andmed = /** @class */ (function () {
    function Andmed(x, y) {
        this.x = x;
        this.y = y;
    }
    Andmed.prototype.displayKolmnurk = function () {
        console.log("X-koordinaadid: " + this.x.join(", "));
        console.log("Y-koordinaadid: " + this.y.join(", "));
    };
    Andmed.prototype.lisaPunkt = function (x, y) {
        this.x.push(x);
        this.y.push(y);
    };
    Andmed.prototype.getP = function () {
        var side1 = Math.sqrt(Math.pow(this.x[1] - this.x[0], 2) + Math.pow(this.y[1] - this.x[0], 2));
        var side2 = Math.sqrt(Math.pow(this.x[2] - this.x[1], 2) + Math.pow(this.y[2] - this.x[1], 2));
        var side3 = Math.sqrt(Math.pow(this.x[2] - this.x[0], 2) + Math.pow(this.y[2] - this.x[0], 2));
        var P = side1 + side2 + side3;
        console.log(P);
    };
    return Andmed;
}());
var kolmnurk1 = new Andmed([1, 2, 3], [5, 4, 3]);
var kolmnurk2 = new Andmed([5, 2, 8], [3, 1, 7]);
kolmnurk1.lisaPunkt(20, 60);
kolmnurk1.displayKolmnurk();
kolmnurk2.displayKolmnurk();
kolmnurk1.getP();
kolmnurk2.getP();
