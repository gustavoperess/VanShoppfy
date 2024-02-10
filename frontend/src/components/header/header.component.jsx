import { Nav, Navbar, Container } from 'react-bootstrap';
import "./headerStyle.css"


const HeaderComponent = () => {
    return (
            <Navbar expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand href="#home">VanShoppFY</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Shop</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    <Nav.Link href="#link">Sign in</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
      );
    }



export default HeaderComponent