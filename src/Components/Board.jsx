import React from 'react'
import Box from './Box'
//Render mảng 9 phần tử

const style ={
    width: "250px",
    height: "250px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"

}

const Board = (props) => {
    <div style={style}>
        {[...Array(9)].map((_, index) => (
            <Box 
                key={index}
                onClick={() => props.onClick} value={props.value[index]} index={index}
            />
        ))}
    </div> 
}

export default Board