function pizzaCalc(diameeter: number, hind: number): string {
    const raadius = diameeter / 2;
    const pindala = Math.PI * Math.pow(raadius, 2);
    const v44rtus = pindala / hind;

    return `${diameeter}cm pizza ${hind.toFixed(2)}€ annab ${v44rtus.toFixed(2)} cm² euro eest`;
}

// Example usage:
console.log(pizzaCalc(20, 8));
console.log(pizzaCalc(28, 12));
console.log(pizzaCalc(50, 25));