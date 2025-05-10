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
            <div className="sec-title_title">why chose us</div>
            <h2 className="sec-title_heading">
              Reason to chose our <br /> <span>platform</span>
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
                  <span className="odometer" data-count="8000">8000</span><i>+</i>
                </div>
                <div className="counter-block_one-text">
                  More than 8,000 customers have experimented with Kafkai
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
                  <span className="odometer" data-count="500000">500,000</span><i>+</i>
                </div>
                <div className="counter-block_one-text">
                  More than 8,000 customers have experimented with Kafkai
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
                  <span className="odometer" data-count="200000">200,000</span><i>+</i>
                </div>
                <div className="counter-block_one-text">
                  More than 8,000 customers have experimented with Kafkai
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
