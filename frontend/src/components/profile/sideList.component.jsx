
import {Accordion, Table, ListGroup} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from "../../contexts/UserContext";
import "./profileStyle.css"

function SideListComponent() {
    const { userData, refreshUserData } = useUser();
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState("");
    
    
    useEffect(() => {
        if ( location.pathname == "/profile") {
            setActiveCategory("Profile");
        } else if (location.pathname == "/profile/latestorder") {
            setActiveCategory("LatestOrder");
        } else if (location.pathname.includes(`/profile/info/${userData?.name}/${userData?._id}`)) {
            setActiveCategory("Details");
        }
    },[location, userData?.name, userData?._id])
   
    return (
        <>
            <ListGroup>
                <ListGroup.Item disabled>MY ACCOUNT</ListGroup.Item>
                <ListGroup.Item>
                    <Link to="/profile/latestorder" className={`nav-link ${activeCategory === 'LatestOrder' ? 'active' : ''}`}>Latest order</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to="/profile" className={`nav-link ${activeCategory === 'Profile' ? 'active' : ''}`}>Order History</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to={`/profile/info/${userData?.name}/${userData?._id}`} className={`nav-link ${activeCategory === 'Details' ? 'active' : ''}`}>User Details</Link>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
}

export default SideListComponent;
