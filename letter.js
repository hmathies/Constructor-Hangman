/*constructor function which will either display the letter to the screen if it is in the word
or it will display a blank if it is not in the word*/

var letter = function(_letter){
  this.letter = _letter;
  this.isBlank = true;

  this.renderLetter = function(){
    if(this.isBlank){
      return "_";
    }else{
      return this.letter;
    }
  };

  this.checkGuess = function(guess){
    if(this.letter == guess){
      this.isBlank = false;
      return true;
    }
    return false;
  }
};

module.exports = letter;
