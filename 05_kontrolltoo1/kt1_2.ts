let numbrid = [1, 2, 3, 4, 5];

function geoKeskmine(){
    let summa = 1;
    let keskmine = 0;
        for(let nr = 0; nr < numbrid.length; nr++){
            summa *= numbrid[nr];
        }
        keskmine = (Math.pow(summa, 1/numbrid.length))
        return keskmine;
        
}

console.log(geoKeskmine());