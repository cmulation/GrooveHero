import React, { Component } from 'react';
import { Modal, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { db, storage } from '../services/firebase'


class UpdateProfileForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userId: this.props.userId,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            eMail: this.props.eMail,
            age: this.props.age,
            stylePreference: this.props.stylePreference
        };
    }

    handleSubmit = (e) => {
        console.log(e)
        var fName = document.getElementById('fname-form').value;
        var lName = document.getElementById('lname-form').value;
        var age = document.getElementById('age-form').value;
        //create a dictionary of music styles and whether user selected this style
        var preferences = {
            "rock": document.getElementById('rock-form').checked,
            "hip-hop": document.getElementById('hip-hop-form').checked,
            "pop": document.getElementById('pop-form').checked,
            "country": document.getElementById('country-form').checked
        }
        
        //add selected music style preferences
        var stylePrefs = []
        for (var key1 in preferences) {
            if (preferences[key1])
                stylePrefs.push(key1);
        }       

        //update user info in db
        var userRef = db.collection('users').doc(this.props.userId);
        userRef.update({
            'firstName': fName,
            'lastName': lName,
            'age': age,
            'stylePreference': stylePrefs
        })

        //handle avatar upload
        if (e) {
            const file = e.target.files[0];
            var storageRef = storage.ref("user-avatars");
            var fileRef = storageRef.child(`${this.state.userId}.png`);
            fileRef.put(file) 
		}

        window.alert("Successfully updated your details");
        window.location.reload();
    }

    isStyleSelected(style) {
        console.log(this.state.stylePreference)
        if (this.state.stylePreference.includes(style))
            return "true"
        else
            return "false"
    }




    render() {
        return (
            <Modal
                {...this.props}
                size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton id="update-profile-form-header">
                <Modal.Title id="contained-modal-title-vcenter">Edit profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label >First name:</label>
                    <input type="text" id="fname-form" className="fieldsInUpdateForm" name="fname" defaultValue={this.props.firstName}/>
                    <label >Last name:</label>
                    <input type="text" id="lname-form" className="fieldsInUpdateForm" name="lname" defaultValue={this.props.lastName} />
                    <label>Age:</label>
                    <input type="text" id="age-form" className="fieldsInUpdateForm" name="age" defaultValue={this.props.age}/>

                    <label>Music styles preferences:</label><br></br>
                    <label className="edit-profile-form-labels">rock</label>
                    <input className="checkboxes" type="checkbox" id="rock-form" name="rock" defaultChecked />
                    <label className="edit-profile-form-labels">hip-hop</label>
                    <input className="checkboxes" type="checkbox" id="hip-hop-form" name="hip-hop"/>
                    <label className="edit-profile-form-labels">pop</label>
                    <input className="checkboxes" type="checkbox" id="pop-form" name="pop"/>
                    <label className="edit-profile-form-labels" >country</label>
                    <input className="checkboxes" type="checkbox" id="country-form" name="country" />
                    <input type="file" id="avatar-upload-field" name="avatar" onChange={this.handleSubmit} />
                                 
                </Modal.Body>
                <Modal.Footer>
                    <Button className="update-profile-btns" id="close-btn" onClick={this.props.onHide}>Close</Button>
                    <Button className="update-profile-btns" id="submit-btn" onClick={() => this.handleSubmit()}>Submit</Button>
                </Modal.Footer>
            </Modal>                
        );
    }
}

export default UpdateProfileForm
