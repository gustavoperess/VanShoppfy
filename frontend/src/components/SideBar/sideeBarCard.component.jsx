import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
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
  


  return (
    <> 
      {options.map((props, idx) => (
        <Offcanvas placement='end' show={show} key={idx} {...props} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart Item(s) {cartCount}</Offcanvas.Title>
          </Offcanvas.Header>
          {cartItems.map((item, index) => (
            <div className="offcanvas-body-item" key={item.id || index}>
              <img className="myImage" src={item?.productPicture ? item?.productPicture : 'default-picture-url'} alt={item.productName} />
              <div className="content">
                <h1>{item.productName}</h1>
                <h1>{item.quantity}</h1>
              </div>
            </div>
          ))}
          Total Amount<p>{totalAmount}</p>
        </Offcanvas>
      ))}
    </>
  );  
}


export default SidebarComponent;
