import HeaderComponent from '../../components/header/header.component';
import SingleBannerComponent from '../../components/banner/singleBanner.component';
import ShopPageComponent from '../../components/ShoPageCard/shopagecard.component';
import ContactComponent from '../../components/contact/contact.component';
import Container from 'react-bootstrap/Container';
import FooterComponent from '../../components/footer/footer.component';
import "./ShopPageStyle.css"


export const MyShopPage = () => {
    return (
        <div className='shopPage'>
        <Container fluid>
            <HeaderComponent />
            <SingleBannerComponent />
            <ShopPageComponent />
            <ContactComponent />
            <FooterComponent />
        </Container>
        </div>
    );
};
