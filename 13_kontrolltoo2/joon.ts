interface Joon {
    arvutaY(x:number):number;
}

class ArvutaJoon implements Joon {
    kordaja: number;

    constructor(kordaja: number){
        this.kordaja = kordaja;
    }

    arvutaY(x: number): number{
        return this.kordaja * x;
    }
}

class ArvutaJoonVabaliikmega implements Joon {
    kordaja: number;
    vabaliige: number;
  
    constructor(kordaja: number, vabaliige: number) {
      this.kordaja = kordaja;
      this.vabaliige = vabaliige;
    }
  
    arvutaY(x: number): number {
      return this.kordaja * x + this.vabaliige;
    }
  }

function arvutaYMassiiv(xid: number[], joon: Joon): number[] {
    return xid.map(function(x) {
        return joon.arvutaY(x);
    });
}

export {ArvutaJoon, ArvutaJoonVabaliikmega, arvutaYMassiiv}