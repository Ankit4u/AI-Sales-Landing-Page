'use client';

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your submission logic here
  };

  return (
    <section className="register-one">
      <div className="auto-container">
        <div className="inner-container">
          <h3>Registration</h3>
          <div className="text">Your email address will not be published.</div>

          <div className="register-form">
            <form method="post" action="contact.html" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name*</label>
                <input type="text" name="name" required />
              </div>

              <div className="form-group">
                <label>Email*</label>
                <input type="text" name="email" required />
              </div>

              <div className="form-group" style={{ position: 'relative' }}>
                <label>Password*</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '38px',
                    cursor: 'pointer',
                    color: '#888',
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="form-group">
                <button type="submit" className="btn-style-one submit-btn template-btn">
                  <span className="btn-wrap">
                    <span className="text-one">Join now</span>
                    <span className="text-two">Join now</span>
                  </span>
                </button>
              </div>

              <div className="form-group">
                <div className="creat-account">
                  Already have a account? <a href="/login">Login Now</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
