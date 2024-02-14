import { Nav, Navbar } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <Navbar  className="custom-navbar">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/signup">Sign in</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="https://github.com/gustavoperess" target="_blank" rel="noopener noreferrer">@github</Nav.Link>
          </Nav>    
    </Navbar>
  );
};

export default FooterComponent;
