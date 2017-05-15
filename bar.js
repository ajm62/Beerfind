
let bar1 = 3;
let bar2 = 4;
let bar3 = 5;

let guess;
let hits = 0;
let guesses = 0;

let barfind = false;

while (barfind == false) {
	guess = prompt("Ready, aim, go! (enter a number 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell number!");
} else {
	guesses = guesses + 1;

	if (guess == bar1 || guess == bar2 || guess == bar3) {
		hits = hits + 1;

		if (hits == 3) {
			barfind = true;
			alert("You found what bar I am at!");
			}
		}
	}
}
let stats = "You took " + guesses + " guesses to find the bar I am at, " +
	"which means your shooting accuracy was " + (3/guesses);
alert(stats);