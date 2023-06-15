import './App.css';

function App () {
  return (
    <div className="App">
      <div className="calculator">

        <div className="formulaScreen">1*5+8-100*1000+568591*5+8-100*1000+568591*5+8-100*10</div>
        <div className="outputScreen" id="display">0</div>

        <div className='keys'>
          <div className='row1'>
            <button id="clear" value="AC">AC</button>
            <button id="divide" value="/" >/</button>
            <button id="multiply" value="x" >x</button>
          </div>
          <div className='rows'>
            <button id="seven" value="7">7</button>
            <button id="eight" value="8">8</button>
            <button id="nine" value="9">9</button>
            <button id="subtract" value="‑">‑</button>
          </div>
          <div className='rows'>
            <button id="four" value="4">4</button>
            <button id="five" value="5">5</button>
            <button id="six" value="6">6</button>
            <button id="add" value="+">+</button>
          </div>

          <div className='rows'>
            <div className='r4-left'>
              <div className='r4-1'>
                <button id="one" value="1">1</button>
                <button id="two" value="2">2</button>
                <button id="three" value="3">3</button>
              </div>
              <div className='r4-2'>
                <button id="zero" value="0">0</button>
                <button id="decimal" value=".">.</button>
              </div>

            </div>
            <div className='r4-right'>
              <button id="equals" value="=" >=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
