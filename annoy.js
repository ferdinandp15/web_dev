// var answer = prompt("Are we there yet?");

// while(answer !== "yes") {
// 	var answer = prompt("Are we there yet?");	
// }

// if(answer === "yes") {
// 	alert("Yeah! we made it!");
// }

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
	var answer = prompt("Are we there yet?");	
}

	alert("Yeah! we made it!");