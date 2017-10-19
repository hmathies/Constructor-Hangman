// requiring the letter and word modules
const Word = require("./word");
const Letter = require("./letter");
const colors = require("colors/safe");

// requiring the inquirer or prompt npm package to ask users questions
// const inquirer = require("inquirer");
const prompt = require("prompt");
prompt.message = ("");

console.log();

var promptUser = {
  properties: {
    name: {
      description: colors.magenta("Guess a letter?"),
      pattern: /^[a-zA-Z]+$/,
      message: 'Guess a letter?',
      required: true
    },
  }
};
prompt.get(promptUser, function (err, result) {
  console.log('Command-line input received:');
  console.log('guess: ' + result.name);
});
prompt.start();
// var _word = new Word('node');
// console.log(_word.renderWord());
// _word.checkGuess('0');
// console.log(_word.renderWord());

game = {
  wordBank: ['node', 'html', 'css'],
  guessesRemaining: 10,
  currentWord: '',

  startGame: function(wrd){
    /*this.resetGuesses();*/
    this.currentWord = new Word(this.wordBank[Math.floor(Math.random()*this.wordBank.length)])
;
    console.log(' ' + this.currentWord.renderWord());
    console.log();
    /*this.promptUser();*/
  },



  // resetGuesses: function(){
  //   this.guessesRemaining =10;
  // },
  // promptUser: function(){
  //   prompt.get(['guess'], function(err, result){
  //     var letterGuessed = this.currentWord(result.guess);
  //
  //     if (letterGuessed == 0){
  //       console.log('wrong.');
  //       this.guessesRemaining--;
  //     }else{
  //       console.log('correct!');
  //         if (this.currentWord.this.letters()){//maybe put if isblank == 0
  //           console.log('You won!');
  //           return;
  //         }
  //     }
  //     console.log('Guesses Remaining: ' + this.guessesRemaining);
  //     console.log();
  //     if (this.guessesRemaining >0) /*if the guesses remaining is greater than one and (&&)the current word has not
  //     been guessed, then prompt the user to pick another letter*/
  //     {
  //       this.promptUser();
  //     }else if(this.guessesRemaining == 0){//|| or if the word has been guessed correctly
  //       console.log('Game over.  Next Word');
  //     }
  //   });
  // }
};
game.startGame();



// requiring the inquirer or prompt npm package to ask users questions
// const inquirer = require("inquirer");
// var count = 0;
// var _word = new Word(_word.length);
//
//
// var askForLetter = function(){
//
//   if (count < this._word){
//
//
//     inquirer.prompt([
//     {
//         name: 'letter',
//         message: 'Guess a letter?',
//
//       }
//     ]).then(function(answers){
//       var newLetter = new Letter(
//         answers.letter);
//
//     count++;
//     askForLetter();
//   });
//
//  }
//
// };
//
// askForLetter();
