import React from 'react';
import './App.css';

import Box from './Box';

import track1 from './assets/rock_bass1.mp3';
import track2 from './assets/rock_bass2.mp3';
import track3 from './assets/rock_bass3.mp3';
import track4 from './assets/rock_bass4.mp3';
import track5 from './assets/rock_drum1.mp3';
import track6 from './assets/rock_drum2.mp3';
import track7 from './assets/rock_drum3.mp3';
import track8 from './assets/rock_drum4.mp3';
import track9 from './assets/rock_rhythm1.mp3';
import track10 from './assets/rock_rhythm2.mp3';
import track11 from './assets/rock_rhythm3.mp3';
import track12 from './assets/rock_solo1.mp3';
import track13 from './assets/rock_solo2.mp3';
// import track14 from './assets/14.wav';
// import track15 from './assets/15.wav';
// import track16 from './assets/16.wav';

const assets = [
  {name:track1,text:"Bass 1"},
  {name:track2,text:"Bass 2"},
  {name:track3,text:"Bass 3"},
  {name:track4,text:"Bass 4"},
  {name:track5,text:"Drum 1"},
  {name:track6,text:"Drum 2"},
  {name:track7,text:"Drum 3"},
  {name:track8,text:"Drum 4"},
  {name:track9,text:"Rhythm 1"},
  {name:track10,text:"Rhythm 2"},
  {name:track11,text:"Rhythm 3"},
  {name:track12,text:"Solo 1"},
  {name:track13,text:"Solo 2"},
  // {name:track14,text:"Solo 3"},
  // {name:track15,text:15},
  // {name:track16,text:16},
];

function App() {
  return (
    <div className="App">
      <h1 className="Text">Testing Pad</h1>
      {assets.map(track => {

        return <Box track={track}/>

      })}

    </div>
  );
}

export default App;
