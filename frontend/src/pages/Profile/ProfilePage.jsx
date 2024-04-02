import HeaderComponent from '../../components/header/header.component';
import FooterComponent from '../../components/footer/footer.component';
import { Container } from "react-bootstrap";

export const ProfilePage = () => {
  return (
      <Container fluid>
        <HeaderComponent />
        <FooterComponent />      
      </Container>
  )
}