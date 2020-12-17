import React from 'react';



//const storage = firebase.storage().ref()

class AudioGetter extends React.Component {
    constructor() {
        super()
        this.audioFile = {
            audioName: '',
        }    
        this.getAudio('audioName')
    }

    getAudio(audioName) {
        storage.child(`${audioName}.mp3`).getDownloadURL().then((url) => {
            this.state[audioName] = url
            this.setState(this.state)
        })
    }
    render() {
        return (
            <div>
                <audio src={this.state.audioName} controls/>
            </div>
        );
    }
}
export default AudioGetter;