import React, {useState, useEffect} from "react"
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";

const PLAYER_X = 'X';
const PLAYER_O = 'O';
const winningCombinations = [
    //Rows
    { combo: [0, 1, 2], strikeClass: "strike-row-1" },
    { combo: [3, 4, 5], strikeClass: "strike-row-2" },
    { combo: [6, 7, 8], strikeClass: "strike-row-3" },
  
    //Columns
    { combo: [0, 3, 6], strikeClass: "strike-column-1" },
    { combo: [1, 4, 7], strikeClass: "strike-column-2" },
    { combo: [2, 5, 8], strikeClass: "strike-column-3" },
  
    //Diagonals
    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
    { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
  ];
function checkWinner(tiles: string[], setStrikeClass: (strikeClas: string) => void, setGameState: (gameState: number) => void){
    for (const { combo, strikeClass } of winningCombinations) {
        const tileValue1 = tiles[combo[0]];
        const tileValue2 = tiles[combo[1]];
        const tileValue3 = tiles[combo[2]];
    
        if (
          tileValue1 !== null &&
          tileValue1 === tileValue2 &&
          tileValue1 === tileValue3
        ) {
          setStrikeClass(strikeClass);
          if(tileValue1 === PLAYER_X){
            setGameState(GameState.playerXWin);
          }else{
            setGameState(GameState.playerOWin);
          }
          return;
        }
    }
    const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
    if(areAllTilesFilledIn) {
        setGameState(GameState.draw);
    }
}

function TicTacToe(){
    type nextPlayerType = string | null;
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
    const [nextPlayer, setNextPlayer] = useState<nextPlayerType>(`Next player: ${PLAYER_X}`);
    const [strikeClass, setStrikeClass] = useState('');
    const [gameState, setGameState] = useState(GameState.inProgress);
    const handleReset = () => {
        setGameState(GameState.inProgress);
        setTiles(Array(9).fill(null));
        setPlayerTurn(PLAYER_X);
        setStrikeClass(undefined);
        setNextPlayer(null);
    }

    const handleTileClick = (index: number) => {
        //nếu một trong 2 player win thì game sẽ dừng
        if(gameState !== GameState.inProgress){
            return;
        } 
        //check xem tile đã có giá trị hay chưa 
        if(tiles[index] !== null){
            return;
        }

        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);

        if(playerTurn === PLAYER_X){
            setNextPlayer(`Next player: ${PLAYER_O}`)
            setPlayerTurn(PLAYER_O);
        } else {
            setNextPlayer(`Next player: ${PLAYER_X}`)
            setPlayerTurn(PLAYER_X);
        }
    }  

    useEffect(() => {
        checkWinner(tiles, setStrikeClass, setGameState);
    }, [tiles]);

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Board
                dataTestBoardId='board-component'
                tiles={tiles}
                onTileClick={handleTileClick}
                playerTurn={playerTurn}
                strikeClass={strikeClass}
            />
            <p>{nextPlayer}</p>
            <GameOver dataTestStateId='state-component' gameState={gameState}/>
            <Reset dataTestId='reset-test' gameState={gameState} onReset={handleReset}/>
        </div>
    );
}

export default TicTacToe;