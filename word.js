const Letter = require("./letter");
const colors = require("colors/safe");

var word = function(_word) {
    this.letters = [];

    for (i = 0; i < _word.length; i++) {
        var letter = new Letter(_word.charAt(i));
        this.letters.push(letter);
    }
/*-----checking ot see if the letter is in the word
if it is display the lettter to the screen*/
    this.checkGuess = function(guess) {
        var guessCorrect = false;
        for (i in this.letters) {
            if (this.letters[i].checkGuess(guess)) {
                guessCorrect = true;
            }
        }
        return guessCorrect;
    }
/*---this renders the blanks spaces for the letters in the random word--*/
    this.renderWord = function() {
        var _word = '';
        for (i in this.letters) {
            _word += this.letters[i].renderLetter() + ' ';
        }
        return colors.blue(_word);
    }
/* if there are blanks left in the word
then they didn't guess the word*/
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
