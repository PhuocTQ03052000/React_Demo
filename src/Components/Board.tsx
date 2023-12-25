import React from 'react';
import Strike from "./Strike";
import Tile from "./Tile";

interface Props {
    tiles: string[];
    strikeClass: string;
    onTileClick: (index: number) => void;
    playerTurn: string;
}

function Board(prop: Props) {
    return (
        <div className="board">
            {[...Array(9)].map((_, index) => (
                <Tile
                    dataTestId='tile-test'
                    playerTurn={prop.playerTurn}
                    key={index}
                    onClick={() => prop.onTileClick(index)}
                    value={prop.tiles[index]}
                    className={undefined}
                />
            ))}
            <Strike strikeClass={prop.strikeClass} />
        </div>
    );
}

export default Board;