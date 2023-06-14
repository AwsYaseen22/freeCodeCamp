import './App.css';
import { useEffect, useState } from 'react'

function App () {

  let keys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c']

  let obj = {
    q: { key: 'Q', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', display: 'Heater 1', selected: false, index: 0 },
    w: { key: 'W', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', display: 'Heater 2', selected: false, index: 1 },
    e: { key: 'E', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', display: 'Heater 3', selected: false, index: 2 },
    a: { key: 'A', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', display: 'Heater 4', selected: false, index: 3 },
    s: { key: 'S', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', display: 'Clap', selected: false, index: 4 },
    d: { key: 'D', link: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', display: 'Open HH', selected: false, index: 5 },
    z: { key: 'Z', link: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', display: 'Kick n Hat', selected: false, index: 6 },
    c: { key: 'C', link: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', display: 'Kick', selected: false, index: 8 },
    x: { key: 'X', link: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', display: 'Closed HH', selected: false, index: 7 },
  }

  const [power, setPower] = useState( true )
  const [display, setDisplay] = useState( 'Welcome' )
  const [volume, setVolume] = useState( { volume: 0.5, input: 50 } )


  useEffect( () => {
    function handleKeyDown ( e ) {
      if ( [81, 87, 69, 65, 83, 68, 90, 88, 67].includes( e.keyCode ) ) {
        handlPress( obj[e.key.toLowerCase()].key )
      }
    }
    document.addEventListener( 'keydown', handleKeyDown );

    // clean up
    return function cleanup () {
      document.removeEventListener( 'keydown', handleKeyDown );
    }
  }, [] );

  const handlPress = ( key ) => {
    if ( power ) {
      key = key.toLowerCase()
      let item = obj[key]
      let e = document.getElementById( `key${item.index}` )
      e.classList.toggle( 'keyPressed' )
      setTimeout( () => {
        e.classList.toggle( 'keyPressed' )
      }, 150 );
      setDisplay( item.display )
      let audio = document.getElementById( item.key )
      audio.volume = volume.volume
      audio.currentTime = 0
      audio.play()
    } else {
      key = key.toLowerCase()
      let item = obj[key]
      let e = document.getElementById( `key${item.index}` )
      e.classList.toggle( 'keyPressedOff' )
      setTimeout( () => {
        e.classList.toggle( 'keyPressedOff' )
      }, 150 );
    }


  }

  const changeVolume = ( e ) => {
    const volume = e.target.value / 100;
    const message = "Volume: " + e.target.value;
    setVolume( { volume: volume, input: e.target.value } )
    setDisplay( message )
  }

  const togglePower = () => {
    setPower( !power )

  }

  return (
    <div className="App" id="drum-machine">
      <div className="keys">
        {keys.map( ( d, i ) => (
          <div key={i} className='drum-pad' id={`key${i}`} onClick={( e ) => handlPress( d )} style={{ userSelect: 'none' }}>
            {d.toUpperCase()}
            <audio className="clip" id={d.toUpperCase()} src={obj[d].link}></audio>
          </div>
        )
        )}
      </div>
      <div className="settings">
        <div className="innerSettings">
          <h2 id='display'>{display}</h2>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, alignItems: "center" }}>
            <button className='power-button' onClick={togglePower} style={power ? { backgroundColor: 'green' } : { backgroundColor: 'tomato' }} ></button>
            <h3>Power {power ? 'on' : 'off'}</h3>

          </div>
          <br />
          <input value={volume.input}
            type="range"
            min="1"
            max="100"
            onChange={changeVolume}>
          </input>
        </div>
      </div>
    </div >
  );
}

export default App;
