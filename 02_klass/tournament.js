var Tournament = /** @class */ (function () {
    function Tournament(name) {
        this.name = name;
        this.players = [];
    }
    Tournament.prototype.addPlayer = function (player) {
        this.players.push(player);
        console.log("".concat(player, " on lisatud turniirile \"").concat(this.name, "\"."));
    };
    Tournament.prototype.startTournament = function () {
        if (this.players.length < 2) {
            console.log("Turniiri alustamiseks on vaja vähemalt kahte mängijat.");
            return;
        }
        console.log("Turniir \"".concat(this.name, "\" on alanud! Osalejad: ").concat(this.players.join(", "), "."));
        this.findWinner();
    };
    Tournament.prototype.findWinner = function () {
        var winner = this.players[Math.floor(Math.random() * this.players.length)];
        console.log("Turniiri \"".concat(this.name, "\" v\u00F5itja on: ").concat(winner, "!"));
    };
    return Tournament;
}());
var fpsTournament = new Tournament("IEM Katowice 2025");
var rlcsTournament = new Tournament("EU Open 3");
fpsTournament.addPlayer("Digimeedik1");
fpsTournament.addPlayer("Tarkvaraarendaja1");
fpsTournament.startTournament();
rlcsTournament.addPlayer("Digimeedik2");
rlcsTournament.addPlayer("Tarkvaraarendaja2");
rlcsTournament.startTournament();
