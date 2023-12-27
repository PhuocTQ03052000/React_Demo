import React from 'react';
import Strike from "./Strike";
import Tile from "./Tile";

interface Props {
    tiles: string[];
    strikeClass: string;
    onTileClick: (index: number) => void;
    playerTurn: string;
    dataTestBoardId?: string;
    dataTestTileId?: string;
}

function Board({ dataTestBoardId = "", ...prop}: Props ) {
    return (
        <div className="board" data-testid={dataTestBoardId}>
            {[...Array(9)].map((_, index) => (
                <Tile
                    dataTestTileId='tile-test'
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