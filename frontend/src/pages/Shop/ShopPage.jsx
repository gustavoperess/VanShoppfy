import HeaderComponent from '../../components/header/header.component';
import SingleBannerComponent from '../../components/banner/singleBanner.component';
import Container from 'react-bootstrap/Container';
import "./ShopPageStyle.css"

export const MyShopPage = () => {
    return (
        <>
        <Container fluid>
        <HeaderComponent />
        <SingleBannerComponent />
        <h1>Hello</h1>
        </Container>
        </>
    );
};
