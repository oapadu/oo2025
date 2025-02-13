class Resistor {
    r: number = 0;
    max: number = 0;
    constructor(r: number, max: number) {
      this.r = r;
      this.max = max;
    }
    getCurrent(u: number): number {
      return u / this.r;
    }
    getPower(u: number): number {
      return u * this.getCurrent(u);
    }
    isVoltageAllowed(u:number):boolean{
      return this.getPower(u)<=this.max;
      }
    }
  let r1= new Resistor(110,0.5);
  console.log(r1.getPower(10));
  console.log(r1.isVoltageAllowed(12));

  let r2= new Resistor(220,0.5);
  console.log(r1.getPower(10));
  console.log(r1.isVoltageAllowed(12));

  let r3= new Resistor(220,0.5);
  console.log(r1.getPower(10));
  console.log(r1.isVoltageAllowed(12));

  let rs:Resistor[]=[r1, r2, r3];
  let v1:Resistor[]=[];
  for(r of rs){
    if(r.isVoltageAllowed(10)){v1.push(r);}
  }
  console.log(v1);


/*let r1: Resistor = new Resistor(110, 0.5);
console.log(r1.getCurrent(5));
console.log(r1.getPower(5));

let r2: Resistor = new Resistor(220, 0.5);
console.log(r2.getCurrent(5));
console.log(r2.getPower(5));

let r3: Resistor = new Resistor(4700, 0.5);
console.log(r3.getCurrent(5));
console.log(r3.getPower(5));

let takistid:Resistor[]=[r1, r2, r3];

let vooluSumma:number = 0;
for(let takisti of takistid){
    vooluSumma+=takisti.getCurrent(5);
}

console.log(vooluSumma);

console.log(takistid.reduce((siiani, praegune)=>(siiani + praegune.getCurrent(5)), 0));*/
