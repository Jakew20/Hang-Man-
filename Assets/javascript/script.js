var words = ["Shark", "Whale", "Anchor", "Ship", "Ocean", "Port", "Coral"];



var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

var chosen = [];

/* var found = false; */

var guess;

var guesses = [/**/];

var spaces;

var correct;

var lives = 6;

var divs = "";

var word = "";

var gameOver;

var win;

var lose = "";

var points = 0;

//create div for each alphabetical letter
for (i=0; i < alphabet.length; i++) {
	divs+="<div id=" + alphabet[i].toUpperCase() + " class='guessLetters'>"+ alphabet[i].toUpperCase() + "</div>";

}

//select word from array
var selectedWordIndex = Math.floor(Math.random() * words.length);
//select word from word index number
var selectedWord = words[selectedWordIndex];
// determine number of characters for selected letter
var selectedWordArray = selectedWord.split("");


//determine how many _ for each letter of our selected word
for (i=0; i < selectedWordArray.length; i++) {
	word+="<div id=word_" + i + " style='color: #0f3d58; display: inline-block; padding: 5px;'>"+ "__" + "</div>";

}


//display "_" for each letter of selected word
document.getElementById("selectedWord").innerHTML = word;

//locate alphabet div and insert each div for each letter
document.getElementById("guessed").innerHTML = divs;

//display "lose" score
document.getElementById("lose").innerHTML = lose;




//checks if the guessed letter is in the word
function guessLetters(letter) {
found=0;
	document.getElementById(letter).innerHTML = " * ";
	for (i=0; i < selectedWordArray.length; i++) {
		if (selectedWordArray[i].toUpperCase()==letter) {
			document.getElementById("word_" + i).innerHTML = letter;
			found=1;

		}
	}
		if (found==0) lives--;
		if (found==1) points++;
}  


//Sets the image with the amount of lives left
console.log(gameStatus); function gameStatus() {
	var hangman = document.getElementById("hangmanImg");
	
	//gives points based off of correct guesses
	if (points == selectedWordArray.length) {
		alert("You Win");
	}		
	
	if (lives == 5) {
		hangman.src ="./Assets/images/" + lives + ".png";
		hangman.style = "display: inline-block;";
}

	else if (lives == 4) {
		hangman.src ="./Assets/images/" + lives + ".png";
}
	else if (lives == 3) {
		hangman.src ="./Assets/images/" + lives + ".png";
}
	else if (lives == 2) {
		hangman.src ="./Assets/images/" + lives + ".png";
}
	else if (lives == 1) {
		hangman.src ="./Assets/images/" + lives + ".png";
}
	else if (lives == 0) {
		hangman.src ="./Assets/images/" + lives + ".png";
		lose++
		
		alert("You Lose");
	
	
		
}




	




}
// Event listener
document.onkeydown = function(event) {
  /*  // If we finished a game, dump one keystroke and reset.
    if(hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
        // Check to make sure a-z was pressed. */
        if(event.keyCode >= 65 && event.keyCode <= 90) {
           guessLetters(event.key.toUpperCase());
           gameStatus();
          }
    
};

