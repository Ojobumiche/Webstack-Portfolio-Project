import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(""); // Clear any previous errors
    setSuccessMessage(""); // Clear any previous success messages

    if (email && password) {
      try {
        const response = await axios.post(
          "http://localhost:8080/backend/api/login.php",
          {
            email: email,
            pass: password,
          }
        );

        if (response.data.success) {
          // Login successful
          // redirect to dashboard
          setSuccessMessage(response.data.status);

          setTimeout(() => {
            navigate("/wp-admin/dashboard");
          }, 2000);
        } else {
          // Login failed
          // handle the failed login scenario here
          setError(response.data.status);
        }
      } catch (error) {
        // Handle the error from the API request
        console.error("Error during login:", error);
        setError("An error occurred during login. Please try again.");
      }
    } else {
      setError("Please enter both email and password.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const goToSignup = () => {
    navigate("/signup"); // Navigate to the signup page
  };

  return (
    <>
      <div className="my-modal">
        <form className="BOXX my-bottom-50 down-4 off-4">
          <div className="login-text">LOGIN</div>
          <label>
            <input
              className="inputemail down-2"
              type="text"
              placeholder="Email address"
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
            onClick={handleLogin}
          >
            Login to your account
          </button>
          {error && <div className="error-message">{error}</div>}
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
        </form>
        <div className="center white down-1">
          New to BSP Train? <span onClick={goToSignup}>Sign up</span>
        </div>
        <div className="center white">Forgot your password</div>
      </div>
    </>
  );
};

export default Login;
