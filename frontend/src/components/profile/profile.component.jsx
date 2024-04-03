import { useEffect, useState } from 'react';
import {Accordion, Table, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUser } from "../../contexts/UserContext";
import { getUserOrders } from '../../services/userorder';
import { useLocation } from 'react-router-dom';
import SideListComponent from './sideList.component';
import "./profileStyle.css"

function ProfileComponent() {
    const { userData, refreshUserData } = useUser();
    const [activeCategory, setActiveCategory] = useState("");
    const token = window.localStorage.getItem("token")
    const [userOrder, setUserOrder] = useState({ orders: [], products: [] });
    const [isLoading, setIsLoading] = useState(true); 
    const location = useLocation();

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
    
   
  useEffect(() => {
    if ( location.pathname == "/profile") {
        setActiveCategory("Profile");
    } else if (location.pathname == "/profile/latestorder") {
        setActiveCategory("LatestOrder");
    } else if (location.pathname == "/profile/userdetails") {
        setActiveCategory("Details");
    }
},[location])

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP' }).format(price);
    };
 
    if (isLoading) {
        return <div>Loading...</div>; 
    }

    return (
        <div className='profile-page-container'>
            <div className='profile-sidebar'>
                <SideListComponent />
            </div>
          <Accordion className='accordion-rightside'>
            {userOrder.orders?.map((order, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header >
                    <p>Order Number: {order.orderNumber}</p>
                    <p>Total Amount: {formatPrice(order.totalAmount)}</p>
                </Accordion.Header>
                <Accordion.Body className='accordion-body'>
                  {userOrder.products?.filter(product => order.productsId.includes(product._id)).map((product, productIndex) => (
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
