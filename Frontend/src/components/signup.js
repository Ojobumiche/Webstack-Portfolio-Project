import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegistration = () => {
    // Your backend API endpoint
    const apiUrl = "http://localhost:8080/backend/api/signup.php";

    // Request payload
    const requestData = {
      fname: firstName,
      lname: lastName,
      email: email,
      pass: password,
    };

    // Make a POST request using Axios
    axios
      .post(apiUrl, requestData)
      .then((response) => {
        // Handle the registration response
        if (response.data.success) {
          setSuccessMessage(response.data.status);
          setError(null);
        } else {
          setError(response.data.status);
          setSuccessMessage(null);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("An error occurred during registration.");
        setSuccessMessage(null);
      });
  };

  return (
    <>
      <div className="my-modal">
        <form className="BOXXX my-bottom-50 down-4 off-4">
          <div className="login-text">CREATE YOUR ACCOUNT</div>
          <label>
            <input
              className="inputemail down-2"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              className="inputemail down-3"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              className="inputemail down-3"
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label className="password-input">
            <input
              className="inputemail down-3"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="eye-icon"
              onClick={togglePasswordVisibility}
            />
          </label>
          <br />
          <button
            className="button down-3 centerr"
            type="button"
            onClick={handleRegistration}
          >
            Create My Account
          </button>
          {error && <div className="error-message">{error}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
        </form>
      </div>
    </>
  );
};

export default Signup;
