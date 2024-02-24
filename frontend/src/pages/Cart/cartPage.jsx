import CartComponent from "../../components/cart/cart.component"
import HeaderComponent from '../../components/header/header.component';
import Container from 'react-bootstrap/Container';
import FooterComponent from '../../components/footer/footer.component';
import CheckOutBannerComponent from "../../components/banner/checkOutBanner.component";

export const CartPage = () => {
    return (
        <>
        <Container fluid>
            <HeaderComponent />
            <CheckOutBannerComponent />
            <CartComponent />
            <FooterComponent />
        </Container>
        </>
    )
}