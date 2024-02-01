import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import logotrain from "../images/Artboard 1.png";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegistration = () => {
    // backend API endpoint
    const apiUrl = "http://localhost:8080/backend/api/signup.py";

    // Request payload
    const requestData = {
      fname: firstName,
      lname: lastName,
      email: email,
      pass: password,
    };

    // POST request using Axios
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

  const goToLogin = () => {
    navigate("/login"); //navigate to the login page
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
                  <div className="text-center mb-3">CREATE YOUR ACCOUNT</div>
                  <div className="form-group">
                    <input
                     className="form-control"
                     type="text"
                     placeholder="First Name"
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)} 
                    />

                  </div>
                  <div className="form-group">
                    <input
                     className="form-control"
                     type="text"
                     placeholder="Last Name"
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value)} 
                    />

                  </div>
                  <div className="form-group">
                    <input
                     className="form-control"
                     type="text"
                     placeholder="Email Address"
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
                   className="form control btn btn-success"
                   type="button"
                   onClick={handleRegistration}
                  >
                    Create My Account
                  </button>
                  {error && <div className="text-danger">{error}</div>}
                  {successMessage && <div className="text-success">{successMessage}</div>}
                </form>

              </div>

            </div>

          </div>

        </div>
        <div className="text-center mt-3">
          Already have an account?
          <span onClick={goToLogin} className="text-success ml-1" style={{ cursor: "pointer" }}>
            Login
          </span>
        </div>
      </div>
    </>
  );
};

export default Signup;
