import HeaderComponent from '../../components/header/header.component';
import FooterComponent from '../../components/footer/footer.component';
import ContactComponent from '../../components/contact/contact.component';
import Container from 'react-bootstrap/Container';
import "./ContactPageStyle.css"


export const ContactPage = () => {
    return (
      
            <Container >
                <HeaderComponent />
                <ContactComponent />
                <FooterComponent />
            </Container>
 
    );
}

