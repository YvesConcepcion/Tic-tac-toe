"use strict";

// Retrieve elements
const createPlayer = (name, symbol) => {
  return {
    name: name,
    symbol: symbol,
  };
};

let gameBoard;

const clearBoard = () => {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  const boards = document.querySelectorAll(".board");

  boards.forEach((board) => {
    board.textContent = "";
  });
};

const init = function () {
  clearBoard();
  const container = document.getElementById("grid");
  for (let i = 0; i < gameBoard.length; i++) {
    const div = document.createElement("div");
    div.classList.add("board");
    div.setAttribute("data-index", [i]);
    container.appendChild(div);
  }
  return;
};

const player1 = createPlayer("Player 1", "X");
const player2 = createPlayer("Player2", "O");

const game = (() => {
  let playing = true;
  //Create gameBoard
  init();
  let activePlayer = player1;
  const boards = document.querySelectorAll(".board");

  const switchPlayerturn = () =>
    (activePlayer = activePlayer === player1 ? player2 : player1);
  //Win Conditions
  let winner;
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
        winner = true;
        setTimeout(clearBoard, 5000);
        console.log(`${activePlayer.name} wins!`);
        break;
      }
    }
  }

  const playRound = boards.forEach(function (board, i) {
    board.addEventListener("click", function () {
      if (gameBoard[i] != "") return;
      gameBoard[i] = activePlayer.symbol;
      board.setAttribute("data-symbol", activePlayer.symbol);
      checkWinner();
      switchPlayerturn();
    });
  });
})();
