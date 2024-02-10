import { Link } from 'react-router-dom';


export const HomePage = () => {
  return (
    <div className="container my-5"> 
      <h1 className="text-center mb-4">Welcome to vanShoppFY</h1>
      <div className="d-grid gap-2">
        <Link to="/signup" className="btn btn-sign-up">Sign Up</Link> 
        <Link to="/login" className="btn btn-primary me-2">Log In</Link>      
      </div>
    </div>
  );
};