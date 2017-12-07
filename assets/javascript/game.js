//create an array of words
const words = ['naruto', 'pikachu', 'anime']
//computer chooses word randomly from array
let randNum = Math.floor(Math.random() * words.length);
let winCounterVar = 0;
let guessCounterVar = 10;
let rightWord = [];
let wrongWord = ['*'];
let chosenWord = words[randNum]; //this is the word the computer chooses from the words array
let underscore = [];
let duplicatesArray = [];

console.log(chosenWord);

//reset all variables to their original state
function roundReset () {
	let winCounterVar = 0;
	let guessCounterVar = 10;
	let rightWord = [];
	let wrongWord = [];
	let underscore = [];
}

// dom manipulation
let docUnderScore = document.getElementById('underscores');

//for some reason, the computer does not connect the above javascript to the 'underscores' class
//i want to replace the underscores with text
/*
document.getElementsByClassName("underscores").innerHTML = "Paragraph changed!";
function doIt() {
    document.getElementById("underscores").innerHTML = "Paragraph changed!";
}
*/

//document.getElementById("underscores").innerHTML = "Paragraph changed!";

//create underscores based on length of word
let generateUnderscore = () => {
	for (let i = 0; i < chosenWord.length; i++) {
		underscore.push('_');
		
	}
	return underscore;
}




//console.log(generateUnderscore());
//get user's guess
document.addEventListener('keypress', (event) => {
	let keyword = String.fromCharCode(event.keyCode);
//then convert to lowercase (not working)
var makeLowerCase = keyword.toLowerCase();
	//document.getElementById('underscores').innerHTML = makeLowerCase;

	console.log(keyword);
	document.getElementById("guessCounter").innerHTML = guessCounterVar--;
	if (guessCounterVar === 0) {
		alert('You lose. Sorry pleb.');
	} else {
		return;
	}

/*var duplicateLetter = (keyword == rightWord || wrongWord);

	//check if user guess has been guessed already
		
*/
			if(chosenWord.indexOf(keyword) > -1) {

	//if correct letter, push to right array

		rightWord.push(keyword);
		console.log('users guess is in rightWord array');
		console.log(rightWord);
		underscore[chosenWord.indexOf(keyword)] = keyword;
			console.log(underscore);
		document.getElementById("underscores").innerHTML = underscore.join('');
		if (underscore.join('') == chosenWord) {
			alert('You are a weeaboo hero!');
			document.getElementById("winCounter").innerHTML = winCounterVar + 1;
			roundReset();
		} else {
			console.log('game not over');
		}
	
	} else {
	//check if user guess is a duplicate
		for (i=0; i<wrongWord.length; i++) {			
			if (keyword !== wrongWord[i]) {
				wrongWord.push(keyword);
				console.log('users guess is in wrongWord array');
				console.log(wrongWord);
				document.getElementById("wrongGuess").innerHTML = wrongWord.join('');
			
			} else {
				duplicatesArray.push(keyword);
			}
	}

	//if wrong, push to wrong array
		
	}
});


	// if user's guess is right, then it is console.logged as greater than -1
	


	
/* other psychic demo with numbers 

let letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let randNum = getRandomNumber(10);
let computerGuess = letterBank[randNum];
let wrongLetter = [];
let winCounter = 0;
let lossCounter = 0;
let guessesLeftCounter = 10;
let correctGuess = false;
var randomNumber = getRandomNumber(10);
var guess;
// define variables userGuess, computerGuess

function getRandomNumber(upper) {
	var num = Math.floor(Math.random()*upper) + 1;
	return num;
}
while(true) {
	guess = prompt('what number am i thinking of? between 1 and 10');
	guessesLeftCounter -= 1;
	if (parseInt(guess) === randomNumber); {
		correctGuess = true;
		break;
	}

}
document.write('you win');




*/

//docUnderScore[0].innerHTML = generateUnderscore().join(' ');







