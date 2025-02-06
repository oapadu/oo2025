class Vektor{
    constructor(protected x:number, protected y:number){}
    kuva():void{
        console.log(this.x, this.y);
    }
    pikkus():number{
        return Math.sqrt ((this.x*this.x) + (this.y*this.y))
    }
    liida(teine:Vektor):Vektor{
        return new Vektor(this.x+teine.x, this.y+teine.y)
    }
    // käsklus vektori korrutamiseks arvuga
    korruta(koef:number):Vektor{
        return new Vektor(this.x*koef, this.y*koef)
    }
    suurendaX():void{
        this.x+=1;
    }
    //kahe vektori skalaarkorrutis
    skalaarkorrutis(teine:Vektor){
        return this.x*teine.x + this.y*teine.y;
    }
}

//loo massiiv neljast vektorist
//leida kõigi summa
let vektorid:Vektor[]=[
    new Vektor(1,3),
    new Vektor(1,5),
    new Vektor(3,3),
    new Vektor(2,1),
];
let asukoht=vektorid[0];
for(let i=1, i<vektorid.length; i++){
    asukoht = asukoht.liida(vektorid[i]);
}

asukoht.kuva();

let v1:Vektor=new Vektor(3,5);
let vagun:Vektor = new Vektor(9,-4);
let energia:number = v1.skalaarkorrutis(vagun);
console.log(energia);
v1.suurendaX();
v1.kuva();
v1.korruta(4).kuva();
console.log(v1.pikkus());
let v3:Vektor=v1.liida(new Vektor(1, 2));
v3.kuva();
