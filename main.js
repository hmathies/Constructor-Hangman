// requiring the letter and word modules
const Word = require("./word");
const colors = require("colors/safe");
const prompt = require("prompt");

var count = 0;
const game = {
    wordBank: ['node', 'html', 'css'],
    guessesRemaining: 10,
    currentWord: '',

    startGame: function(wrd) {
        /*this.resetGuesses();*/
        this.currentWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);

        console.log('\nWelcome to Hangman!');
        console.log('\n' + this.currentWord.renderWord() + '\n');
    },
};

game.startGame();

// requiring the inquirer or prompt npm package to ask users questions
// const inquirer = require("inquirer");
prompt.message = ("");

console.log();

const promptUser = {
    properties: {
        name: {
            description: colors.magenta("Guess a letter?"),
            pattern: /^[a-zA-Z]+$/,
            message: 'Guess a letter?',
            required: true

        },

    }
}


prompt.start();
prompt.get(promptUser, function(err, result) {
    console.log('Command-line input received:');
    console.log('guess: ' + result.name);
    count++;
    console.log("this is count: " + count);
    if(count < 10){
      prompt.start();
      count++;
      console.log("keep guessing");
      return;
    }


});


  //refactor to use inquirer and look at the inquirer recursion activity- programmersloop recursion activity 7 week 11
