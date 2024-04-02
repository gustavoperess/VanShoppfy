import { useEffect, useState, useNavigate } from 'react';
import {Accordion, Table, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUser } from "../../contexts/UserContext";
import { getUserOrders } from '../../services/userorder';
import "./profileStyle.css"

function ProfileLatestOrder() {
    const { userData, refreshUserData } = useUser();
    const navigate = useNavigate();
    
   
    return (
        <div className='profile-page-container'>
        <div className='profile-sidebar'>
            <ListGroup>
                <ListGroup.Item disabled >MY ACCOUNT</ListGroup.Item>
                <ListGroup.Item>Latest order</ListGroup.Item>
                <ListGroup.Item>Order History</ListGroup.Item>
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
