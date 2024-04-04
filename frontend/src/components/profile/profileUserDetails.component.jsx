import { useUser } from "../../contexts/UserContext";
import SideListComponent from './sideList.component';
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
                Name: 
                Email address:
                Gender: Unspecified
                Phone number: Unspecified
                Password:

                edit
            </div>
         
        </div>
      );
}

export default ProfileUserDetails;
