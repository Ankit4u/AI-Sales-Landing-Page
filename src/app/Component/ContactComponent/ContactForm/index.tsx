'use client';

import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section className="team-detail_form">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Column */}
          <div className="column col-lg-6 col-md-12 col-sm-12">
            {/* Sec Title */}
            <div className="sec-title style-four">
              <div className="sec-title_title">Contact me</div>
              <h2 className="sec-title_heading">
                Connect with us for <span>assistance</span>
              </h2>
              <div className="sec-title_text">
                Lorem ipsum dolor sit amet consectetur adipiscing <br />
                elit Ut et massa Aliquam in hendrerit urna.
              </div>
            </div>

            {/* Social Box with React Icons */}
            <div className="contact-social_box">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column */}
          <div className="column col-lg-6 col-md-12 col-sm-12">
            <div className="default-form contact-form">
              <form onSubmit={handleSubmit} id="contact-form">
                <div className="row clearfix">
                  <div className="form-group col-lg-6 col-md-6 col-sm-6">
                    <input type="text" name="name" placeholder="Name" required />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-6">
                    <input type="email" name="email" placeholder="Email" required />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-6">
                    <input type="text" name="phone" placeholder="Phone" required />
                  </div>
                  <div className="form-group col-lg-6 col-md-6 col-sm-6">
                    <select name="country" className="custom-select-box" required>
                      <option>Select service</option>
                      <option>Service 01</option>
                      <option>Service 02</option>
                      <option>Service 03</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <textarea name="message" placeholder="Type comment here*" required></textarea>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" className="template-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Send now</span>
                        <span className="text-two">Send now</span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
