let arv1:number = 2;
let arv2:number = 10;
let keskmine:number = 0;

function geoKeskmine(){
    keskmine = Math.sqrt(arv1 * arv2);
    return keskmine;
}

console.log(geoKeskmine());