import React, { useState } from 'react'; // Import useState
import { useUser } from "../../contexts/UserContext";
import SideListComponent from './sideList.component';
import {ListGroup, Button, Form} from 'react-bootstrap';
import "./profileStyle.css";

function ProfileUserDetails() {
    const { userData } = useUser();
    const [isEditMode, setIsEditMode] = useState(false);

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    return (
        <div className='profile-page-container'>
            <div className='profile-sidebar'>
                <SideListComponent />
            </div>
            <div>
                {!isEditMode && (
                    <ListGroup>
                        <ListGroup.Item>Name: {userData?.name}</ListGroup.Item>
                        <ListGroup.Item>Email address: {userData?.email}</ListGroup.Item>
                        <ListGroup.Item>Gender: Unspecified</ListGroup.Item>
                        <ListGroup.Item>Phone number: Unspecified</ListGroup.Item>
                        <ListGroup.Item>Password: *****</ListGroup.Item>
                        <Button variant="primary" className="btn btn-dark" onClick={toggleEditMode}>EDIT</Button>
                    </ListGroup>
                )}
                {isEditMode && (
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" defaultValue={userData?.name} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" defaultValue={userData?.email} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="secondary" onClick={toggleEditMode} style={{marginLeft: '10px'}}>
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
