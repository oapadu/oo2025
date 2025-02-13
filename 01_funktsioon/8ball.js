function maagiline8Ball(kysimus) {
    var vastused = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt.",
        "Yes - definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely.",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy, try again",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it.",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful."
    ];
    var vastuseNr = Math.floor(Math.random() * vastused.length);
    return "Sinu k\u00FCsimus: \"".concat(kysimus, "\"\nMaagilise palli vastus: ").concat(vastused[vastuseNr]);
}
// Example usage:
console.log(maagiline8Ball("Kas ma magan homme sisse?"));
