import { ArvutaJoon, ArvutaJoonVabaliikmega, arvutaYMassiiv } from '../13_kontrolltoo2/joon.ts';

describe ('ArvutaJoon testid niisama ja vabaliikmega', ()=> {
    it('arvutab y = 3x, kui kordaja on 3', () => {
        const joon = new ArvutaJoon(3);
        const x = 5;
        const y = joon.arvutaY(x);
        expect(y).toBe(15); // y=3*5=15
    });

    it('arvutab y = 3x + 2, kui kordaja on 3 ja vabaliige on 2', () => {
        const joon = new ArvutaJoonVabaliikmega(3, 2);
        const x = 5;
        const y = joon.arvutaY(x);
        expect(y).toBe(17);  // y=3*5+2=15+2=17
    });
    
    it('arvutab y = 3x, kui x on negatiivne', () => {
        const joon = new ArvutaJoon(3);
        const x = -4;
        const y = joon.arvutaY(x);
        expect(y).toBe(-12); // y=3*-4=-12
    });

    it('arvutab y = 3x + 2, kui x on negatiivne', () => {
        const joon = new ArvutaJoonVabaliikmega(3, 2);
        const x = -4;
        const y = joon.arvutaY(x);
        expect(y).toBe(-10);  // y=3*-4+2=-12+2=-10
    });
    
    it('arvutab y = 3x, kui x on 0', () => {
        const joon = new ArvutaJoon(3);
        const x = 0;
        const y = joon.arvutaY(x);
        expect(y).toBe(0); // y=3*0=0
    });

    it('arvutab y = 3x + 2, kui x on 0', () => {
        const joon = new ArvutaJoonVabaliikmega(3, 2);
        const x = 0;
        const y = joon.arvutaY(x);
        expect(y).toBe(2); // y=3*0+2=2
    });
});

describe('arvutaYMassiiv testid', () => {
    it('arvutab massiivi jaoks õiged y väärtused', () => {
        const joon = new ArvutaJoon(3); // y=3x
        const xid = [1, 2, 3, 4];
        const expected = [3, 6, 9, 12]; // y=3*1, 3*2, 3*3, 3*4
        const result = arvutaYMassiiv(xid, joon);

        expect(result).toEqual(expected);
    });

    it('arvutab massiivi jaoks õiged y väärtused vabaliikmega', () => {
        const joon = new ArvutaJoonVabaliikmega(3, 2); // y=3x+2
        const xid = [1, 2, 3, 4];
        const expected = [5, 8, 11, 14]; //y=3*1+2, 3*2+2, 3*3+2, 3*4+2
        const result = arvutaYMassiiv(xid, joon);

        expect(result).toEqual(expected);
    });
});