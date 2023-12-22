import React from 'react';
import GameState from "./GameState";

type GameStateProps  = {
    gameState: number
}

function GameOver({ gameState }: GameStateProps ) {
    switch (gameState) {
        case GameState.inProgress: 
            return <></>;
        case GameState.playerOWin: 
            return <div className="game-over">O Wins</div>;
        case GameState.playerXWin: 
            return <div className="game-over">X Wins</div>;
        case GameState.draw: 
            return <div className="game-over">Draw</div>;
        default: return <></>;
    }
}

export default GameOver;