// components/ContactInfo.js
import React from 'react';

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="auto-container">
        <div className="row clearfix">

          {/* Info Block One */}
          <div className="info-block_one col-lg-4 col-md-6 col-sm-12">
            <div className="info-block_one-inner">
              <div className="info-block_one-icon">
                <i className="icon-phone"></i>
              </div>
              <h4>Call us on</h4>
              <a href="tel:+415-864-8728">+415-864-8728</a> <br />
              <a href="tel:+415-864-8729">+415-864-8729</a>
            </div>
          </div>

          {/* Info Block One */}
          <div className="info-block_one active col-lg-4 col-md-6 col-sm-12">
            <div className="info-block_one-inner">
              <div className="info-block_one-icon">
                <i className="icon-envelope"></i>
              </div>
              <h4>Email us</h4>
              <a href="mailto:support@braine.com">support@braine.com</a> <br />
              <a href="mailto:contact@braine.com">contact@braine.com</a>
            </div>
          </div>

          {/* Info Block One */}
          <div className="info-block_one col-lg-4 col-md-6 col-sm-12">
            <div className="info-block_one-inner">
              <div className="info-block_one-icon">
                <i className="icon-map"></i>
              </div>
              <h4>Our location</h4>
              <div className="text">1426 Center StreetBend, OR <br /> 97702, California, USA</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
