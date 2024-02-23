import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link  } from "react-router-dom"; // Import Link
import { useCart } from '../../contexts/CartContext';
import "./sideBarStyle.css"

const options = [
  {
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false,
  },
];

function SidebarComponent() {
  const [show, setShow] = useState(false);
  const { cartItems, cartCount, totalAmount } = useCart();
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



  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP' }).format(price);
  };


  return (
    <>
        {options.map((props, idx) => (
          <div className='canvasContainer'>
            <Offcanvas placement='end' show={show} key={idx} {...props} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart Item(s) {cartCount}</Offcanvas.Title>
              </Offcanvas.Header>
              <div className="items-container"> {/* New scrollable container for items */}
                {cartItems.map((item, index) => (
                  <div className="offcanvas-body-item" key={item.id || index}>
                    <img className="myImage" src={item?.productPicture ? item?.productPicture : 'default-picture-url'} alt={item.productName} />
                    <div className="content">
                      <h1>{item.productName}</h1>
                      <p>{item.quantity} x {formatPrice(item.productPrice)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='total-amount'>
                  <p> Total Amount {formatPrice(totalAmount)}</p>
                  <Button variant="primary" className='total-amount-button' size="lg">   
                        <Link to="/cart" style={{ all: 'unset' }}>GO TO CHECKOUT</Link>
                  </Button>
              </div>
            </Offcanvas>
          </div>
        ))}
    </>
  );
}


export default SidebarComponent;
