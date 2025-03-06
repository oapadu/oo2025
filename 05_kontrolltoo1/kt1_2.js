var numbrid = [1, 2, 3, 4, 5];
function geoKeskmine() {
    var summa = 1;
    var keskmine = 0;
    for (var nr = 0; nr < numbrid.length; nr++) {
        summa *= numbrid[nr];
    }
    keskmine = (Math.pow(summa, 1 / numbrid.length));
    return keskmine;
}
console.log(geoKeskmine());
