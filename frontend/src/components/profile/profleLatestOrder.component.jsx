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

    console.log(userOrder.order)

    return (
        <div className='profile-page-container'>
          <div className='profile-sidebar'>
            <SideListComponent />
          </div>
          {userOrder ? (
            <div> 
                <h4>Vanshopfy</h4>
                <h6>YOUR ORDER'S ON ITS WAY</h6>
                Order number: {userOrder.order?.orderNumber}
                <p>Hi {userOrder.order?.name} ,</p> 
                <p>Your items from your order {userOrder.order?.orderNumber} will be delivered by DHL Express on Monday, Jun 27th, 2022. </p> 
                Here’s what will arrive:

                Thanks again for shopping with us.
                Vanshopfy

                Your delivery information
                {userOrder.order?.name} 
                {userOrder.order?.zip} {userOrder.order?.address} {userOrder.order?.city} {userOrder.order?.country}
   
            </div>
    
          ) : (
            <div className='no-order-message'>
              No orders made by this customer :D
            </div>
          )}
        </div>
      );
}

export default ProfileLatestOrder;
