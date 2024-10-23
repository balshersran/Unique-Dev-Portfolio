import Header from "../components/Header";
import { useState } from "react";

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.message]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target;
    if (!name) {
        setErrorMessage('Name field cannot be blank');
    } else if (!email) {
        setErrorMessage('Email field cannot be blank');
    } else {
        setErrorMessage('Message field cannot be blank');
    }
  };

  return (
    <div className="formContainer">
    
      <h1>Contact</h1>
      <form onClick={handleChange}>
        <div className="labelContainer">
          <label>
            Name:
            <input
              placeholder="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="labelContainer">
          <label>
            Email:
            <input
              placeholder="email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="labelContainer">
          <label>
            Message:
            <textarea
              placeholder="message"
              type="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
