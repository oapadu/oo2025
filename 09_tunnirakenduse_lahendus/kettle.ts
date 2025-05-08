export class Water{
    waterAmount: number;
    heatingPower: number = 0;
    temperature: number;

    roomTemperature: number;

    readonly specialHeatCapacity:number=4200;



    constructor(waterAmount: number, temperature: number){
        this.waterAmount=waterAmount;
        this.temperature=temperature;   
    }

    setHeatingPower(newPower:number): void{
        this.heatingPower=newPower;
    }

    getTemperature(): number{
        return this.temperature;
    }

    heatAsecond(): void{
        let joules=this.heatingPower;
        let deltaTemperature=joules/(this.specialHeatCapacity*this.waterAmount/1000);
        this.temperature += deltaTemperature;
    }

}
    let w=new Water(800, 20);
    w.setHeatingPower(1500);

    //simulate the heating power for 120 seconds
    for (let i=0; i<120; i++){
        w.heatAsecond();
    }

    console.log(`Final temperature after 120 seconds ${w.getTemperature()}`);