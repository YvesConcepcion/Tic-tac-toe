"use strict";

// Retrieve elements
const createPlayer = (name, symbol) => {
  return {
    name: name,
    symbol: symbol,
    score: 0,
  };
};

let gameBoard = ["", "", "", "", "", "", "", "", ""];
const container = document.getElementById("grid");
for (let i = 0; i < gameBoard.length; i++) {
  const div = document.createElement("div");
  div.classList.add("board");

  container.appendChild(div);
}
const player1 = createPlayer("Player 1", "X");
const player2 = createPlayer("Player2", "O");

const game = (() => {
  //Create gameBoard
  const boards = document.querySelectorAll(".board");
  let activePlayer = player1;
  const switchPlayerturn = () =>
    (activePlayer = activePlayer === player1 ? player2 : player1);

  //Win Conditions
  let roundWinner;
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkWinner() {
    for (let i = 0; i < winConditions.length; i++) {
      const condition = winConditions[i];
      const cellA = gameBoard[condition[0]];
      const cellB = gameBoard[condition[1]];
      const cellC = gameBoard[condition[2]];

      if (cellA == "" || cellB == "" || cellC == "") {
        continue;
      }
      if (cellA == cellB && cellB == cellC) {
        roundWinner = true;
        activePlayer.score += 1;
        console.log(`${activePlayer.name} wins! Score: ${activePlayer.score}`);
        break;
      }
    }
  }

  const playRound = boards.forEach(function (board, i) {
    board.addEventListener("click", function () {
      if (gameBoard[i] != "" || roundWinner == true) {
        return;
      }
      gameBoard[i] = activePlayer.symbol;
      board.textContent = activePlayer.symbol;
      checkWinner();
      switchPlayerturn();
    });
  });
})();
