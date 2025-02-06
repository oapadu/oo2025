var eesnimi = "Juku";
//let eesnimi:string=56;
var vanus = 7;
console.log('abc');
console.log('Tere, ' + eesnimi);
if (vanus < 7) {
    console.log('Tasuta');
}
else {
    //console.log('Osta pilet');
    if (vanus <= 16) {
        console.log('Osta lastepilet');
    }
    else {
        console.log('Osta täispilet');
    }
}
var symbolid = [];
for (var nr = 0; nr < vanus; nr++) {
    symbolid.push('*');
}
console.log(symbolid.join(""));
