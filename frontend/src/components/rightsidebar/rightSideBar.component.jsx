import { useState, useEffect } from 'react';
import {Button , Offcanvas, CloseButton} from 'react-bootstrap';
import { Link  } from "react-router-dom"; // Import Link
import { useCart } from '../../contexts/CartContext';
import "./rightsideBarStyle.css"
import { deleteProductById } from '../../services/cart';


const options = [
  {
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false,
  },
];

function RightsideBarComponent() {
  const [show, setShow] = useState(false);
  const { cartItems, cartCount, totalAmount, removeFromCart } = useCart();
  const [prevCartCount, setPrevCartCount] = useState(cartCount);
  const handleClose = () => setShow(false);


  useEffect(() => {
    let isMounted = true;
    if (cartCount > prevCartCount) {
      setShow(true);
    }
    if (isMounted) {
      setPrevCartCount(cartCount);
    }
    return () => {
      isMounted = false;
    };

  
  }, [cartCount, prevCartCount]);

  

  const handleProductDelete = async (productId) => {
    try {
       await deleteProductById(productId)
       removeFromCart(productId);
    } catch (err) {
      console.log("Product Not deleted", err)
    }
  } 

  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP' }).format(price);
  };


  return (
    <>
        {options.map((props, idx) => (
          <div className='canvasContainer' key={idx} >
            <Offcanvas placement='end' show={show} {...props} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart Item(s) {cartCount}</Offcanvas.Title>
              </Offcanvas.Header>
              <div className="items-container"> 
                {cartItems.map((item, index) => (
                  <div className="offcanvas-body-item" key={item.id || index}>
                    <img className="myImage" src={item?.productPicture ? item?.productPicture : 'default-picture-url'} alt={item.productName} />
                    <div className="content">
                      <h1>{item.productName}</h1>
                      <p>{item.quantity} x {formatPrice(item.productPrice)}</p>
                    </div>
                    <CloseButton className="btn"  onClick={() => handleProductDelete(item._id)} />
                  </div>
                ))}
              </div>
              <div className='total-amount'>
                  <p> Total Amount {formatPrice(totalAmount)}</p>
                  <Button variant="primary" className='total-amount-button' size="lg">   
                        <Link to="/cart" style={{ all: 'unset' }}>GO TO YOUR BAG</Link>
                  </Button>
              </div>
            </Offcanvas>
          </div>
        ))}
    </>
  );
}


export default RightsideBarComponent;
