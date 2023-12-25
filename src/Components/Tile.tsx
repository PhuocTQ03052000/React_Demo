import React from 'react';

interface Props {
    className: string;
    value: string;
    onClick: () => void;
    playerTurn: string;
}

function Tile(prop: Props )  {
    let hoverClass: string | null = null;
    
    if(prop.value == null && prop.playerTurn != null){
        hoverClass = `${prop.playerTurn.toLowerCase()}-hover`;
    }
    
    return (  
    <div 
        onClick={prop.onClick} 
        className={`tile ${prop.className} ${hoverClass}`}>
        {prop.value}
      </div>
    );
}

export default Tile;
