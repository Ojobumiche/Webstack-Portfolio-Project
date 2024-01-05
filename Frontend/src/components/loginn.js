import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import logotrain from "../images/Artboard 1.png";

const Loginn = () => {
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
        <div className="container-fluid">
          <div className="container mx-auto">
            <div className="col-md-5 col-lg-5 mx-auto text-center">
              <img className="mt-5 img-fluid" src={logotrain} alt="" style={{width: "150px", height: "60px"}}/>  
              <div className="bg-white mt-3 p-4" style={{ maxWidth: "500px" }}>
                <form>
                  <div className="text-center mb-3">LOGIN</div>  
                  <div className="form-group">
                    
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
            
                  </div>
                  <div className="form-group position-relative">
                      <input
                        className="form-control"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                      />
                      <span
                       className="mx-auto"
                       onClick={togglePasswordVisibility}
                       style={{marginTop: "-30px", position: "absolute", right: "15px"}}
                      >
                        {showPassword ? (
                            <FontAwesomeIcon icon={faEye} />
                        ) : (
                            <FontAwesomeIcon icon={faEyeSlash} />
                        )}
                      </span>
                  </div>
                  <button
                    className="form-control btn btn-success"
                    type="button"
                    onClick={handleLogin}
                  >
                    Login to your account
                  </button>
                  {error && <div className="text-danger mt-2">{error}</div>}
                  {successMessage && (
                    <div className="text-success mt-2">{successMessage}</div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
            New to BSP Train?{" "}
            <span onClick={goToSignup} className="text-success" style={{ cursor: "pointer" }}>
                Sign up
            </span>
       </div>

      </div>
    </>
  );
};

export default Loginn;
