class Potentsiomeeter{
    nurk:number = 0;

    constructor(protected nurkMin:number, protected nurkMax:number, protected rMin:number, protected rMax:number){}
    muudaNurk(delta:number):void{
        let uusNurk=this.nurk+delta;
        if(uusNurk<this.nurkMin){
            throw new Error("Liiga väike nurk")
        }
        if(uusNurk>this.nurkMax){
            throw new Error("Liiga suur nurk")
        }
        this.nurk = uusNurk;
    }
    getR():number{
        /*arvutada potentsiomeetri hetketakistus*/
        const ratio = (this.nurk - this.nurkMin) / (this.nurkMax - this.nurkMin);
        const R = (this.rMin + (this.rMax- this.rMin) * ratio);
        return R
    };
}

let p1:Potentsiomeeter = new Potentsiomeeter(-120, 120, 100, 500);
p1.muudaNurk(80);
console.log(p1.getR());
p1.muudaNurk(40);
console.log(p1.getR());