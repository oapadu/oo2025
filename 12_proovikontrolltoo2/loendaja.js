"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LauseTekst = exports.SonaTekst = exports.Tekst = void 0;
var Tekst = /** @class */ (function () {
    function Tekst() {
    }
    Tekst.prototype.loenda = function (täht) {
        var sisu = this.kysiSisu().toLowerCase();
        var t = täht.toLowerCase();
        var count = 0;
        for (var _i = 0, sisu_1 = sisu; _i < sisu_1.length; _i++) {
            var char = sisu_1[_i];
            if (char === t)
                count++;
        }
        return count;
    };
    return Tekst;
}());
exports.Tekst = Tekst;
var SonaTekst = /** @class */ (function (_super) {
    __extends(SonaTekst, _super);
    function SonaTekst(tekst) {
        var _this = _super.call(this) || this;
        _this.tekst = tekst.toLowerCase();
        return _this;
    }
    SonaTekst.prototype.kysiSisu = function () {
        return this.tekst;
    };
    return SonaTekst;
}(Tekst));
exports.SonaTekst = SonaTekst;
var LauseTekst = /** @class */ (function (_super) {
    __extends(LauseTekst, _super);
    function LauseTekst(lauseTekst) {
        var _this = _super.call(this) || this;
        _this.sõnad = [];
        _this.sõnaObjektid = new Map();
        var sõnadTekst = lauseTekst.toLowerCase().split(/\s+/);
        for (var _i = 0, sõnadTekst_1 = sõnadTekst; _i < sõnadTekst_1.length; _i++) {
            var sõnaStr = sõnadTekst_1[_i];
            if (!_this.sõnaObjektid.has(sõnaStr)) {
                _this.sõnaObjektid.set(sõnaStr, new SonaTekst(sõnaStr));
            }
            _this.sõnad.push(_this.sõnaObjektid.get(sõnaStr));
        }
        return _this;
    }
    LauseTekst.prototype.kysiSisu = function () {
        return this.sõnad.map(function (s) { return s.kysiSisu(); }).join(" ");
    };
    return LauseTekst;
}(Tekst));
exports.LauseTekst = LauseTekst;
