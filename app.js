function inputUser() {
  const user_input = prompt("Enter Rock, Paper, Scissors").toLowerCase();

  return user_input;
}

function randomOptionForComputer() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  const chocsComputer = choices[randomNumber];
  return chocsComputer;
}

function playGame() {
  let playerCount = 0;
  let computeCount = 0;
  for (let i = 1; i <= 5; i++) {
    let player = inputUser();
    let computer = randomOptionForComputer();
    console.log(computer);
    if (
      (player === "scissors" && computer === "rock") ||
      (player === "rock" && computer === "paper") ||
      (player === "paper" && computer === "scissors")
    ) {
      alert(`round ${i} to lose`);
      computeCount++;
    } else if (
      (player === "paper" && computer === "rock") ||
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper")
    ) {
      alert(`round ${i} to won`);
      playerCount++;
    } else {
      alert(`round ${i} drawn `);
    }
  }

  if (playerCount > computeCount) {
    console.log(
      `Congratulations! You emerged victorious, winning ${playerCount} rounds out of 5.`
    );
  } else if (playerCount < computeCount) {
    console.log(
      `Oops! The computer dominated, winning ${
        computeCount + 1
      } rounds out of 5.`
    );
  } else {
    console.log("It's a close match! The player and the computer are tied.");
  }
}

playGame();
