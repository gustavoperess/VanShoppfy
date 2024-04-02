import HeaderComponent from '../../components/header/header.component';
import FooterComponent from '../../components/footer/footer.component';
import ProfileComponent from '../../components/profile/profile.component';
import CheckOutBannerComponent from "../../components/banner/checkOutBanner.component";
import { Container } from "react-bootstrap";

export const ProfilePage = () => {
  return (
      <Container fluid>
        <HeaderComponent />
        <CheckOutBannerComponent />
        <ProfileComponent />
        <FooterComponent />      
      </Container>
  )
}