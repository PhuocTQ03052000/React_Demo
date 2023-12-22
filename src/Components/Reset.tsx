import React from 'react';
import GameState from "./GameState";

interface Props {
    gameState: number;
    onReset: () => void;
}

function Reset(prop: Props) {
    if(prop.gameState === GameState.inProgress) return;

    return (
        <button onClick={prop.onReset} className="reset-button">Reset</button>
    );
}

export default Reset;