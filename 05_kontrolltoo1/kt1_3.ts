class Palk{
    /*palk: number = 10000;*/
    palgad: number[];
    palgad2: number[];
    koefitsiendid: number[];

    constructor(palgad: number[], koefitsiendid: number[], palgad2: number[]){
        this.palgad = palgad;
        this.koefitsiendid = koefitsiendid;
        this.palgad2 = palgad2;
    }

    uusPalk() {
        let palk = this.palgad[this.palgad.length - 1];
        for (let nr = 0; nr < this.koefitsiendid.length; nr++) {
            palk = palk * this.koefitsiendid[nr];
            this.palgad.push(palk);
        }
        return this.palgad;
    }

    keskmineKoef(){
        let summa = 1;
        for (let nr = 0; nr < this.koefitsiendid.length; nr++) {
            summa *= this.koefitsiendid[nr];
        }
        let keskmineKoef = Math.pow(summa, 1 / this.koefitsiendid.length);
        return keskmineKoef;
    }

    keskmineKoefPalgad(){
        let palk2= 0;
        for(let nr=0; nr < this.koefitsiendid.length; nr++){
            palk2 = this.palgad2[nr] * uuedPalgad.keskmineKoef();
            this.palgad2.push(palk2);
        }
        return this.palgad2;
    }
}

let esimenepalk: number = 10000;

let palgad = [esimenepalk];

let palgad2 = [esimenepalk];

let koefitsiendid = [1.05, 1.1, 1.2, 1.05];

let uuedPalgad = new Palk(palgad, koefitsiendid, palgad2);

console.log(uuedPalgad.uusPalk());

console.log(palgad[3]);

console.log("Keskmine koef on " + uuedPalgad.keskmineKoef());

console.log(uuedPalgad.keskmineKoefPalgad());


