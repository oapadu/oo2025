var Player = /** @class */ (function () {
    function Player(name, score) {
        if (score === void 0) { score = 0; }
        this.name = name;
        this.score = score;
    }
    return Player;
}());
var Tournament = /** @class */ (function () {
    function Tournament(name) {
        this.name = name;
        this.players = new Map();
    }
    Tournament.prototype.addPlayer = function (playerName) {
        if (this.players.has(playerName)) {
            console.log("".concat(playerName, " on juba turniiril."));
            return;
        }
        this.players.set(playerName, new Player(playerName));
        console.log("".concat(playerName, " on lisatud turniirile \"").concat(this.name, "\"."));
    };
    Tournament.prototype.startTournament = function () {
        if (this.players.size < 2) {
            console.log("Turniiri alustamiseks on vaja vähemalt kahte mängijat.");
            return;
        }
        console.log("Turniir \"".concat(this.name, "\" on alanud! Osalejad: ").concat(Array.from(this.players.keys()).join(", "), "."));
        this.playMatches();
        this.determineWinner();
    };
    Tournament.prototype.playMatches = function () {
        var playerArray = Array.from(this.players.values());
        if (playerArray.length < 2)
            return;
        for (var i = 0; i < 5; i++) {
            var winnerIndex = Math.floor(Math.random() * playerArray.length);
            var winner = playerArray[winnerIndex];
            winner.score += 1;
            console.log("".concat(winner.name, " v\u00F5itis m\u00E4ngu ja n\u00FC\u00FCd on tal ").concat(winner.score, " punkti."));
        }
    };
    Tournament.prototype.determineWinner = function () {
        var winner = null;
        this.players.forEach(function (player) {
            if (!winner || player.score > winner.score) {
                winner = player;
            }
        });
        if (winner) {
            console.log("Turniiri \"".concat(this.name, "\" v\u00F5itja on: ").concat(winner.name, " ").concat(winner.score, " punktiga!"));
        }
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
manager.createTournament("EU Open 3");
var fpsTournament = manager.getTournament("IEM Katowice 2025");
var rlcsTournament = manager.getTournament("EU Open 3");
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
