import { SonaTekst, LauseTekst } from "../12_proovikontrolltoo2/loendaja.ts";

describe("Taheloendaja testid", () => {
    test("Sona tähtede arv sõnas 'pere'", () => {
        const sõna = new SonaTekst("pere");
        expect(sõna.loenda("a")).toBe(0);
        expect(sõna.loenda("p")).toBe(1);
        expect(sõna.loenda("e")).toBe(2);
    });

    test("Lause tähtede arv lauses", () => {
        const lause = new LauseTekst("pere pere test");
        expect(lause.loenda("p")).toBe(2);
        expect(lause.loenda("e")).toBe(4);
        expect(lause.loenda("t")).toBe(1);
    });

    test("Sõna objektide korduvkasutus lauses", () => {
        const lause = new LauseTekst("pere pere");
        const sõna1 = (lause as any).sõnad[0];
        const sõna2 = (lause as any).sõnad[1];
        expect(sõna1).toBe(sõna2);
    });
});
