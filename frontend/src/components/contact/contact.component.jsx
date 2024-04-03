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
            <p>  Software engineer eager to continue my journey and apply what I’ve learned so far to a team dynamic, 
            working towards challenging projects. I moved to London, UK from Vancouver, Canada in 2023 and am a recent graduate
            from Makers Academy. In my 4 years of professional experience in the finance industry, I have proven my ability to 
            problem solve and communicate effectively with internal team members and external customers. I have always been interested in the 
            tech industry as it is continuously evolving, which provides me with new challenges and allows me to continuously learn. 
            I am a quick learner and have a unique blend of technical expertise and interpersonal 
            skills which will allow me to make a positive impact and succeed in a software development role.</p>
            </div>
            <div className='contact-info'>
              <p>Email: <span className="contact-detail">gustaoluisperesmoreira@gmail.com</span></p>
              <p>Linkedin: <Link to="https://www.linkedin.com/in/gustavo-moreira-25bb56144/" target="_blank" rel="noopener noreferrer" className="contact-detail">Linkedin profile</Link></p>
              <p>Github:  <Link to="https://github.com/gustavoperess" target="_blank" rel="noopener noreferrer" className="contact-detail">Github profile</Link></p>
            </div>
            <Link to="#" className="btn btn-dark">Contact Us</Link>      
          </Card.Body>
          <hr></hr>
        </Card>
      </div>

  );
}

export default ContactComponent;