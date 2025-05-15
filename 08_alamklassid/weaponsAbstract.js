var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Weapon = /** @class */ (function () {
    function Weapon(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    return Weapon;
}());
var Sword = /** @class */ (function (_super) {
    __extends(Sword, _super);
    function Sword(name, damage) {
        return _super.call(this, name, damage) || this;
    }
    Sword.prototype.use = function () {
        console.log("".concat(this.name, " l\u00F5ikab vaenlast! Kahju: ").concat(this.damage));
    };
    return Sword;
}(Weapon));
var LaserGun = /** @class */ (function (_super) {
    __extends(LaserGun, _super);
    function LaserGun(name, damage, range) {
        var _this = _super.call(this, name, damage) || this;
        _this.range = range;
        return _this;
    }
    LaserGun.prototype.use = function () {
        console.log("".concat(this.name, " tulistab laserkiirega! Kahju: ").concat(this.damage, ", Ulatus: ").concat(this.range, "m"));
    };
    return LaserGun;
}(Weapon));
var Pistol = /** @class */ (function (_super) {
    __extends(Pistol, _super);
    function Pistol(name, damage, accuracy) {
        var _this = _super.call(this, name, damage) || this;
        _this.accuracy = accuracy;
        return _this;
    }
    Pistol.prototype.use = function () {
        console.log("".concat(this.name, " laseb! Kahju: ").concat(this.damage, ", T\u00E4psus: ").concat(this.accuracy, "%"));
    };
    return Pistol;
}(Weapon));
var inventory = [
    new Sword("KV Multitool", 25),
    new LaserGun("Punane Laser", 40, 300),
    new Pistol("Glock", 15, 150),
    new Pistol("Revolver", 40, 100),
];
console.log("Mängija relvad:");
inventory.forEach(function (weapon) {
    console.log("- ".concat(weapon.name, " ").concat(weapon.damage));
    weapon.use();
});
