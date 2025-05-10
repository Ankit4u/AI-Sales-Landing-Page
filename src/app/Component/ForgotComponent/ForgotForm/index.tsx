'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const ForgotForm = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Reset password form submitted');
    // Example: router.push('/success');
  };

  return (
    <section className="register-one">
      <div className="auto-container">
        <div className="inner-container">
          <h3>Reset password</h3>
          <div className="text">Your email address will not be published.</div>

          <div className="register-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email*</label>
                <input type="email" name="email" placeholder="" required />
              </div>

              <div className="form-group">
                <button type="submit" className="btn-style-one submit-btn template-btn">
                  <span className="btn-wrap">
                    <span className="text-one">Submit now</span>
                    <span className="text-two">Submit now</span>
                  </span>
                </button>
              </div>

              <div className="form-group">
                <div className="creat-account">
                  Back to <a href="/login">login</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotForm;
