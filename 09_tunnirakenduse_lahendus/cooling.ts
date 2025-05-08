class cooling{
    roomTemp:number;

    constructor(roomTemp:number){
        this.roomTemp=roomTemp;
    }

    estimateIntTemp(
        knownJugTemp:number,//starting temp
        knownTime:number,//time took to cool
        knownCooling:number,//how much water cooled
        desiredTime:number,//new time interval
        desiredCooling:number,
    ): number{
        let knownTempDifference=knownJugTemp-this.roomTemp;
        let coolingRate=knownCooling/(knownTempDifference*knownTime);
        let requiredTempDifference=desiredCooling/(coolingRate*desiredTime);

        return this.roomTemp + requiredTempDifference;
    }
}

let coolingcalc = new cooling(20);
let estimateIntTemp=coolingcalc.estimateIntTemp(
    40,
    100,
    1,
    100,
    3
)
console.log(`Initial temperature: ${estimateIntTemp}`);