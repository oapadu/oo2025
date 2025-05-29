var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Participant = /** @class */ (function () {
    function Participant(name, score) {
        if (score === void 0) { score = 0; }
        this.name = name;
        this.score = score;
    }
    return Participant;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(name) {
        return _super.call(this, name) || this;
    }
    Player.prototype.getType = function () {
        return "Player";
    };
    Player.prototype.getPlayers = function () {
        return [this];
    };
    return Player;
}(Participant));
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team(name) {
        var _this = _super.call(this, name) || this;
        _this.members = [];
        return _this;
    }
    Team.prototype.addPlayer = function (player) {
        this.members.push(player);
    };
    Team.prototype.getType = function () {
        return "Team";
    };
    Team.prototype.getPlayers = function () {
        return this.members;
    };
    return Team;
}(Participant));
var Tournament = /** @class */ (function () {
    function Tournament(name) {
        this.name = name;
        this.participants = new Map();
    }
    Tournament.prototype.addParticipant = function (participant) {
        if (this.participants.has(participant.name)) {
            console.log("".concat(participant.name, " on juba turniiril."));
            return;
        }
        this.participants.set(participant.name, participant);
        console.log("".concat(participant.name, " (").concat(participant.getType(), ") on lisatud turniirile \"").concat(this.name, "\"."));
    };
    Tournament.prototype.startTournament = function () {
        if (this.participants.size < 2) {
            console.log("Turniiri alustamiseks on vaja vähemalt kahte osalejat.");
            return;
        }
        console.log("\nTurniir \"".concat(this.name, "\" on alanud! Osalejad: ").concat(Array.from(this.participants.keys()).join(", "), "."));
        this.playMatches();
        this.showStandings();
        this.determineWinner();
    };
    Tournament.prototype.playMatches = function () {
        var participantsArray = Array.from(this.participants.values());
        for (var i = 0; i < 5; i++) {
            var winnerIndex = Math.floor(Math.random() * participantsArray.length);
            var winner = participantsArray[winnerIndex];
            winner.score += 1;
            console.log("M\u00E4ng ".concat(i + 1, ": ").concat(winner.name, " v\u00F5itis! Tal on n\u00FC\u00FCd ").concat(winner.score, " punkti."));
        }
    };
    Tournament.prototype.determineWinner = function () {
        var winner = Array.from(this.participants.values()).reduce(function (top, p) { return (p.score > top.score ? p : top); });
        console.log("Turniiri \"".concat(this.name, "\" v\u00F5itja on: ").concat(winner.name, " (").concat(winner.score, " punkti)\n"));
    };
    Tournament.prototype.showStandings = function () {
        var standings = Array.from(this.participants.values()).sort(function (a, b) { return b.score - a.score; });
        console.log("\nEdetabel:");
        standings.forEach(function (p, i) {
            console.log("".concat(i + 1, ". ").concat(p.name, " (").concat(p.getType(), ") - ").concat(p.score, " punkti"));
        });
    };
    return Tournament;
}());
var TournamentManager = /** @class */ (function () {
    function TournamentManager() {
        this.tournaments = new Map();
    }
    TournamentManager.prototype.createTournament = function (name) {
        if (this.tournaments.has(name)) {
            console.log("Turniir nimega \"".concat(name, "\" on juba olemas."));
            return;
        }
        this.tournaments.set(name, new Tournament(name));
        console.log("Turniir \"".concat(name, "\" on loodud."));
    };
    TournamentManager.prototype.getTournament = function (name) {
        return this.tournaments.get(name);
    };
    return TournamentManager;
}());
var manager = new TournamentManager();
manager.createTournament("IEM Katowice 2025");
manager.createTournament("EU 1v1 Open");
var fpsTournament = manager.getTournament("IEM Katowice 2025");
var rlcsTournament = manager.getTournament("EU 1v1 Open");
if (fpsTournament) {
    var teamVit = new Team("Team Vitality");
    teamVit.addPlayer(new Player("ropz"));
    teamVit.addPlayer(new Player("Apex"));
    teamVit.addPlayer(new Player("Mezii"));
    teamVit.addPlayer(new Player("FlameZ"));
    teamVit.addPlayer(new Player("Zywoo"));
    fpsTournament.addParticipant(teamVit);
    var teamMouz = new Team("MOUZ");
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
