import React from 'react';
import './App.css';
import Wad from 'web-audio-daw';
import firebase from './services/firebase.js';

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
const storage = firebase.storage().ref();
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












var storageRef = firebase.storage().ref("tracks/07076035.ogg");
// String test = storageRef.getDownloadURL();
console.log(storageRef.getDownloadURL().toString());
let bell = new Wad({
  source: 'https://firebasestorage.googleapis.com/v0/b/groovehero-62b58.appspot.com/o/tracks%2F07076035.ogg?alt=media&token=7edd6cef-820e-4eb7-bb3a-332db4a19f42'});
   bell.play();











// var storageX = firebase.storage();
// var gsReference = storageX.refFromURL('gs://groovehero-62b58.appspot.com/tracks/07076035.ogg')
// gsReference.getDownloadURL().then(function(url) {
//   // This can be downloaded directly:
//   var xhr = new XMLHttpRequest();
//   xhr.responseType = 'blob';
//   xhr.onload = function(event) {
//     var blob = xhr.response;
//   };
//   xhr.open('GET', url);
//   xhr.send();
//
// });

// .then(function(url) {
//     let bell = new Wad({
//       source: 'http://bbcsfx.acropolis.org.uk/assets/07076033.wav'});
//       //bell.play();
//     console.log(url);
//   });
// StorageReference filepath = storage.child("tracks").child("Downstream-ElTestigo.mp3");
//   Uri uri = Uri.fromFile(new File(fileName));
//   filepath.putFile(uri).addOnSuccessListener(new OnSuccessListener<UploadTask.TaskSnapshot>() {
//             @Override
//             public void onSuccess(UploadTask.TaskSnapshot taskSnapshot) {
//                 String audio_url=taskSnapshot.getDownloadUrl().toString();
//   console.log(audio_url);



function App() {
  return (
    <div className="App">
      <h1 className="Text">Testing Pad</h1>
      {assets.map(track => {

        return <Box track={track}/>

      })}

    <button id="record">record</button>

    </div>
  );


}

export default App;
