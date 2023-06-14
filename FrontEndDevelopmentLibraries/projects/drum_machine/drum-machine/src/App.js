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

  const [display, setDisplay] = useState( '...' )

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
    key = key.toLowerCase()
    let item = obj[key]
    let e = document.getElementById( `key${item.index}` )
    e.classList.toggle( 'keyPressed' )
    setTimeout( () => {
      e.classList.toggle( 'keyPressed' )
    }, 150 );
    setDisplay( item.display )
    let audio = document.getElementById( item.key )
    audio.play()

  }

  // const changeVolume = ( e ) => {
  //   const volume = e.target.value / 100;
  //   const message = "Volume: " + e.target.value;
  //   console.log( message );
  //   // this.setState( {
  //   //   volume: volume,
  //   //   volumeInput: e.target.value,
  //   //   currentSound: message
  //   // } )
  // }

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
          {/* <input value='50'
            type="range"
            min="1"
            max="100"
            onChange={changeVolume}>
          </input> */}
        </div>
      </div>
    </div>
  );
}

export default App;
