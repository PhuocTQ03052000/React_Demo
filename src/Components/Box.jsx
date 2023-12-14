import React from 'react'

const style = {
    border: "3px solid black",
    fontSize: "40px",
    backgroundColor: "#fff0fa",
    color: "#56354d"
}

const Box = (props) => {
    <button style={style} onclick={() => props.onclick(props.index)}>
        {props.value}
    </button>
}

export default Box