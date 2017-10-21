// dependency for inquirer npm package
const inquirer = require("inquirer");
const Word = require("./word");
const count = 0;
Word.prototype.printInfo = function() {
  console.log("Letter: " + this.letter);
};

const game = {
  wordBank: ['node', 'html', 'css'],
  guessesRemaining: 10,
  currentWord: '',

  startGame: function(){
    /*this.resetGuesses();*/
    this.currentWord = new Word(this.wordBank[Math.floor(Math.random()*this.wordBank.length)]);

    console.log('Welcome to Hangman!');
    console.log('\n' + this.currentWord.renderWord() + '\n');
  },
};

game.startGame();
const askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 5) {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement

    inquirer.prompt([
      {
        name: "letter",
        message: "Guess a letter?"
      }

    ]).then(function(answers) {
      // initializes the variable newguy to be a programmer object which will take
      // in all of the user's answers to the questions above
      console.log('input received: ' + answers.letter);

      var targetWord = new Word(answers.letter);
      // printInfo method is run to show that the newguy object was successfully created and filled
      targetWord.printInfo();

      // printInfo method is run to show that the newguy object was successfully created and filled

      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which prints "all questions asked" to the console
    // when the code has been run five times
  }

};

// call askquestion to run our code
askQuestion();
