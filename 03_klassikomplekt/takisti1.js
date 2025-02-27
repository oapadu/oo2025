var Resistor = /** @class */ (function () {
    function Resistor(r, g) {
        this.r = r;
        this.g = g;
        this.draw();
    }
    Resistor.prototype.draw = function () {
        this.g.beginPath();
        this.g.rect(100, 10, 100, 50);
        this.g.stroke();
        this.g.fillText("" + this.r, 120, 20);
    };
    return Resistor;
}());
