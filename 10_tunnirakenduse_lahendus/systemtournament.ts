abstract class Participant {
    constructor(public name: string, public score: number = 0) {}

    abstract getType(): string;

    abstract getPlayers(): Player[];
}

class Player extends Participant {
    constructor(name: string) {
        super(name);
    }

    getType(): string {
        return "Player";
    }

    getPlayers(): Player[] {
        return [this];
    }
}

class Team extends Participant {
    private members: Player[] = [];

    constructor(name: string) {
        super(name);
    }

    addPlayer(player: Player) {
        this.members.push(player);
    }

    getType(): string {
        return "Team";
    }

    getPlayers(): Player[] {
        return this.members;
    }
}

class Tournament {
    private participants: Map<string, Participant> = new Map();

    constructor(public name: string) {}

    addParticipant(participant: Participant) {
        if (this.participants.has(participant.name)) {
            console.log(`${participant.name} on juba turniiril.`);
            return;
        }
        this.participants.set(participant.name, participant);
        console.log(`${participant.name} (${participant.getType()}) on lisatud turniirile "${this.name}".`);
    }

    startTournament() {
        if (this.participants.size < 2) {
            console.log("Turniiri alustamiseks on vaja vähemalt kahte osalejat.");
            return;
        }

        console.log(`\nTurniir "${this.name}" on alanud! Osalejad: ${Array.from(this.participants.keys()).join(", ")}.`);

        this.playMatches();
        this.showStandings();
        this.determineWinner();
    }

    private playMatches() {
        const participantsArray = Array.from(this.participants.values());

        for (let i = 0; i < 5; i++) {
            const winnerIndex = Math.floor(Math.random() * participantsArray.length);
            const winner = participantsArray[winnerIndex];
            winner.score += 1;
            console.log(`Mäng ${i + 1}: ${winner.name} võitis! Tal on nüüd ${winner.score} punkti.`);
        }
    }

    private determineWinner() {
        const winner = Array.from(this.participants.values()).reduce((top, p) => (p.score > top.score ? p : top));
        console.log(`Turniiri "${this.name}" võitja on: ${winner.name} (${winner.score} punkti)\n`);
    }

    private showStandings() {
        const standings = Array.from(this.participants.values()).sort((a, b) => b.score - a.score);
        console.log("\nEdetabel:");
        standings.forEach((p, i) => {
            console.log(`${i + 1}. ${p.name} (${p.getType()}) - ${p.score} punkti`);
        });
    }
}

class TournamentManager {
    private tournaments: Map<string, Tournament> = new Map();

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
manager.createTournament("EU 1v1 Open");

const fpsTournament = manager.getTournament("IEM Katowice 2025");
const rlcsTournament = manager.getTournament("EU 1v1 Open");

if (fpsTournament) {
    const teamVit = new Team("Team Vitality");
    teamVit.addPlayer(new Player("ropz"));
    teamVit.addPlayer(new Player("Apex"));
    teamVit.addPlayer(new Player("Mezii"));
    teamVit.addPlayer(new Player("FlameZ"));
    teamVit.addPlayer(new Player("Zywoo"));
    fpsTournament.addParticipant(teamVit);

    const teamMouz = new Team("MOUZ");
    teamMouz.addPlayer(new Player("xertioN"));
    teamMouz.addPlayer(new Player("torszi"));
    teamMouz.addPlayer(new Player("Jimpphat"));
    teamMouz.addPlayer(new Player("Brollan"));
    teamMouz.addPlayer(new Player("Spinx"));
    fpsTournament.addParticipant(teamMouz);

    fpsTournament.startTournament();
}

if (rlcsTournament) {
    rlcsTournament.addParticipant(new Player("Digimeedik2"));
    rlcsTournament.addParticipant(new Player("Tarkvaraarendaja2"));

    rlcsTournament.startTournament();
}
