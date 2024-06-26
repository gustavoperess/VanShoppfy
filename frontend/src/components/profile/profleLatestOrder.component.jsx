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
                  const response = await getLatestOrder(userData._id, token);
                  if (response.status === 'success') {
                      setUserOrder({ order: response.order, products: response.products });
                  } else if (response.status === 'no-orders') {
                      setUserOrder(null); 
                  }
              } catch (err) {
                  console.log("error in loading the orders", err);
              }
              setIsLoading(false); 
          };
          fetchUserOrders();
      }
  }, [token, userData?._id]);
  
  
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP' }).format(price);
    };
    
    function formatDate(dateString) {
        const date = new Date(dateString);
    
        function getDaySuffix(day) {
          if (day > 3 && day < 21) return 'th';
          switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
          }
        }
      

        const formatter = new Intl.DateTimeFormat('en-US', {
          weekday: 'long', 
          month: 'short',  
          year: 'numeric'  
        });
      
        const parts = formatter.formatToParts(date);
        const weekday = parts.find(part => part.type === 'weekday').value;
        const month = parts.find(part => part.type === 'month').value;
        const year = parts.find(part => part.type === 'year').value;
        const day = date.getDate();
    
   
        return `${weekday}, ${month} ${day}${getDaySuffix(day)}, ${year}`;
      }
      
 
    if (isLoading) {
        return <div>Loading...</div>; 
    }
    

    return (
        <div className='profile-page-container'>
          <div className='profile-sidebar'>
            <SideListComponent />
          </div>
          {userOrder? (
            <div className='latest-order'>
                <div className='header'>  
                    <h4>Vanshopfy</h4>
                    <h6>YOUR ORDER'S ON ITS WAY</h6>
                    <p>Order number: {userOrder.order?.orderNumber}</p>
                </div>
                <p>Hi {userOrder.order?.name} ,</p> 
                <p>Your items from your order {userOrder.order?.orderNumber} will be delivered by DHL Express on {formatDate(userOrder.order?.orderDate)} </p> 
                <p>Here’s what will arrive:</p>
                {userOrder.products?.map((product, productIndex) => (
                    <div className="my-bag-products-profile" key={productIndex}>
                        <Table striped bordered hover className='table-body-profile'>
                    <tbody className="table-body">
                        <tr>
                            <td className="table-body-product"> 
                                <img className="myImage" src={product?.productPicture ? product?.productPicture : 'default-picture-url'} alt={product.productName} />
                                <div className="table-body-product-text">
                                    <h1>{product.productName}</h1>
                                    <p>{product.productCategory}</p>
                                    <p>{product.productGender}</p>
                                </div>     
                            </td>
                            <td className="table-body-profile-price">Price: {formatPrice(parseFloat(product.productPrice.$numberDecimal))}</td>
                        </tr>
                    </tbody>
                    </Table>
                    </div>
                ))}
                <p>Thanks again for shopping with us.</p>
                <p>Subtotal: {formatPrice(userOrder.order?.totalAmount)}</p>
                <div className='footer'>
                <h6>Your delivery information</h6>
                <p>{userOrder.order?.name} </p>
                <p>{userOrder.order?.address} {userOrder.order?.city} </p>
                <p>{userOrder.order?.zip} {userOrder.order?.country}</p>
                </div>
   
            </div>
    
          ) : (
            <div className='no-order-message'>
            
            </div>
          )}
        </div>
      );
}

export default ProfileLatestOrder;


          