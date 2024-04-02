import HeaderComponent from '../../components/header/header.component';
import FooterComponent from '../../components/footer/footer.component';
import ProfileLatestOrder from '../../components/profile/profleLatestOrder.component';
import CheckOutBannerComponent from "../../components/banner/checkOutBanner.component";
import { Container } from "react-bootstrap";

export const ProfileLatestOrderPage = () => {
  return (
      <Container fluid>
        <HeaderComponent />
        <CheckOutBannerComponent />
        <ProfileLatestOrder />
        <FooterComponent />      
      </Container>
  )
}