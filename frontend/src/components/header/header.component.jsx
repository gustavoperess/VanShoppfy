import { Nav, Navbar } from "react-bootstrap";
import "./headerStyle.css";
import Logo from "../../../public/VanShoppFYLogo.svg";

const HeaderComponent = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
        <Navbar.Brand href="#home" className="Logo">
          <img
            src={Logo}
            width="100" // Set the width as needed
            height="50" // Set the height as needed
            className="d-inline-block align-top" // Add any classes as needed
            alt="VanShoppFY Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="/signup">Sign in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderComponent;
