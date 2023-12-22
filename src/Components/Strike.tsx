import React from 'react';

interface Props {
    strikeClass: string;
}

function Strike( prop: Props ) {
    return <div className={`strike ${prop.strikeClass}`}></div>;
}

export default Strike;