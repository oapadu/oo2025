abstract class AbstractResistor{

    abstract getResistance(): number;

    getCurrent (u: number):number{
        return u/this.getResistance();
    }
}

class Resistor extends AbstractResistor{
    r: number=0;

    constructor(r:number){
        super();
        this.r=r;
    }

    getResistance(): number{
        return this.r;
    }

}

class Switch extends AbstractResistor{
    private on:boolean=false;
    setOn(state: boolean){
        this.on=state;
    }
    getResistance(): number {
        return this.on ? 0:1000000000;
    }

    getCurrent(u: number): number {
        if (u>0 && this.on){
            throw new Error("short circuit");
        }
        return super.getCurrent(u);
    }
}

abstract class MultipleConnection extends AbstractResistor{
    resistors: AbstractResistor[] = [];

    addResistor(r: AbstractResistor){
        this.resistors.push(r);
    }
}

class ParallelConnection extends MultipleConnection{
    getResistance(): number {
        let inverseSum: number = 0;

        for (let Resistor of this.resistors) {
            inverseSum += 1/Resistor.getResistance();
        }
        return 1/inverseSum;
    }
}

class SeriesConnection extends MultipleConnection{
    getResistance(): number {
        let totalSum: number = 0;

        for (let Resistor of this.resistors) {
            totalSum += Resistor.getResistance();
        }
        return totalSum;
    }
}

let p:ParallelConnection = new ParallelConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(240));
p.addResistor(new Resistor(120));
p.addResistor(new Resistor(50));
console.log(p.getResistance());

let totalresistance=p.getResistance();
console.log("Total resistance", totalresistance);

let voltage=5;
let current=voltage/p.getResistance();
console.log("Current", current);

let p1:ParallelConnection = new ParallelConnection();
p.addResistor(new Resistor(110));
p.addResistor(new Resistor(110));
console.log(p1.getResistance());

console.log("Total resistance of two 110 ohm resistors", totalresistance);

let p2 = new SeriesConnection();
p.addResistor(new Resistor(110));
p.addResistor(new Resistor(220));
console.log("110, 220", p2.getResistance());

let p3 = new SeriesConnection();
p.addResistor(new Resistor(220));
p.addResistor(new Resistor(440));
console.log("220, 440", p3.getResistance());

let finalseries = new SeriesConnection();
finalseries.addResistor(p2);
finalseries.addResistor(p3);
console.log("Combined", finalseries.getResistance());

let seriescircuit = new SeriesConnection();
p.addResistor(new Resistor(110));
p.addResistor(new Resistor(220));
console.log("110, 220 again", seriescircuit.getResistance());

let parallelconnection1 = new ParallelConnection();
p.addResistor(seriescircuit);
p.addResistor(new Resistor(330));
console.log("Total resistance of of parallelseries", parallelconnection1.getResistance());


let circuit: AbstractResistor[] = [new Resistor(100), new Switch()];

for (let element of circuit){
    console.log(element.getResistance());
}

function sumResistances(element: AbstractResistor[]):number{
    let sum=0;
    for (let r of element){
        sum += r.getResistance();
    }
    return sum;
}

// console.log("Total resistance", sumResistances(circuit));
// (circuit[1] as Switch).setOn(true);
// console.log("Total resistance", sumResistances(circuit));

// let s1=new Switch();
// console.log(s1.getResistance());
// s1.setOn(true);
// console.log(s1.getResistance());
// //console.log(s1.getCurrent(5));

// let r1:AbstractResistor=new Resistor(220);
// console.log(r1.getResistance());