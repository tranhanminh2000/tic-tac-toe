import React from "react";
import Square from "./Square";

export default function Board({ value, handleClick }) {
  
  let renderSquare = (i) => {
    return (
      <Square value={value[i]} 
      handleClick={() => handleClick(i)}
      ></Square>
    );
  };

  return (
    <div className="Board">
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
