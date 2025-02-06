
function kehamassiindeks(cm:number, kg:number):number{
    let m:number=cm/100;
    return kg/(m*m);
}

console.log(kehamassiindeks(181, 110))

let massid:number[]=[80, 90, 100, 110, 115]
for(let mass of massid){
    console.log(kehamassiindeks(181, mass));
}

let indeksid:number[]=massid.map(mass => kehamassiindeks(181, mass));
console.log(indeksid);

//luua teine valem kehamassiindeksi arvutamiseks
//1,3 korda kehakaal jagatud pikkusega astes 2,5
//Math.pow
//kehamassiindeks erinevate masside ja sama pikkuse juures
//näidata kuidas väärtused erinevad

function bmi(cm:number, kg:number):number{
    let m:number=cm/100
    return (1.3 * kg) / Math.pow(cm, 2.5)
}

let indeksid2:number[]=massid.map(mass => kehamassiindeks(181, mass));
console.log(indeksid);

//sama massi ja eri pikkuste juures
let vastus:number[][]=[];
for(let pikkus:150; pikkus<190; pikkus+=2){
    vastus.push([pikkus, kehamassiindeks(pikkus, 90), bmi(pikkus, 90)]);
}
console.log(vastus)