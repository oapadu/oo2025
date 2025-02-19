class Tournament {
    name: string;
    players: string[];

    constructor(name: string) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player: string) {
        this.players.push(player);
        console.log(`${player} on lisatud turniirile "${this.name}".`);
    }

    startTournament() {
        if (this.players.length < 2) {
            console.log("Turniiri alustamiseks on vaja vähemalt kahte mängijat.");
            return;
        }
        console.log(`Turniir "${this.name}" on alanud! Osalejad: ${this.players.join(", " )}.`);
        this.findWinner();
    }

    findWinner() {
        const winner = this.players[Math.floor(Math.random() * this.players.length)];
        console.log(`Turniiri "${this.name}" võitja on: ${winner}!`);
    }
}

const fpsTournament = new Tournament("IEM Katowice 2025");
const rlcsTournament = new Tournament("EU Open 3");

fpsTournament.addPlayer("Digimeedik1");
fpsTournament.addPlayer("Tarkvaraarendaja1");
fpsTournament.startTournament();

rlcsTournament.addPlayer("Digimeedik2");
rlcsTournament.addPlayer("Tarkvaraarendaja2");
rlcsTournament.startTournament();