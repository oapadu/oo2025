class simulator{
    waterAmount: number;
    heatingPower: number;
    temperature: number;
    roomTemperature: number;
    readonly specialHeatCapacity:number=4200;
    joulesPerKelvinSec:number;//amount of energy lost per second

    constructor(waterAmount:number, temperature:number, heatingPower:number, roomTemperature:number){
        if(waterAmount>2000){
            throw new Error("Max jug capacity 2L")
        }
        this.waterAmount=waterAmount;
        this.temperature=temperature;
        this.heatingPower=heatingPower;
        this.roomTemperature=roomTemperature;
        this.joulesPerKelvinSec=(1.0*4200*2/(100*20));
    }

    getTemperature():number{
        return this.temperature;
    }

    heat(seconds:number): void{
        let joules=this.heatingPower * seconds;
        let deltaTemperature=joules/(this.specialHeatCapacity*this.waterAmount/1000);
        this.temperature += deltaTemperature;
    }

    cool(seconds:number):void{
        let joules=(this.temperature-this.roomTemperature)*this.joulesPerKelvinSec;
        let deltaTemperature=joules/(this.specialHeatCapacity*this.waterAmount/1000);
        this.temperature-=deltaTemperature;
    }

    pourOut(amountToPour:number): void{
        if(amountToPour>= this.waterAmount){
            throw new Error("Can't pour more water than is in the jug")
        }
        this.waterAmount-=amountToPour;
    }
}

function simulateCooling(waterAmount:number, heatingPower:number, roomTemperature:number){
    let Kettle=new simulator(waterAmount, 95, heatingPower, roomTemperature);
    let secondsToCool=0;

    while(Kettle.getTemperature()>90){
        Kettle.cool(1);
        secondsToCool++;
    }
    console.log(`Cooling simulation for ${waterAmount} at ${roomTemperature}`);
    console.log("Cooling from 95 to 90", secondsToCool);
    return secondsToCool;
}

let roomTemperature=20;
let Kettle = new simulator(1000, 20, 1500, roomTemperature);

//heat to boiling

let secondsToBoil=0;
while(Kettle.getTemperature()<100){
    Kettle.heat(1);
    secondsToBoil++;
}

console.log("Water boiled in", secondsToBoil);

//cool for one minute

Kettle.cool(60);
console.log("Temperature after cooling for 1 min", Kettle.getTemperature());

//pour out 400ml

Kettle.pourOut(400);
Kettle.cool(180);
console.log("Temperature after pouring out 400ml and cooling for 3 mins", Kettle.getTemperature());

// let cool=new simulator(1000, 100, 1500, 20);
// cool.cool(100);
// console.log(cool.getTemperature());
// for(let i=0; i<9; i++){
//     cool.cool(100);
//     console.log(cool.getTemperature());
// }