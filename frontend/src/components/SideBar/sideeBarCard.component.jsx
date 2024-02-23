import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useCart } from '../../contexts/CartContext';

function SidebarComponent() {
  const [show, setShow] = useState(false);
  const { cartItems, cartCount } = useCart();
  const [prevCartCount, setPrevCartCount] = useState(cartCount);
  const handleClose = () => setShow(false);

  useEffect(() =>{
    if (cartCount > prevCartCount) {
      setShow(true)
    }
    setPrevCartCount(cartCount);
  }, [cartItems, prevCartCount])
  
  return (
       <> 
      <Offcanvas placement='end' show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Item(s) {cartCount}</Offcanvas.Title>
        </Offcanvas.Header>
        {cartItems.map((item, index) => 
        <Offcanvas.Body key={index} >
              {item.productName}
              {item.productGender}
        </Offcanvas.Body>
              )}
      </Offcanvas>
    </>
  );
}







export default SidebarComponent;