import { useState } from "react";
import { signup } from "../../services/authentication";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const isValidPassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  return (
    password.length >= minLength && hasUpperCase && hasNumber && hasSpecialChar
  );
};

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = {};
  
    // Validate password
    if (!isValidPassword(password)) {
      errors.password = "Password must be at least 8 characters long with 1 uppercase, 1 number, and 1 special character.";
    }
  

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
  
    try {
      await signup(formData);
      navigate("/login");
    } catch (err) {
      setFormErrors({ ...formErrors, submission: err.message });
    }
  };
  

  const handleEmailChange = (event) => {
    const newValue = event.target.value;
    setEmail(newValue);
    setFormErrors({ ...formErrors, email: "" }); // this clears the erros messsage once the user starts typing
  };

  const handlePasswordChange = (event) => {
    const newValue = event.target.value;
    setPassword(newValue);
    setFormErrors({ ...formErrors, password: "" }); // this clears the erros messsage once the user starts typing
  };

  return (
    <div className="container my-5"> 
     <h1 className="text-center mb-4">Welcome to vanShoppFY</h1>
     <div className="d-grid gap-2">
      {formErrors.submission && <div className="alert alert-danger">{formErrors.submission}</div>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          id="email"
          type="email"
          placeholder="Email Address"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="form-control"
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          role="submit-button"
          id="submit"
          type="submit"
          className="btn btn-primary me-2"
        >
          Sign Up
        </button>
        <Link to="/login" className="btn btn-primary me-2">Log In</Link>      
      </form>
      </div>
    </div>
  );
};
