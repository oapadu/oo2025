var Sword = /** @class */ (function () {
    function Sword(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    Sword.prototype.use = function () {
        console.log("".concat(this.name, " l\u00F5ikab vaenlast! Kahju: ").concat(this.damage));
    };
    return Sword;
}());
var LaserGun = /** @class */ (function () {
    function LaserGun(name, damage, range) {
        this.name = name;
        this.damage = damage;
        this.range = range;
    }
    LaserGun.prototype.use = function () {
        console.log("".concat(this.name, " tulistab laserkiirega! Kahju: ").concat(this.damage, ", Ulatus: ").concat(this.range, "m"));
    };
    return LaserGun;
}());
var Pistol = /** @class */ (function () {
    function Pistol(name, damage, accuracy) {
        this.name = name;
        this.damage = damage;
        this.accuracy = accuracy;
    }
    Pistol.prototype.use = function () {
        console.log("".concat(this.name, " laseb! Kahju: ").concat(this.damage, ", T\u00E4psus: ").concat(this.accuracy, "%"));
    };
    return Pistol;
}());
var inventory = [
    new Sword("KV Multitool", 25),
    new LaserGun("Punane Laser", 40, 300),
    new Pistol("Glock", 15, 150),
    new Pistol("Revolver", 40, 100),
];
console.log("Mängija relvad:");
inventory.forEach(function (weapon) {
    console.log("- ".concat(weapon.name, " ").concat(weapon.damage, " "));
    weapon.use();
});
