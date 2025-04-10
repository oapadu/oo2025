function pizzaCalc(diameeter, hind) {
    var raadius = diameeter / 2;
    var pindala = Math.PI * Math.pow(raadius, 2);
    var v44rtus = pindala / hind;
    return "".concat(diameeter, "cm pizza ").concat(hind.toFixed(2), "\u20AC annab ").concat(v44rtus.toFixed(2), " cm\u00B2 euro eest");
}
// Example usage:
console.log(pizzaCalc(20, 8));
console.log(pizzaCalc(28, 12));
console.log(pizzaCalc(50, 25));
