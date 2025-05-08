"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArvutaJoonVabaliikmega = exports.ArvutaJoon = void 0;
exports.arvutaYMassiiv = arvutaYMassiiv;
var ArvutaJoon = /** @class */ (function () {
    function ArvutaJoon(kordaja) {
        this.kordaja = kordaja;
    }
    ArvutaJoon.prototype.arvutaY = function (x) {
        return this.kordaja * x;
    };
    return ArvutaJoon;
}());
exports.ArvutaJoon = ArvutaJoon;
var ArvutaJoonVabaliikmega = /** @class */ (function () {
    function ArvutaJoonVabaliikmega(kordaja, vabaliige) {
        this.kordaja = kordaja;
        this.vabaliige = vabaliige;
    }
    ArvutaJoonVabaliikmega.prototype.arvutaY = function (x) {
        return this.kordaja * x + this.vabaliige;
    };
    return ArvutaJoonVabaliikmega;
}());
exports.ArvutaJoonVabaliikmega = ArvutaJoonVabaliikmega;
function arvutaYMassiiv(xid, joon) {
    return xid.map(function (x) {
        return joon.arvutaY(x);
    });
}
