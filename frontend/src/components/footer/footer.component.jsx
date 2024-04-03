import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
import "./footerStyle.css"
import { useUser } from "../../contexts/UserContext";

const FooterComponent = () => {
  const { userData, refreshUserData } = useUser();
  const navigate = useNavigate();

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
    <div className="footerComponent">
      <Navbar  className="custom-navbar">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              {userData && <Nav.Link href="/profile" className="userinPlace">{userData.name}</Nav.Link>}
                {userData ? <div onClick={logout} className="signOutFooter">Sign Out</div>
                : <Nav.Link href="/login"> Sign in</Nav.Link>}
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="https://github.com/gustavoperess" target="_blank" rel="noopener noreferrer">@github</Nav.Link>
            </Nav>    
      </Navbar>  
    </div>
  );
};

export default FooterComponent;
