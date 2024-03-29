import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; 
import { useEffect, useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import "./headerStyle.css";
import Logo from "/VanShoppFYLogo.svg";
import ShoppingCartLogo from "/shoppingbag.svg";
import { getUserInformationById } from "../../../../api/controllers/users";



const HeaderComponent = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const location = useLocation();
  const { cartCount } = useCart();

  useEffect(() => {
    if ( location.pathname == "/") {
        setActiveCategory("Home");
    } else if (location.pathname == "/shop") {
        setActiveCategory("Shop");
    } else if (location.pathname == "/contact") {
        setActiveCategory("Contact");
    } else if (location.pathname == "/signup" || location.pathname == '/login') {
      setActiveCategory("Sign in");
    }
},[location])



return (
    <div className="headerComponent">
      <Navbar expand="lg" className="custom-navbar">
          <Navbar.Brand href="/" className="Logo">
            <img
              src={Logo}
              width="100"
              height="50"
              className="d-inline-block align-top"
              alt="VanShoppFY Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className={`nav-link ${activeCategory === 'Home' ? 'active' : ''}`} >Home</Link>
              <Link to="/shop" className={`nav-link ${activeCategory === 'Shop' ? 'active' : ''}`} >Shop</Link>
              <Link to="/contact" className={`nav-link ${activeCategory === 'Contact' ? 'active' : ''}`} >Contact</Link>
              <Link to="/signup" className={`nav-link ${activeCategory === 'Sign in' ? 'active' : ''}`} >Sign in</Link>
              <div className="shopping-cart-icon">
              <Link to="/cart">
                <img src={ShoppingCartLogo} width="40" height="40" alt="ShoppingCartLogo" />
                <span className="cart-count">{cartCount}</span>
              </Link>
            </div>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
