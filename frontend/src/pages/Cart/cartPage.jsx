import CartComponent from "../../components/cart/cart.component"
import HeaderComponent from '../../components/header/header.component';
import Container from 'react-bootstrap/Container';
import FooterComponent from '../../components/footer/footer.component';

export const CartPage = () => {
    return (
        <>
        <Container>
            <HeaderComponent />
            <CartComponent />
            <h1>CART</h1>
            <FooterComponent />
        </Container>
        </>
    )
}