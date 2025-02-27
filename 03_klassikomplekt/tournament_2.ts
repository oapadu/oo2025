class Player {
    constructor(public name: string, public score: number = 0) {}
}

class Tournament {
    private name: string;
    private players: Map<string, Player>;

    constructor(name: string) {
        this.name = name;
        this.players = new Map();
    }

    addPlayer(playerName: string) {
        if (this.players.has(playerName)) {
            console.log(`${playerName} on juba turniiril.`);
            return;
        }
        this.players.set(playerName, new Player(playerName));
        console.log(`${playerName} on lisatud turniirile "${this.name}".`);
    }

    startTournament() {
        if (this.players.size < 2) {
            console.log("Turniiri alustamiseks on vaja vähemalt kahte mängijat.");
            return;
        }
        console.log(`Turniir "${this.name}" on alanud! Osalejad: ${Array.from(this.players.keys()).join(", ")}.`);
        this.playMatches();
        this.determineWinner();
    }

    playMatches() {
        const playerArray = Array.from(this.players.values());
        if (playerArray.length < 2) return;

        for (let i = 0; i < 5; i++) {
            const winnerIndex = Math.floor(Math.random() * playerArray.length);
            const winner = playerArray[winnerIndex];
            winner.score += 1;
            console.log(`${winner.name} võitis mängu ja nüüd on tal ${winner.score} punkti.`);
        }
    }

    determineWinner() {
        let winner: Player | null = null;
        this.players.forEach(player => {
            if (!winner || player.score > winner.score) {
                winner = player;
            }
        });
        if (winner) {
            console.log(`Turniiri "${this.name}" võitja on: ${winner.name} ${winner.score} punktiga!`);
        }
    }
}

class TournamentManager {
    private tournaments: Map<string, Tournament>;

    constructor() {
        this.tournaments = new Map();
    }

    createTournament(name: string) {
        if (this.tournaments.has(name)) {
            console.log(`Turniir nimega "${name}" on juba olemas.`);
            return;
        }
        this.tournaments.set(name, new Tournament(name));
        console.log(`Turniir "${name}" on loodud.`);
    }

    getTournament(name: string): Tournament | undefined {
        return this.tournaments.get(name);
    }
}

const manager = new TournamentManager();
manager.createTournament("IEM Katowice 2025");
manager.createTournament("EU Open 3");

const fpsTournament = manager.getTournament("IEM Katowice 2025");
const rlcsTournament = manager.getTournament("EU Open 3");

if (fpsTournament) {
    fpsTournament.addPlayer("Digimeedik1");
    fpsTournament.addPlayer("Tarkvaraarendaja1");
    fpsTournament.startTournament();
}

if (rlcsTournament) {
    rlcsTournament.addPlayer("Digimeedik2");
    rlcsTournament.addPlayer("Tarkvaraarendaja2");
    rlcsTournament.startTournament();
}