"use strict";

// Retrieve elements
const boards = document.querySelectorAll(".board");

const createPlayer = (name, symbol) => {
  return {
    name: name,
    symbol: symbol,
    score: 0,
  };
};

const game = (() => {
  let gameBoard = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const player1 = createPlayer("Player 1", "X");
  const player2 = createPlayer("Player2", "O");
  let activePlayer = player1;
  const switchPlayerturn = () =>
    (activePlayer = activePlayer === player1 ? player2 : player1);
  const playRound = boards.forEach(function (board) {
    board.addEventListener("click", function (e) {
      console.log();
      board.textContent = activePlayer.symbol;
      switchPlayerturn();
    });
  });
})();

// play: function () {
//   board.addEventListener("click", function (e) {
//     const clickedElement = event.target
//     gameBoard[0][0] = symbol;
//   });
/*
Your main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory. Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.

PSEUDO CODE:
1. create a gameboard to store the game logic in that code displayController 
2. create a scoring system

TO DO LIST:
1. add (x,o) to the block
2. switch turns()


//module sample
var myModule = {
    name: 'Willr,
    age: 34,
    sayName: function(){
        alert(this.name);
    }
    setName: function(newName) {
        this.name = newName;
    }
}
myModule.setName('Willis);
mymodule.SayName()

1. Set up an AI
2. Set up Two Player Mode
3. Game logic


PSUEDO CODE:
1. create factory function for Player
2. const Player = (Player, symbol)
 */

//Module - for one
// factory - for everything else
