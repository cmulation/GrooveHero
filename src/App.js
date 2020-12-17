import { React, Component } from 'react';
import './App.css';
import Profile from "./components/Profile"; //import user profile class


//var song = storage.ref("tracks/Downstream-ElTestigo.mp3");
//console.log("Storageref: " + song);


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "ljMDzpGrG3fO6T8dG7lU",
        };
    }

    render() {
        return (
            < div className="App">
                {
                    <Profile userId={this.state.userId}/>
                }
            </div>
        )
    }
}
export default App
