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
          <Link to="#" className="btn btn-dark">Contact Us</Link>      
        </Card.Body>
        <hr></hr>
      </Card>
    </div>
  );
}

export default ContactComponent;