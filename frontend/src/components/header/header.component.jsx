import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"; // Import Link
import "./headerStyle.css";
import Logo from "../../../public/VanShoppFYLogo.svg";
import ShoppingCartLogo from "../../../public/shoppingbag.svg";
import {useEffect, useState } from 'react';

const HeaderComponent = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const location = useLocation(); 

  useEffect(() => {
    if ( location.pathname == "/") {
        setActiveCategory("Home");
    } else if (location.pathname == "/shop") {
        setActiveCategory("Shop");
    } else if (location.pathname == "/contact") {
        setActiveCategory("Contact");
    } else if (location.pathname == "/signup") {
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
              <Navbar.Brand href="/cart" className="Logo">
                  <img
                    src={ShoppingCartLogo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="ShoppingCartLogo Logo"
                  />
                </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
