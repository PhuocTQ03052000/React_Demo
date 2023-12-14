import React, {useState} from 'react'
import Board from './Board'

const Game = () => {  
    const [board, setBoard] = useState(Array(9).fill(""))

    const player = {
        human: 'X',
        computer: 'O'
    }

    const handleClick = (position) => {
        if(board[position]){
            return
        }
        const boardCopy = [...board]
        boardCopy[position] = player.human
        setBoard(boardCopy)
    }

    return (
       <div>
            <Board 
                value={board} onClick={handleClick}
            />
       </div>
    )
}

export default Game