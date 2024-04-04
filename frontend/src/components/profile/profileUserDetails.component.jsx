import { useUser } from "../../contexts/UserContext";
import SideListComponent from './sideList.component';
import {ListGroup, Button} from 'react-bootstrap';
import "./profileStyle.css"

function ProfileUserDetails() {
    const { userData, refreshUserData } = useUser();
    const token = window.localStorage.getItem("token")
 

    return (
        <div className='profile-page-container'>
            <div className='profile-sidebar'>
                <SideListComponent />
            </div>
            <div>
            <ListGroup>
                <ListGroup.Item>Name: {userData?.name}</ListGroup.Item>
                <ListGroup.Item>Email address:   {userData?.email} </ListGroup.Item>
                <ListGroup.Item>Gender: Unspecified</ListGroup.Item>
                <ListGroup.Item>Phone number: Unspecified</ListGroup.Item>
                <ListGroup.Item>Password: {userData?.password}</ListGroup.Item>
                <Button variant="primary" className="btn btn-dark">EDIT</Button>
            </ListGroup>
            </div>
         
        </div>
      );
}

export default ProfileUserDetails;
