import HeaderComponent from '../../components/header/header.component';
import LoginCompononent from '../../components/login/login.component';
import FooterComponent from '../../components/footer/footer.component';
import { Container } from "react-bootstrap";

export const LoginPage = () => {
  return (
      <Container fluid>
        <HeaderComponent />
        <LoginCompononent />
        <FooterComponent />      
      </Container>
  )
}