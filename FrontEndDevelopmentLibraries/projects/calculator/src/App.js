import './App.css';
import { useState } from "react";

function App () {
  const [screen, setScreen] = useState( '0' )
  const [formula, setFormula] = useState( '' )

  const handleClick = ( e ) => {
    console.log( e.target.value );
    if ( screen.length === 25 ) {
      const temp = screen
      setScreen( 'too much' )
      setTimeout( () => {
        setScreen( temp )
      }, 1000 );
    } else if ( /[1-9]/.test( e.target.value ) && screen !== 'too much' ) {
      setScreen( screen === '0' ? e.target.value : screen + e.target.value )
    } else if ( e.target.value === '0' && screen !== 'too much' ) {
      if ( screen !== '0' ) {
        setScreen( screen + '0' )
      }
    } else if ( e.target.value === '.' && screen !== 'too much' ) {
      if ( screen.indexOf( '.' ) === -1 ) {
        setScreen( screen + '.' )
      }
    }
    // setScreen( e.target.value )
    setFormula( formula + e.target.value )
  }

  const equal = () => {
    let res = eval( formula )
    setScreen( res )
    setFormula( res )
  }

  const clear = () => {
    setScreen( '0' )
    setFormula( '' )
  }

  return (
    <div className="App">
      <div className="calculator">

        <div className="formulaScreen">{formula}</div>
        <div className="outputScreen" id="display">{screen}</div>

        <div className='keys'>
          <div className='row1'>
            <button id="clear" value="AC" onClick={clear}>AC</button>
            <button id="divide" value="/" onClick={handleClick}>/</button>
            <button id="multiply" value="x" onClick={handleClick} >x</button>
          </div>
          <div className='rows'>
            <button id="seven" value="7" onClick={handleClick}>7</button>
            <button id="eight" value="8" onClick={handleClick}>8</button>
            <button id="nine" value="9" onClick={handleClick}>9</button>
            <button id="subtract" value="‑" onClick={handleClick}>‑</button>
          </div>
          <div className='rows'>
            <button id="four" value="4" onClick={handleClick}>4</button>
            <button id="five" value="5" onClick={handleClick}>5</button>
            <button id="six" value="6" onClick={handleClick}>6</button>
            <button id="add" value="+" onClick={handleClick}>+</button>
          </div>

          <div className='rows'>
            <div className='r4-left'>
              <div className='r4-1'>
                <button id="one" value="1" onClick={handleClick}>1</button>
                <button id="two" value="2" onClick={handleClick}>2</button>
                <button id="three" value="3" onClick={handleClick}>3</button>
              </div>
              <div className='r4-2'>
                <button id="zero" value="0" onClick={handleClick}>0</button>
                <button id="decimal" value="." onClick={handleClick}>.</button>
              </div>

            </div>
            <div className='r4-right'>
              <button id="equals" value="=" onClick={equal}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
