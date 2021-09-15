import React from 'react'


export default function Square( { value, handleClick } ) {
    const redPlayer = {
        textShadow: "0 0 10px red,0 0 20px red,0 0 40px red,0 0 60px red"
    }
    const bluePlayer = {
        textShadow: "0 0 10px blue,0 0 20px blue,0 0 40px blue,0 0 60px blue"
    }

    return (
        <div style={value === "X" ? redPlayer : bluePlayer} className="Square" onClick={ handleClick }>
            { value }
        </div>
    )
}
