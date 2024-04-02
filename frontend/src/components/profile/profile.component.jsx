import { useEffect, useState } from 'react';
import {Card, Accordion} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUser } from "../../contexts/UserContext";
import { getUserOrders } from '../../services/userorder';

function ProfileComponent() {
    const { userData, refreshUserData } = useUser();
    const token = window.localStorage.getItem("token")
    const [userOrder, setUserOrder] = useState({ orders: [], products: [] });
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        if (token && userData?._id) {
            const fetchUserOrders = async () => {
                setIsLoading(true); 
                try {
                    const { orders, products } = await getUserOrders(userData._id, token);
                    setUserOrder({ orders, products });
                } catch (err) {
                    console.log("error in loading the orders", err);
                }
                setIsLoading(false); 
            };
            fetchUserOrders();
        }
    }, [token, userData?._id]);
    
    console.log(userOrder.orders[1]?.productsId,"SEPARTATION", userOrder?.products)


    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP' }).format(price);
    };
 
    if (isLoading) {
        return <div>Loading...</div>; // Or some loading spinner
    }

    return (
        <div>       
          <Accordion>
            {userOrder.orders?.map((order, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>
                    Order Number: {order.orderNumber} 
                    Total Amount: {formatPrice(order.totalAmount)}
                </Accordion.Header>
                <Accordion.Body>
                  {userOrder.products?.filter(product => order.productsId.includes(product._id)).map((product, productIndex) => (
                      <div key={productIndex}>
                        {product.productName} 
                      </div>
                    ))
                  }
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      );
}

export default ProfileComponent;

// {userOrder.orders.map((item, index) => ( 

// {orders: Array(1), products: Array(5)}