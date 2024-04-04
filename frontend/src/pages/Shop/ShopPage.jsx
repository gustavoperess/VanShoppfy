import HeaderComponent from '../../components/header/header.component';
import SingleBannerComponent from '../../components/banner/singleBanner.component';
import ShopPageComponent from '../../components/shoppagecard/shopagecard.component';
import ContactUs from '../../components/contact/contactus.component';
import Container from 'react-bootstrap/Container';
import FooterComponent from '../../components/footer/footer.component';
import RightsideBarComponent from '../../components/rightsidebar/rightSideBar.component';

import "./ShopPageStyle.css"


export const MyShopPage = () => {
    return (
        <div className='shopPage'>
        <Container fluid>
            <HeaderComponent />
            <SingleBannerComponent />
            <RightsideBarComponent />
            <ShopPageComponent />
            <ContactUs />
            <FooterComponent />
        </Container>
        </div>
    );
};
