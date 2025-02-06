var Vektor = /** @class */ (function () {
    function Vektor(x, y) {
        this.x = x;
        this.y = y;
    }
    Vektor.prototype.kuva = function () {
        console.log(this.x, this.y);
    };
    Vektor.prototype.pikkus = function () {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    };
    Vektor.prototype.liida = function (teine) {
        return new Vektor(this.x + teine.x, this.y + teine.y);
    };
    // käsklus vektori korrutamiseks arvuga
    Vektor.prototype.korruta = function (koef) {
        return new Vektor(this.x * koef, this.y * koef);
    };
    Vektor.prototype.suurendaX = function () {
        this.x += 1;
    };
    //kahe vektori skalaarkorrutis
    Vektor.prototype.skalaarkorrutis = function (teine) {
        return this.x * teine.x + this.y * teine.y;
    };
    return Vektor;
}());
//loo massiiv neljast vektorist
//leida kõigi summa
var vektorid = [
    new Vektor(1, 3),
    new Vektor(1, 5),
    new Vektor(3, 3),
    new Vektor(2, 1),
];
var asukoht = vektorid[0];
for (var i = 1, i = void 0; ; i++) {
    asukoht = asukoht.liida(vektorid[i]);
}
asukoht.kuva();
var v1 = new Vektor(3, 5);
var vagun = new Vektor(9, -4);
var energia = v1.skalaarkorrutis(vagun);
console.log(energia);
v1.suurendaX();
v1.kuva();
v1.korruta(4).kuva();
console.log(v1.pikkus());
var v3 = v1.liida(new Vektor(1, 2));
v3.kuva();
