
import {Accordion, Table, ListGroup} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from "../../contexts/UserContext";
import { getUserOrders } from '../../services/userorder';
import "./profileStyle.css"

function ProfileLatestOrder() {
    const { userData, refreshUserData } = useUser();
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState("");
    
    
    useEffect(() => {
        if ( location.pathname == "/profile") {
            setActiveCategory("Profile");
        } else if (location.pathname == "/profile/latestorder") {
            setActiveCategory("LatestOrder");
        } else if (location.pathname == "/profile/userdetails") {
            setActiveCategory("Details");
        }
    },[location])
    
    return (
        <div className='profile-page-container'>
            <div className='profile-sidebar'>
                <ListGroup>
                    <ListGroup.Item disabled >MY ACCOUNT</ListGroup.Item>
                    <ListGroup.Item><Link to="/profile/latestorder" className={`nav-link ${activeCategory === 'LatestOrder' ? 'active' : ''}`}>Latest order</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/profile" className={`nav-link ${activeCategory === 'Profile' ? 'active' : ''}`}>Order History</Link></ListGroup.Item>
                    <ListGroup.Item>User Details</ListGroup.Item>
                </ListGroup>
            </div>
        <div className='message'>
            Thank you for shopping with us here is the latest order delivered on 
        </div>
    </div>
      );
}

export default ProfileLatestOrder;
