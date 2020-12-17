import groovehero_logo from '../media/logo.png';
import rockcover from '../media/rock-album-cover.jpg';
import hiphopcover from '../media/hiphop-album-cover.jpg';
import React, { Component } from 'react';
import { db, storage } from '../services/firebase'
import Tabs from "./Tabs";
import { Button, ButtonToolbar } from 'react-bootstrap';
import UpdateProfileForm from "./UpdateProfileForm";


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userId,
            avatar: this.getAvatar(this.props.userId),
            firstName: '',
            lastName: '',
            eMail: '',
            age: '',
            recordings: [],
            stylePreference: [],
            editProfileFormShow: false

        };        
    }

    componentDidMount() {
        var userRef = db.collection('users').doc(this.props.userId);
        userRef.get()
            .then(doc => {
                const user = doc.data()

                this.setState({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    eMail: user.eMail,
                    age: user.age,
                    recordings: user.recordings,
                    stylePreference: user.stylePreference
                })
            })
            .catch(error => console.log(error))
    }

    getAvatar(userId) {
        storage.ref('user-avatars')
            .child(`${userId}.png`)
            .getDownloadURL()
            .then(url => {
                this.setState({ avatar: url })
            })
    }


    render() {

        let editProfileFormClose = () => this.setState({ editProfileFormShow: false });
        return (
            <div className="user-profile-info">
                <header className="groovehero-header">
                    <img src={groovehero_logo} id="groovehero-logo" alt="groovehero" />
                    <span id="app-name">GROOVEHero</span>
                </header>
                <div className="user-info">
                    <p id="my-acc-label">MY ACCOUNT</p>
                    <img id="user-avatar" src={this.state.avatar} alt="avatar" />
                    <br></br>
                    <ButtonToolbar>

                        <Button
                            id="edit-btn"
                            onClick={()=> this.setState({ editProfileFormShow: true })}>
                        </Button>
                        
                        <UpdateProfileForm
                            userId={this.state.userId}
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            age={this.state.age}
                            stylePreference={this.state.stylePreference}
                            show={this.state.editProfileFormShow}
                            onHide={editProfileFormClose} /> 
                        
                    </ButtonToolbar>

                    {/*user profile information*/}
                    <label className="labels" htmlFor="fname" >First Name:</label>
                    <input id="fname" className="user-info-fields" type="text" value={this.state.firstName} readOnly/>
                    <label className="labels" htmlFor="lname" >Last Name:</label>
                    <input id="lname" className="user-info-fields" type="text" value={this.state.lastName} readOnly/>
                    <label className="labels" htmlFor="email" >Email:</label>
                    <input id="email" className="user-info-fields" type="text" value={this.state.eMail} readOnly/>
                    <label className="labels" htmlFor="age" >Age:</label>
                    <input id="age" className="user-info-fields" type="text" value={this.state.age} readOnly/>
                    <label className="labels" htmlFor="styles-preference" >Music style preference:</label>
                    <input id="styles-preference" className="user-info-fields" type="text" value={this.state.stylePreference} readOnly />
                </div>

                <div className="my-styles">
                    <Tabs className="my-styles">
                        <div label="My recordings">
                            <ol className="my-recordings">
                                <li className="playback-control"><audio src={this.props.userRec1} controls /></li>
                                <li className="playback-control"><audio src="" controls /></li>
                                <li className="playback-control"><audio src="" controls /></li>
                                <li className="playback-control"><audio src="" controls /></li>
                            </ol>
                        </div>
                        <div label="My favorite styles">
                            <div className="my-favorite-styles">
                                <img id="rock-cover" class="covers" src={rockcover} alt="rock cover"></img>
                                <img id="hiphop-cover" class="covers" src={hiphopcover} alt="hiphop cover"></img>
                            </div>
                        </div>
                        <div label="Frequently used styles">
                            <div className="my-frequent-styles">
                                <img id="hiphop-cover" class="covers" src={hiphopcover} alt="hiphop cover"></img>
                            </div>
                        </div>
                    </Tabs>
                </div>

            </div>);
    }
}
export default Profile;