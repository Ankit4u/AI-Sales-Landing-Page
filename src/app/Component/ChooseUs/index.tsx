'use client';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this is globally available

const ChooseSection = () => {
  return (
    <section className="choose-one">
      <div className="auto-container">
        <div className="inner-container">
          {/* Section Title */}
          <div className="sec-title light centered">
            <div className="sec-title_title">Why Choose us</div>
            <h2 className="sec-title_heading">
              Our Custom Solution?
            </h2>
          </div>

          <div className="row clearfix">
            {/* Counter Block 1 */}
            <div className="counter-block_one col-lg-4 col-md-6 col-sm-12">
              <div
                className="counter-block_one-inner wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="counter-block_one-icon">
                  <i className="fa-brands fa-instagram fa-sm" />
                </div>
                <div className="counter-block_one-count">
                  <span className="odometer" data-count="8000">Tailored to Your Business</span>
                </div>
                <div className="counter-block_one-text">
                  We understand that every business is unique. Our team collaborates closely with you to design and deploy a chatbot solution that aligns perfectly with your sales processes and objectives.
                </div>
              </div>
            </div>

            {/* Counter Block 2 */}
            <div className="counter-block_one col-lg-4 col-md-6 col-sm-12">
              <div
                className="counter-block_one-inner wow fadeInLeft"
                data-wow-delay="150ms"
                data-wow-duration="1500ms"
              >
                <div className="counter-block_one-icon">
                  <i className="fa-brands fa-instagram fa-sm" />
                </div>
                <div className="counter-block_one-count">
                  <span className="odometer" data-count="500000">Seamless Integration:</span>
                </div>
                <div className="counter-block_one-text">
                  Our solutions integrate effortlessly with your existing CRM systems, communication platforms, and marketing tools, ensuring a smooth transition and unified workflow.
                </div>
              </div>
            </div>

            {/* Counter Block 3 */}
            <div className="counter-block_one col-lg-4 col-md-6 col-sm-12">
              <div
                className="counter-block_one-inner wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="counter-block_one-icon">
                  <i className="fa-brands fa-instagram fa-sm" />
                </div>
                <div className="counter-block_one-count">
                  <span className="odometer" data-count="200000">Expert Deployment & Support</span>
                </div>
                <div className="counter-block_one-text">
                  From initial consultation to post-deployment support, our experts are with you every step of the way, ensuring optimal performance and continuous improvement.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSection;
