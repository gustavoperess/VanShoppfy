import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { useEffect, useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import "./headerStyle.css";
import Logo from "/VanShoppFYLogo.svg";
import ShoppingCartLogo from "/shoppingbag.svg";
import { useUser } from "../../contexts/UserContext";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("");
  const location = useLocation();
  const { cartCount } = useCart();
  const { userData, refreshUserData } = useUser();

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

const logout = () => {
  if (userData) {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("userid");
      navigate("/");
      window.location.reload()
  } else {
      navigate("/");
  }
};



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
                {userData && <div className="UserInPlace">
                  {userData.name}
                </div>}
                {userData ? <div onClick={logout} className="signOut">Sign Out</div>
                : <Link to="/signup" className={`nav-link ${activeCategory === 'Sign in' ? 'active' : ''}`} >Sign in</Link>}
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
