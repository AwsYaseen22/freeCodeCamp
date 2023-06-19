import { useState, useEffect, useRef } from 'react'
import './App.css';


function App () {

  const [breakTime, setBreakTime] = useState( 5 )
  const [session, setSession] = useState( 25 )
  const [playing, setPlaying] = useState( false )
  const [inSession, setInSession] = useState( true )
  const [currentMin, setCurrentMin] = useState( session )
  const [currentSec, setCurrentSec] = useState( 0 )



  const intervalRef = useRef( null );

  useEffect( () => {
    const calculateTimeLeft = () => {
      if ( currentSec === 0 && currentMin > 0 ) {
        setCurrentMin( currentMin - 1 )
        setCurrentSec( 59 )
      } else if ( currentSec > 0 ) {
        setCurrentSec( currentSec - 1 )
      } else if ( currentSec === 0 && currentMin === 0 ) {
        const sound = document.getElementById( 'beep' )
        sound.play()
        setPlaying( false )
        setTimeout( () => {
          if ( inSession ) {
            setInSession( false )
            setCurrentMin( breakTime )
          } else {
            setInSession( true )
            setCurrentMin( session )
          }
          setPlaying( true )

        }, 4000 );
      }
    }
    if ( playing ) {
      intervalRef.current = setInterval( () => {
        calculateTimeLeft();
      }, 1000 );
    } else {
      clearInterval( intervalRef.current );
    }

    return () => clearInterval( intervalRef.current );
  }, [breakTime, currentMin, currentSec, inSession, playing, session] );

  const handleStart = () => {
    setPlaying( true );
  };

  const handlePause = () => {
    setPlaying( false );
  };


  const increaseSession = () => {
    if ( session < 60 ) {
      setSession( session + 1 )
      setCurrentMin( session + 1 )
    }
  }
  const increaseBreak = () => {
    if ( breakTime < 60 ) {
      setBreakTime( breakTime + 1 )
    }
  }
  const decreaseSession = () => {
    if ( session > 1 ) {
      setSession( session - 1 )
      setCurrentMin( session - 1 )
    }
  }
  const decreaseBreak = () => {
    if ( breakTime > 1 ) {
      setBreakTime( breakTime - 1 )
    }
  }


  const reset = () => {
    setBreakTime( 5 )
    setSession( 25 )
    setPlaying( false )
    setCurrentMin( 25 )
    setCurrentSec( 0 )
    setInSession( true )
  }

  return (
    <div className="App">

      <h1 className='main-title'>25 And 5 POMODORO</h1>
      <div className='container'>
        <div className='middle'>

          <div className="timer" >
            <div className="timer-wrapper">
              <div id="timer-label">
                {inSession ? 'Session' : 'Break'}
              </div>
              <div id="time-left" className={playing ? inSession ? 'in-session' : 'in-break' : ''}>
                <p className='minSection'>{String( currentMin ).padStart( 2, '0' )}</p>
                <p className='time-separator'>:</p>
                <p className='secSection'>{String( currentSec ).padStart( 2, '0' )}</p>
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
                <button className="btn-level" id="break-decrement" value="-" onClick={decreaseBreak}>
                  <i className="fa fa-circle-minus fa-2x decrease"></i>
                </button>
                <div className="btn-level" id="break-length">
                  <h4>
                    {String( breakTime )}
                  </h4>
                </div>
                <button className="btn-level" id="break-increment" value="+" onClick={increaseBreak}>
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
                <button className="btn-level" id="session-decrement" value="-" onClick={decreaseSession}>
                  <i className="fa fa-circle-minus fa-2x decrease"></i>
                </button>
                <div className="btn-level" id="session-length">
                  <h4>
                    {session}
                  </h4>
                </div>
                <button className="btn-level" id="session-increment" value="+" onClick={increaseSession}>
                  <i className="fa fa-circle-plus fa-2x increase"></i>
                </button>

              </div>
            </div>
            <div className="length-control">
              <div id="controller-label">
                <h4>
                  Controlers
                </h4>
              </div>
              <div className='controler'>
                <button id="start_stop" onClick={playing ? handlePause : handleStart}>
                  {/* switch the icon for play and pause */}
                  {!playing && <i className="fa-regular fa-circle-play fa-3x"></i>}
                  {playing && < i className="fa-regular fa-circle-pause fa-3x"></i>}
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
