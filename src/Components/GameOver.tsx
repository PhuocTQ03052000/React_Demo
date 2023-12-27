import React from 'react';
import GameState from "./GameState";

type GameStateProps  = {
    gameState: number;
    dataTestStateId?: string;
}

function GameOver({ dataTestStateId = "", gameState}: GameStateProps) {
    switch (gameState) {
        case GameState.inProgress: 
            return <div data-testid={dataTestStateId}></div>;
        case GameState.playerOWin: 
            return <div className="game-over" data-testid={dataTestStateId}>O Wins</div>;
        case GameState.playerXWin: 
            return <div className="game-over" data-testid={dataTestStateId}>X Wins</div>;
        case GameState.draw: 
            return <div className="game-over" data-testid={dataTestStateId}>Draw</div>;
        default: return <div data-testid={dataTestStateId}></div>;
    }
}

export default GameOver;