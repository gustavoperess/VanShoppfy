import { useEffect, useState } from 'react';
import {Accordion, Table, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUser } from "../../contexts/UserContext";
import { getUserOrders } from '../../services/userorder';
import "./profileStyle.css"

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
    
   

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP' }).format(price);
    };

   
    
 
    if (isLoading) {
        return <div>Loading...</div>; // Or some loading spinner
    }

    return (
        <div className='profile-page-container'>
            <div className='profile-sidebar'>
                <ListGroup>
                    <ListGroup.Item disabled>My Account</ListGroup.Item>
                    <ListGroup.Item>Order History</ListGroup.Item>
                    <ListGroup.Item>User Details</ListGroup.Item>
                </ListGroup>
            </div>
          <Accordion className='accordion-rightside'>
            {userOrder.orders?.map((order, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>
                    Order Number: {order.orderNumber}
                    Total Amount: {formatPrice(order.totalAmount)}
                </Accordion.Header>
                <Accordion.Body>
                  {userOrder.products?.filter(product => order.productsId.includes(product._id)).map((product, productIndex) => (
                      <div className="my-bag-products" key={productIndex}>
                         <Table striped bordered hover>
                         <thead>
                            <tr> 
                                <th>Product</th>
                                <th>Product Price</th>
                            </tr>
                        </thead>
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
                                {/* Use product's price directly */}
                                <td className="table-body-price">
                                  {formatPrice(parseFloat(product.productPrice.$numberDecimal))}
                                </td>
                            </tr>
                        </tbody>
                        </Table>
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
