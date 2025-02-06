function kehamassiindeks(cm, kg) {
    var m = cm / 100;
    return kg / (m * m);
}
console.log(kehamassiindeks(181, 110));
var massid = [80, 90, 100, 110, 115];
for (var _i = 0, massid_1 = massid; _i < massid_1.length; _i++) {
    var mass = massid_1[_i];
    console.log(kehamassiindeks(181, mass));
}
var indeksid = massid.map(function (mass) { return kehamassiindeks(181, mass); });
console.log(indeksid);
//luua teine valem kehamassiindeksi arvutamiseks
//1,3 korda kehakaal jagatud pikkusega astes 2,5
//Math.pow
//kehamassiindeks erinevate masside ja sama pikkuse juures
//näidata kuidas väärtused erinevad
function bmi(cm, kg) {
    var m = cm / 100;
    return (1.3 * kg) / Math.pow(cm, 2.5);
}
var indeksid2 = massid.map(function (mass) { return kehamassiindeks(181, mass); });
console.log(indeksid);
//sama massi ja eri pikkuste juures
var vastus = [];
for (var pikkus = void 0; pikkus < 190; pikkus += 2) {
    vastus.push([pikkus, kehamassiindeks(pikkus, 90), bmi(pikkus, 90)]);
}
console.log(vastus);
