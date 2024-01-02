import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
        <div className="my-modal">
            <form className="BOXXX my-bottom-50 down-4 off-4">
                <div className="login-text">CREATE YOUR ACCOUNT</div>
                <label>
                    <input className="inputemail down-2"
                     type="text"
                     placeholder="First Name"
                    />
                </label>
                <br/>
                <label>
                    <input className="inputemail inputtext down-3"
                     type="text"
                     placeholder="Middle Name"
                    />
                </label>
                <br/>
                <label>
                    <input className="inputemail down-3"
                     type="text"
                     placeholder="Last Name"
                    />
                </label>
                <br/>
                <label>
                    <input className="inputemail down-3"
                     type="text"
                     placeholder="Email Address"
                    />
                </label>
                <br/>
                <label>
                    <input className="inputemail down-3"
                     type="tel"
                     placeholder="Phone Number"
                    />
                </label>
                <br/>
                <label className="password-input">
                    <input className="inputemail down-3"
                     type={showPassword ? "text" : "password"}
                     placeholder="Password"
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEye : faEyeSlash}
                      className="eye-icon"
                      onClick={togglePasswordVisibility}
                    />
                </label>
                <br/>
                <button className="button down-3 centerr" type="button">
                    Create My Account
                </button>
            </form>
        </div>
        </>
    )
}

export default Signup;
