import Strike from "./Strike";
import Tile from "./Tile";

function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
    return (
        <div className="board">
            {[...Array(9)].map((_, index) => (
                <Tile
                    playerTurn={playerTurn}
                    key={index}
                    onClick={() => onTileClick(index)}
                    value={tiles[index]}
                />
            ))}
            <Strike />
        </div>
    );
}

export default Board;