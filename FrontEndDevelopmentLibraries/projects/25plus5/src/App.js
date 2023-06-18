import { useState } from 'react'
import './App.css';


function App () {
  const [state, setState] = useState( { break: 5, session: 25, playing: false } )

  const playPause = () => {
    setState( { ...state, playing: !state.playing } )
  }

  const increase = ( item ) => {
    if ( state[item] < 60 ) {
      setState( { ...state, [item]: state[item] + 1 } )
    }
  }
  const decrease = ( item ) => {
    if ( state[item] > 1 ) {
      setState( { ...state, [item]: state[item] - 1 } )
    }
  }

  const reset = () => {
    setState( {
      break: 5,
      session: 25,
      playing: false
    } )

  }
  return (
    <div className="App">

      <h1 className='main-title'>25 And 5 POMODORO</h1>
      <div className='container'>
        <div className='middle'>

          <div className="timer" >
            <div className="timer-wrapper">
              <div id="timer-label">
                Session
              </div>
              <div id="time-left">
                25:00
              </div>
            </div>
          </div>

          <div className='settings'>
            <div className="length-control">
              <div id="break-label">
                <h4>
                  Break Length
                </h4>
              </div>
              <div className='control'>
                <button className="btn-level" id="break-decrement" value="-" onClick={() => decrease( 'break' )}>
                  <i className="fa fa-circle-minus fa-2x decrease"></i>
                </button>
                <div className="btn-level" id="break-length">
                  <h4>
                    {String( state.break )}
                  </h4>
                </div>
                <button className="btn-level" id="break-increment" value="+" onClick={() => increase( 'break' )}>
                  <i className="fa fa-circle-plus fa-2x increase"></i>
                </button>

              </div>
            </div>
            <div className="length-control">
              <div id="session-label">
                <h4>
                  Session Length
                </h4>
              </div>
              <div className='control'>
                <button className="btn-level" id="break-decrement" value="-" onClick={() => decrease( 'session' )}>
                  <i className="fa fa-circle-minus fa-2x decrease"></i>
                </button>
                <div className="btn-level" id="break-length">
                  <h4>
                    {state.session}
                  </h4>
                </div>
                <button className="btn-level" id="break-increment" value="+" onClick={() => increase( 'session' )}>
                  <i className="fa fa-circle-plus fa-2x increase"></i>
                </button>

              </div>
            </div>
            <div className="length-control">
              <div id="break-label">
                <h4>
                  Controlers
                </h4>
              </div>
              <div className='controler'>
                <button id="start_stop" onClick={playPause}>
                  {/* switch the icon for play and pause */}
                  {!state.playing && <i className="fa-regular fa-circle-play fa-3x"></i>}
                  {state.playing && < i className="fa-regular fa-circle-pause fa-3x"></i>}
                </button>
                <button id="reset" onClick={reset}>
                  <i className="fa fa-arrows-rotate fa-3x"></i>
                </button>

              </div>
            </div>
          </div>

        </div>

        <audio id="beep" preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
      </div>
    </div >
  );
}

export default App;
