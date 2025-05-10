'use client';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';  // Import the eye icons

const LoginSection = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <section className="register-one">
      <div className="auto-container">
        <div className="inner-container">
          <h3>Login</h3>
          <div className="text">Your email address will not be published.</div>

          <div className="register-form">
            <form method="post" action="contact.html">
              <div className="form-group">
                <label>Name*</label>
                <input type="text" name="name" placeholder="" required />
              </div>

              <div className="form-group position-relative">
                <label>Password*</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder=""
                  required
                />
                <span
                  className="icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle between the icons */}
                </span>
              </div>

              <div className="form-group">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <div className="check-box">
                    <input type="checkbox" name="remember-password" id="type-1" />
                    <label htmlFor="type-1">Remember Me</label>
                  </div>
                  <a className="forgot-psw" href="/forgot">Forget Password?</a>
                </div>
              </div>

              <div className="form-group">
                <button type="submit" className="submit-btn btn-style-one">
                  <span className="btn-wrap">
                    <span className="text-one">login now</span>
                    <span className="text-two">login now</span>
                  </span>
                </button>
              </div>

              <div className="form-group">
                <div className="creat-account">
                  Don't have an account? <a href="/register">Create a free account</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
