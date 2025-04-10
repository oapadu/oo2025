class Klass{
    numbrid: number[];
    constructor(numbrid: number[]){
        this.numbrid = numbrid;
    }

    findKeskmine(): number{
        let summa:number = 0;
        for(let nr = 0; nr < numbrid.length; nr++){
            summa += numbrid[nr]
        }
        let keskmine: number = summa / numbrid.length;
        return keskmine
    }

    libisevKeskmine(numbrid: number[]): number[] {
        let tulem: number[] = [];

        for (let nr = 0; nr < numbrid.length - 2; nr++) {
            let keskmine = (numbrid[nr] + numbrid[nr + 1] + numbrid[nr + 2]) / 3;
            tulem.push(keskmine);
        }
        return tulem;
    }

    addNumber(): void {
        this.numbrid.push(1);
    }

}

let numbrid = [1, 2, 3, 4, 5];

let klassNumbrid = new Klass(numbrid);

console.log(numbrid);
klassNumbrid.addNumber();
console.log(numbrid);
console.log(klassNumbrid.libisevKeskmine(numbrid));
console.log(klassNumbrid.findKeskmine());