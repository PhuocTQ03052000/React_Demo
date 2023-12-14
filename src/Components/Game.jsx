import React, { useState } from "react";
import Board from "./Board";
import { difference } from "lodash";

const style = {
    margin: "0 auto",
    textAlign: "center",
}
// Array winning Combinations
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// Function check win
const isWon = (board) => {
  for (let i = 0; i < winPatterns.length; i++) {
    let [a, b, c] = winPatterns[i];
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }
  return false;
};
// Function check draw
const isDraw = (board) => {
  return board.filter((box) => !box).length === 0;
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isStopped, setGameStop] = useState(false);
  const [nextPlayer, setNextPlayer] = useState("");
  const [message, setMessage] = useState("Tic tac toe");

  const player = {
    human: "X",
    computer: "O",
  };

  //Function restart the game
  const refresh = () => {
    setBoard(Array(9).fill(""));
    setGameStop(false);
    setNextPlayer('');
    setMessage('Click to start game!');
  };

  const handleClick = (position) => {
    if (isStopped) {
      return;
    }

    if (board[position]) {
      return;
    }

    const boardCopy = [...board];
    boardCopy[position] = player.human;
    setBoard(boardCopy);

    //check win and draw condition
    if (!isWon(boardCopy)) {
      setNextPlayer(`Next player: ${player.computer}`);
    }else{
      setNextPlayer(`Winner is: ${player.human} `);
      setGameStop(true);
      return;
    }

    if (isDraw(boardCopy)) {
      setMessage("Draw");
      setGameStop(true);
      return;
    }

    // Computer moves
    setTimeout(() => {
      const computerIndex = determineComputerMove(boardCopy, player);
      const boardCopyMove = [...boardCopy];
      boardCopyMove[computerIndex] = player.computer;
      setBoard(boardCopyMove);

      //check win and draw condition
      if (!isWon(boardCopyMove)) {
        setNextPlayer(`Next player: ${player.human}`);
      }else{
        setNextPlayer(`Winner is: ${player.computer}`);
        setGameStop(true);
        return;
      }

      if (isDraw(boardCopyMove)) {
        setMessage("Draw");
        setGameStop(true);
        return;
      }
    }, 500);
  };

  return (
        <div style={style} className="board-game">
            <h2>{message}</h2>
            <p>{nextPlayer}</p>
            <Board value={board} onClick={handleClick} />
            <button onClick={refresh}>Refresh</button>
        </div>
  );
};

export default Game;

//Xác định vị trí move cho computer
function determineComputerMove(board, player) {
  const computerMoves = [];
  const humanMoves = [];
  board.forEach((box, index) => {
    if (box === player.computer) {
      computerMoves.push(index);
    }

    if (box === player.human) {
      humanMoves.push(index);
    }
  });
  // if can win, then win
  for (let pattern of winPatterns) {
    const winPosition = difference(pattern, computerMoves);
    if (winPosition === 1) {
      const winPos = board[winPosition[0]];
      if (!winPos) {
        return winPosition[0];
      }
    }
  }
  // if cannot win, then block
  for (let pattern of winPatterns) {
    const winPosition = difference(pattern, humanMoves);
    if (winPosition === 1) {
      const winPos = board[winPosition[0]];
      if (!winPos) {
        return winPosition[0];
      }
    }
  }
  // if cannot block, take the middle
  const midleSquare = 4;
  if (!board[midleSquare]) {
    return midleSquare;
  }
  // if cannot take the middle, then random
  let randomPosition = getRandomInt(0, 9);
  while (board[randomPosition]) {
    randomPosition = getRandomInt(0, 9);
  }
  return randomPosition;
}

function getRandomInt(min, max) {
  min = Math.ceil(min); // làm tròn ở trên
  max = Math.floor(max); // làm tròn ở dưới
  return Math.floor(Math.random() * (max - min) + min);
}
