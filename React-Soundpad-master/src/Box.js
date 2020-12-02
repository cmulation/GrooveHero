import React, { Component} from 'react';
import './Box.css'

class Box extends Component {

    onClick = () => {
        const audio = new Audio(this.props.track.name);
        audio.play();
        console.log("looping" + this.props.track.name);
        audio.loop = true;
    }

    render () {

        return(
           <button onClick={this.onClick} className="box">
               {this.props.track.text}
           </button>
        )
    }

}

export default Box;
