export interface Taheloendaja {
    loenda(täht: string): number;
}

export abstract class Tekst implements Taheloendaja {
    abstract kysiSisu(): string;

    loenda(täht: string): number {
        const sisu = this.kysiSisu().toLowerCase();
        const t = täht.toLowerCase();
        let count = 0;
        for (const char of sisu) {
        if (char === t) count++;
        }
        return count;
    }
}

export class SonaTekst extends Tekst {
    private tekst: string;

    constructor(tekst: string) {
        super();
        this.tekst = tekst.toLowerCase();
    }

    kysiSisu(): string {
        return this.tekst;
    }
}

export class LauseTekst extends Tekst {
    private sõnad: SonaTekst[] = [];
    private sõnaObjektid: Map<string, SonaTekst> = new Map();

    constructor(lauseTekst: string) {
        super();
        const sõnadTekst = lauseTekst.toLowerCase().split(/\s+/);
        for (const sõnaStr of sõnadTekst) {
        if (!this.sõnaObjektid.has(sõnaStr)) {
            this.sõnaObjektid.set(sõnaStr, new SonaTekst(sõnaStr));
        }
        this.sõnad.push(this.sõnaObjektid.get(sõnaStr)!);
        }
    }

    kysiSisu(): string {
        return this.sõnad.map(s => s.kysiSisu()).join(" ");
    }
}
