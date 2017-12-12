
// Create an array for word choices. 
var popStars = [
	"britney spears", 
	"christina aguilera", 
	"spice girls",
    "destinys child",
    "beyonce",
	"justin timberlake",
    "backstreet boys",
    "nsync"
];

// Blank space to guess the word
var displayWord = [];

// Number of wins
var wins = 0;

// Number of guesses
var lives = 9;

// Variable chooses a word at random for user to guess
var secretWord;

// Letter 
var letter;

// Variable takes the secret word and splits up the letters
var currentWord = [];

// Document function on click displays lettersGuessed, displayWord, and lives.
document.onclick = function(event){
	lettersGuessed = [];
	displayWord = [];
	lives = 9;

// Create a variable called "message" that selects a message based on an action. 
	var message = "";
	document.querySelector('#message').innerHTML = message;

// Chooses a secret word at random from the 'popStars' array. 
    secretWord = popStars[Math.floor(Math.random() * popStars.length)];
    
// Divides the secret word by letters and creates new variable currentWord.
	currentWord = secretWord.split("");

// Creates a variable index attributing the popStars array to the secret word.
	var index = popStars.indexOf(secretWord);
	if (index > -1){
		popStars.splice(index,1);
	}

	for (var i = 0; i < currentWord.length; i++) {
		if (currentWord[i] === " ") {
			displayWord.push("&nbsp;");
		} else {
			displayWord.push("_");
		}
	}

    // Prints results to web page. 
	print();

}


// Document does something on key up.
document.onkeyup = function(event) {

// Changes uppercase character to lowercase
	var start = String.fromCharCode(event.keyCode);
	letter = String.fromCharCode(event.keyCode).toLowerCase();

	lettersGuessed.push(letter);

	if (secretWord.indexOf(letter) > -1) {
		for (var i = 0; i < currentWord.length; i++) {
			if (currentWord[i] === letter){
				displayWord[i] = letter;
			} else if (currentWord[i] === " ") {
				displayWord[i] = " ";
			}
		}
	} else {
		lives--;
	}

    // if the displayWord and currentWord match the Array, victory message and wins increase by 1. 
	if (arraysEqual(displayWord, currentWord)){
		message = "<p>You got it!</p>";
		document.querySelector('#message').innerHTML = message;
        wins++;
        
    // if the user runs out of guesses, the answer appears. 
	} else if (lives === 0){
		message = "<p>Nope....it was "+secretWord+"!</p>";
		document.querySelector('#message').innerHTML = message;
	}

	print();

}

// Creates variables combined with elements to display on web page.
function print (){
	var combinedWord = displayWord.join("");
	var lifeCount = "<p>" + lives + "</p>";
	var display = "<h1>" + combinedWord + "</h1>";
	var guessed = "<h1>" + lettersGuessed + "</h1>";
    var winCount = "<p>Wins: " + wins + "</p>";
    
    // Attributes images to each string. 
    if (secretWord === "britney spears") {
        var photo = "<img id=\"hintPic\" src=\"../assets/images/britney.jpg\">";
    } else if (secretWord === "christina aguilera"){
        var photo = "<img id=\"hintPic\" src=\"../assets/images/xtina.jpg\">";
    } else if (secretWord === "spice girls"){
        var photo = "<img id=\"hintPic\" src=\"../assets/images/spice-girls.jpg\">";
    } else if (secretWord === "destinys child"){
        var photo = "<img id=\"hintPic\" src=\"../assets/images/destinys-child.jpg\">";
    } else if (secretWord === "beyonce"){
        var photo = "<img id=\"hintPic\" src=\"../assets/images/beyonce.jpg\">";
    } else if (secretWord === "justin timberlake"){
        var photo = "<img id=\"hintPic\" src=\"http://via.placeholder.com/500x500\">";
    } else if (secretWord === "backstreet boys"){
        var photo = "<img id=\"hintPic\" src=\"../assets/images/backstreet.jpg\">";
    } else if (secretWord === "nsync"){
        var photo = "<img id=\"hintPic\" src=\"http://via.placeholder.com/500x50\">";
}
    // Query Selector to display elememt IDs. 
	document.querySelector('#lifeCount').innerHTML = lifeCount;
	document.querySelector('#display').innerHTML = display;
	document.querySelector('#guessed').innerHTML = guessed;
	document.querySelector('#winCount').innerHTML = winCount;
	document.querySelector('#imageArea').innerHTML = photo;
}

// Creates function for arraysEqual. 
function arraysEqual(displayWord, currentWord) {
    for(var i = displayWord.length; i--;) {

        // If statement for display word does not equal current word. 
        if(displayWord[i] !== currentWord[i])
            return false;
    }
    // "Else" return true. 
    return true;
}

