// playerData = ["name", wins, "weapon"];
// Starting player 1 with 2 wins so the program executes and finishes instead of looping forever
var playerOneData = ["", 2, ""];

var playerTwoData = ["", 0, ""];

var inputData = "";

// Simulated input on lines 11, 12, 16, 17
console.log("Provide me with Player 1's name!");
inputData = "Jade";
console.log(inputData);
playerOneData[0] = inputData;

console.log("Provide me with Player 2's name!");
inputData = "Danielle";
console.log(inputData);
playerTwoData[0] = inputData;

// Simulated input on lines 23, 24, 28, 29
while(playerOneData[1] != 3 && playerTwoData[1] != 3) {
	console.log("" + playerOneData[0] + ", choose your weapon!");
	inputData = "rock";
	console.log(inputData);
	playerOneData[2] = inputData;

	console.log("" + playerTwoData[0] + ", choose your weapon!");
	inputData = "scissors";
	console.log(inputData);
	playerTwoData[2] = inputData;


	if(playerOneData[2] === "rock"){
		if (playerTwoData[2] === "rock" || playerTwoData[2] === "paper") {
			if (playerTwoData[2] === "paper"){
				playerTwoData[1] = playerTwoData[1] + 1;
				console.log("" + playerTwoData[0] + " wins! Good job. You currently have " + playerTwoData[1] + " win(s).");
			} else {
				console.log("Draw!");
			}
		} else if(playerTwoData[2] === "scissors"){
			playerOneData[1] = playerOneData[1] + 1;
			console.log("" + playerOneData[0] + " wins! Good job. You currently have " + playerOneData[1] + " win(s).");
		} else {
			console.log("Whoops! That's not an option");
		}
	} else if(playerOneData[2] === "paper") {
		if (playerTwoData[2] === "scissors" || playerTwoData[2] === "paper") {
			if (playerTwoData[2] === "scissors"){
				playerTwoData[1] = playerTwoData[1] + 1;
				console.log("" + playerTwoData[0] + " wins! Good job. You currently have " + playerTwoData[1] + " win(s).");
			} else {
				console.log("Draw!");
			}
		} else if(playerTwoData[2] === "rock"){
			playerOneData[1] = playerOneData[1] + 1;
			console.log("" + playerOneData[0] + " wins! Good job. You currently have " + playerOneData[1] + " win(s).");
		} else {
			console.log("Whoops! That's not an option");
		}
	} else if(playerOneData[2] === "scissors") {
		if (playerTwoData[2] === "rock" || playerTwoData[2] === "scissors") {
			if (playerTwoData[2] === "rock"){
				playerTwoData[1] = playerTwoData[1] + 1;
				console.log("" + playerTwoData[0] + " wins! Good job. You currently have " + playerTwoData[1] + " win(s).");
			} else {
				console.log("Draw!");
			}
		} else if(playerTwoData[2] === "paper"){
			playerOneData[1] = playerOneData[1] + 1;
			console.log("" + playerOneData[0] + " wins! Good job. You currently have " + playerOneData[1] + " win(s).");
		} else {
			console.log("Whoops! That's not an option");
		}
	} else {
		console.log("Whoops! That's not an option.")
	}

	// Line 79 to exit loop after testing a draw
	// playerOneData[1] = 3;
}

if (playerOneData[1] === 3){
	console.log("" + playerOneData[0] + " wins 3 games! Congrats.");
} else if (playerTwoData[1] === 3){
	console.log("" + playerTwoData[0] + " wins 3 games! Congrats.");
} else {
	console.log("Something went wrong, Jade.");
}