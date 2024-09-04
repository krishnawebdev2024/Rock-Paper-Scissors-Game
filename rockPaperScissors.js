const moves = ["rock", "paper", "scissors"];

const playerMove = process.argv[2].toLowerCase();
const computerMove = moves[Math.floor(Math.random() * moves.length)];

let result;
if (playerMove === computerMove) {
    result = "It's a draw!";
} else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "scissors" && computerMove === "paper") ||
    (playerMove === "paper" && computerMove === "rock")
) {
    result = "You win!";
} else {
    result = "You lose!";
}

console.log(`You chose ${playerMove}. Computer chose ${computerMove}. ${result}`);