import React from 'react';
import GameState from "./GameState";

interface Props {
    gameState: number;
    onReset: () => void;
    dataTestId?: string;
}

function Reset({ dataTestId = "", ...prop }: Props) {
    if(prop.gameState === GameState.inProgress) return;

    return (
        <button data-testid={dataTestId} onClick={prop.onReset} className="reset-button">Reset</button>
    );
}

export default Reset;