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
askQuestion();




function askQuestion(){
   prompt.get(promptUser, function(err, result) {
    console.log('guess: ' + result.name);
    console.log("this is count: " + game.guessesRemaining);

    if(game.guessesRemaining > 0){
      
      if(game.currentWord.checkGuess(result.name)) {
        console.log("Correct!");
        console.log(game.currentWord.renderWord());
        if (checkWin()){
            return;
        }

      }else{
        game.guessesRemaining--;
        console.log("Incorrect!");
        console.log(game.currentWord.renderWord());
      }
    askQuestion();
    }else{
        if(checkWin()){
            return;
        }else{
            console.log('You lost!');
        }
    }

  }); 
}

function checkWin(){
    if(game.currentWord.checkWholeWord()){
       console.log('You Win!');
       return true; 
    }
    return false;

}


