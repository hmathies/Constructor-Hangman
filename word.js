const Letter = require("./letter");

var word = function(_word) {
    this.letters = [];

    for (i = 0; i < _word.length; i++) {
        var letter = new Letter(_word.charAt(i));
        this.letters.push(letter);
    }

    this.checkGuess = function(guess) {
        var guessCorrect = false;
        for (i in this.letters) {
            if (this.letters[i].checkGuess(guess)) {
                guessCorrect = true;
            }
        }
        return guessCorrect;
    }

    this.renderWord = function() {
        var _word = '';
        for (i in this.letters) {
            _word += this.letters[i].renderLetter() + ' ';
        }
        return _word;
    }

    this.checkWholeWord = function() {
        var guessCorrect = true;
        for (i in this.letters) {
            if (this.letters[i].isBlank) {
                guessCorrect = false;
            }
        }
        return guessCorrect;
    }

}

module.exports = word;
