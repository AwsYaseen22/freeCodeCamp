import './App.css';
import { useState } from 'react'

function App () {
  let links = [
    { key: 'Q', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
    { key: 'W', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
    { key: 'E', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
    { key: 'A', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
    { key: 'S', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
    { key: 'D', link: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
    { key: 'Z', link: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
    { key: 'X', link: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
    { key: 'C', link: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
  ];


  const handlPress = ( e, index ) => {
    console.log( e.target.classList );
    e.currentTarget.classList.toggle( 'keyPressed' )
    setTimeout( () => {
      e.target.classList.toggle( 'keyPressed' )
    }, 150 );
    console.log( { index } )
    new Audio( links[index].link ).play();
  }

  return (
    <div className="App">
      <div className="keys">
        {links.map( ( d, i ) => <div key={i} className='key' onClick={( e ) => handlPress( e, i )} style={{ userSelect: 'none' }}>{d.key}</div> )}
      </div>
      <div className="settings">
        <div className="innerSettings">
          <h1>test</h1>
          <h1>test</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
