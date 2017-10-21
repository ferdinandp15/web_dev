//create secret

var secretNumber = 15;

// Ask user for guess

var guess = prompt("What is your guess?");

var nguess = Number(guess);

if (nguess == secretNumber) {
	alert("Great GUEST!!! You are correct!");
}
else if(nguess > secretNumber) {
	alert("Too high!");
}
else {
	alert("Too low");
}