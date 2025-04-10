class Andmed{
    x: number[];
    y: number[];
    P: number;
    vahemaa: number;
    
    constructor(x: number[], y: number[]){
        this.x = x;
        this.y = y;
    }

    displayKolmnurk(): void{
        console.log("X-koordinaadid: " + this.x.join(", "));
        console.log("Y-koordinaadid: " + this.y.join(", "));
    }

    lisaPunkt(x: number, y:number){
        this.x.push(x);
        this.y.push(y);
    }

    /*getP(){
        let side1 = Math.sqrt(Math.pow(this.x[1]-this.x[0], 2) + Math.pow(this.y[1]-this.x[0], 2));
        let side2 = Math.sqrt(Math.pow(this.x[2]-this.x[1], 2) + Math.pow(this.y[2]-this.x[1], 2));
        let side3 = Math.sqrt(Math.pow(this.x[2]-this.x[0], 2) + Math.pow(this.y[2]-this.x[0], 2));
        let P = side1 + side2 + side3;
        console.log(P);
    }*/

    ymbermoot():number{
        let v:number = 0;
        for(let nr=1; nr<this.x.length; nr++){
            v+=this.vahemaa(this.x[nr-1], this.y[nr-1], this.x[nr], this.y[nr]);
        }
        v+=this.vahemaa(this.x[this.x.length-1], this.y[this.y.length-1], this.x[0], this.y[0]);
        return v;
    }
    joonista(g:any):void{
        for(let nr=1); nr(this.x.length; nr++)
            g.moveTo(this.x[nr-1], this.yd[nr-1]);
            g.lineTo(this.x[nr], this.y[nr]);
            g.stroke();
    }
}

let kolmnurk1 = new Andmed([1,2,3], [5,4,3]);
let kolmnurk2 = new Andmed([5,2,8], [3,1,7]);

kolmnurk1.lisaPunkt(20,60);

kolmnurk1.displayKolmnurk();
kolmnurk2.displayKolmnurk();

kolmnurk1.getP();
kolmnurk2.getP();