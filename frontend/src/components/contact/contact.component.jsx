import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./contactStyle.css"

function ContactComponent() {
  return (
    <div className='contactComponent'>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Stay In Touched</Card.Title>
            <Card.Text>
                Have a question or want to work together
            </Card.Text>
            <div className='about-me'>
            <h6>A little about me :</h6>
            <p> I am a passionate Software Engineer with 4 years of experience in the finance industry,
               proficient in both backend and frontend development. Having recently completed an intensive software development bootcamp,
                I am now pursuing a Computer Science degree to further enhance my technical skills. I specialize in C#, .NET, and TypeScript 
              (React), and thrive on solving complex problems and continuously learning.</p>
            </div>
            <div className='contact-info'>
              <p>Email: <span className="contact-detail">gustavomoreirapython@gmail.com</span></p>
              <p>Linkedin: <Link to="https://www.linkedin.com/in/gustavo-moreira-25bb56144/" target="_blank" rel="noopener noreferrer" className="contact-detail">Linkedin profile</Link></p>
              <p>Github:  <Link to="https://github.com/gustavoperess" target="_blank" rel="noopener noreferrer" className="contact-detail">Github profile</Link></p>
            </div>
            <Link to="mailto:gustavomoreirapython@gmail.com" className="btn btn-dark">Contact Us</Link>      
          </Card.Body>
          <hr></hr>
        </Card>
      </div>
  );
}

export default ContactComponent;