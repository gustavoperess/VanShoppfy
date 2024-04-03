import {Accordion, Table, ListGroup} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from "../../contexts/UserContext";
import "./profileStyle.css"
import SideListComponent from './sideList.component';
import { getLatestOrder } from '../../services/userorder';

function ProfileLatestOrder() {
    const { userData, refreshUserData } = useUser();
    const token = window.localStorage.getItem("token")
    const [userOrder, setUserOrder] = useState({ orders: [], products: [] });
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        if (token && userData?._id) {
            const fetchUserOrders = async () => {
                setIsLoading(true); 
                try {
                    const { order, products } = await getLatestOrder(userData._id, token);
                    setUserOrder({ order, products });
                } catch (err) {
                    console.log("error in loading the orders", err);
                }
                setIsLoading(false); 
            };
            fetchUserOrders();
        }
    }, [token, userData?._id]);
  
    
    if (isLoading) {
        return <div>Loading...</div>; 
    }

    console.log(userOrder)

    return (
        <div className='profile-page-container'>
            <div className='profile-sidebar'>
               <SideListComponent />
            </div>
        <div className='message'>
            Thank you for shopping with us here is the latest order delivered on 
        </div>
    </div>
      );
}

export default ProfileLatestOrder;
