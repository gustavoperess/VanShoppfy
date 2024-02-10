import { useState } from "react";
import { signup } from "../../services/authentication";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signup(formData);
      navigate("/login");
    } catch (err) {
      console.error("Error during signup:", err);
      navigate("/signup");
    }
  };

const handleEmailChange = (event) => {
    const newValue = event.target.value;
    setEmail(newValue);
  }

const handlePasswordChange = (event) => {
    const newValue = event.target.value;
    setPassword(newValue);
  }


  return (
    <div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input id="email" type="email" placeholder="Email Address" className="form-control" value={email} onChange={handleEmailChange} />
            <input id="password" type="password" placeholder="Password" className="form-control" value={password} onChange={handlePasswordChange} />
            <button role="submit-button" id="submit" type="submit" className="btn btn-sign-up">Sign Up</button>
        </form>
    </div>
  )

};