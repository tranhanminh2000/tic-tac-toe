import Board from './components/Board';
import { useState } from 'react'

function App() {
  let [state, setState] = useState({
    history: [{
      squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    xTurn: true
  });

  let handleClick = (i)=>{
    const history = state.history.slice(0 , state.stepNumber + 1);      //Array history
    const current = history[history.length-1];  //Last element in history array 
    let squares = current.squares.slice();      //squares(array) of the last ele
    if(winner(squares) || squares[i]){
      return;
    }
    squares[i] = state.xTurn ? "X" : "O";
    setState({
      history: [...history, {squares : squares}]
    ,
    stepNumber: history.length,
    xTurn : !state.xTurn
    })
  }

  let winner = (squares)=>{
    let line = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    for(let i = 0; i<line.length ; i++){
      let [a,b,c] = line[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }

    return false;

  }

  let checkStatus = ()=>{
    let status = "";

    const history = state.history;    
    const current = history[history.length-1]; 
    const squares = current.squares;

    if(winner(squares)){
      status = `${winner(squares)} is winner`
      return status;
    }

    if(checkDraw(squares)){
      status = "Draw"
      return status;
    }

    status = state.xTurn ? "Next player: X" : "Next player: O" ;
    return status;
  }

  let checkDraw = (squares)=>{
    if(squares.every((ele)=> ele!==null)){
      return true
    }
    return false;
  }

  let jumpTo = (step)=>{
    
    setState({
      history : [...state.history],
      stepNumber : step,
      xTurn: (step % 2 === 0),
    })
  }

  const moves = state.history.map((step, index)=>{
    const desc = index ? `Go to ${index}` : "Start";
    return (
      <li key={index} >
        <button className="btn" onClick={()=>jumpTo(index)}>{desc}</button>
      </li>
    )
  })
  /* render */
  return (
    <>
    <h1>
      <span className="title">Tic Tac </span>
      <span id="break-word">T</span>
      <span className="title">oe</span>
    </h1>
    <div className="App">
      <div className="game">
        <header>{checkStatus()}</header>
        <Board value={state.history[state.stepNumber].squares}
              handleClick={handleClick}/>
      </div>
      <div className="control">
        <header>History</header>
        <ol>
          {moves}
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;
