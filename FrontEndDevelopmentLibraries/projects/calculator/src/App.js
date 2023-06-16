import './App.css';
import { useState } from "react";

function App () {
  const [screen, setScreen] = useState( '0' )
  const [formula, setFormula] = useState( '' )
  const [lastRes, setLastRes] = useState( false )

  const handleClick = ( e ) => {
    let key = e.target.value
    // if ( screen.length === 25 ) {
    //   const temp = screen
    //   setScreen( 'too much' )
    //   setTimeout( () => {
    //     setScreen( temp )
    //   }, 1500 );
    // } else
    if ( /[0-9]/.test( key ) && lastRes ) {
      // if ( lastRes ) {
      setLastRes( false )
      setFormula( key )
      // console.log( 'here', { lastRes } );
      // }
      // console.log( { lastRes }, { formula } );
      // if (  lastRes == formula && lastRes !== '' ){

      // }
      // console.log( 'equals' );
    }
    if ( /[1-9]/.test( key ) && screen.length < 25 ) {
      // if ( lastRes.length ) {
      //   console.log( { lastRes } );
      //   setFormula( '' )
      //   setLastRes( '' )
      // }
      if ( ['0', '+', '-', '/', 'x'].includes( screen ) ) {
        setScreen( key )
        setFormula( formula + ' ' + key )
      } else {
        setScreen( screen + key )
        setFormula( formula + key )
      }
    } else if ( key === '0' && screen.length < 25 ) {
      if ( screen !== '0' && formula !== '0' ) {
        setScreen( screen + '0' )
        setFormula( formula + '0' )
      }
    } else if ( key === '.' && screen.length < 25 ) {
      if ( screen.indexOf( '.' ) === -1 ) {
        setScreen( screen + '.' )
      }
      let lastSpace = formula.lastIndexOf( ' ' )
      let lastNum = formula.slice( lastSpace )
      // console.log( { lastNum } );
      if ( lastNum.indexOf( '.' ) === -1 ) {
        setFormula( formula + '.' )
      }
    } else if ( ['+', '/', 'x', '-'].includes( key ) ) {
      setScreen( key )
      // console.log( { formula } );
      if ( ['+', '/', 'x', '-'].includes( formula[formula.length - 1] ) ) {
        if ( ['+', '/', 'x'].includes( key ) ) {
          setFormula( formula.slice( 0, formula.length - 1 ) + key )
          if ( ['+', '/', 'x', '-'].includes( formula[formula.length - 3] ) ) {
            setFormula( formula.slice( 0, formula.length - 3 ) + key )

          }
          console.log( 'after setformujla' );
        } else {
          if ( formula[formula.length - 2] !== '-' ) {
            setFormula( formula + ' ' + key )
          }
        }
      } else {
        setFormula( formula + ' ' + key )
      }
    }
    // setFormula( formula + ( key === 'x' ? '*' : key ) )
  }

  const equal = () => {
    let f = formula.replaceAll( 'x', '*' )
    if ( /[0-9]/.test( f ) ) {
      // console.log( eval( f ) );
      let res = eval( f )
      setScreen( res )
      setFormula( res )
      setLastRes( true )
    }
  }

  const clearScreen = () => {
    setScreen( '0' )
    setFormula( '' )
    setLastRes( '' )
  }

  return (
    <div className="App">
      <div className="calculator">

        <div className="formulaScreen">{formula}</div>
        <div className="outputScreen" id="display">{screen}</div>

        <div className='keys'>
          <div className='row1'>
            <button id="clear" value="AC" onClick={clearScreen}>AC</button>
            <button id="divide" value="/" onClick={handleClick}>/</button>
            <button id="multiply" value="x" onClick={handleClick} >x</button>
          </div>
          <div className='rows'>
            <button id="seven" value="7" onClick={handleClick}>7</button>
            <button id="eight" value="8" onClick={handleClick}>8</button>
            <button id="nine" value="9" onClick={handleClick}>9</button>
            <button id="subtract" value="-" onClick={handleClick}>-</button>
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
