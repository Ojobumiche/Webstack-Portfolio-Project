import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      setLoggedIn(true);
    } else {
      alert('Please enter both username and password.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const goToSignup = () => {
    navigate('/signup'); // Navigate to the signup page
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <button className="button down-3 centerr" type="button" onClick={handleLogin}>
            Login to your account
          </button>
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
