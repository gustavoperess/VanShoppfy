import HeaderComponent from '../../components/header/header.component';
import FooterComponent from '../../components/footer/footer.component';
import CheckOutBannerComponent from "../../components/banner/checkOutBanner.component";
import ProfileUserDetails from '../../components/profile/profileUserDetails.component';
import { Container } from "react-bootstrap";

export const ProfileUsersInfo = () => {
  return (
      <Container fluid>
        <HeaderComponent />
        <CheckOutBannerComponent />
        <ProfileUserDetails />
        <FooterComponent />      
      </Container>
  )
}