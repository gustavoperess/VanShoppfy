import React, { useState } from 'react'; // Import useState
import { useUser } from "../../contexts/UserContext";
import SideListComponent from './sideList.component';
import {ListGroup, Button, Form} from 'react-bootstrap';
import "./profileStyle.css";
import { editUsersInformation } from '../../services/authentication';

function ProfileUserDetails() {
    const { userData } = useUser();
    const token = window.localStorage.getItem("token")
    const [isEditMode, setIsEditMode] = useState(false);
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [emailAddress, setEmailAddress] = useState("")

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };


    const handleOnSubmit = async (event) => {
        event.preventDefault(); 
        const formData = new FormData();
        formData.append("name", userName || userData.name);
        formData.append("password", password || userData.password); 
        formData.append("emailAddress", emailAddress || userData.email);
        try {
            await editUsersInformation(formData, userData?._id, token);
            location.reload()
        } catch (err) {
            console.log("error updating user information", err);
        }
    }


    return (
        <div className='profile-page-container'>
            <div className='profile-sidebar'>
                <SideListComponent />
            </div>
            <div>
                {!isEditMode && (
                    <ListGroup>
                        <ListGroup.Item><b>Name:</b> {userData?.name}</ListGroup.Item>
                        <ListGroup.Item><b>Email address: </b>{userData?.email}</ListGroup.Item>
                        <ListGroup.Item><b>Gender: </b> Unspecified </ListGroup.Item>
                        <ListGroup.Item><b>Phone number: </b>Unspecified</ListGroup.Item>
                        <ListGroup.Item><b>Password: </b>*****</ListGroup.Item>
                        <Button variant="primary" className="btn btn-dark" onClick={toggleEditMode}>EDIT</Button>
                    </ListGroup>
                )}
                {isEditMode && (
                 <Form>
                        <Form.Group className="mb-3 form-group-row">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                defaultValue={userData?.name}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 form-group-row">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email"
                                className="wide-input" 
                                defaultValue={userData?.email}
                                onChange={(e) => setEmailAddress(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 form-group-row">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="text" 
                                defaultValue={userData?.password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button  className="btn btn-dark" type="submit" onClick={handleOnSubmit}>
                            Submit
                        </Button>
                        <Button  className="btn btn-dark" onClick={toggleEditMode} style={{marginLeft: '10px'}}>
                            Cancel
                        </Button>
                </Form>
                )}
            </div>
        </div>
    );
}

export default ProfileUserDetails;
``
