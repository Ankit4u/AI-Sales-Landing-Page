'use client';

import React from 'react';

const CoreValuesSection = () => {
  return (
    <section className="value-one">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title style-four centered">
          <div className="sec-title_title">core value</div>
          <h2 className="sec-title_heading">
            Unveiling our <span>core values</span> <br /> for lasting impact.
          </h2>
        </div>

        <div className="row clearfix">
          {/* Value Block One */}
          <div className="value-block_one col-lg-4 col-md-6 col-sm-12">
            <div className="value-block_one-inner">
              <div className="value-block_one-icon">
                <i className="icon-users-4"></i>
              </div>
              <h5 className="value-block_one-title">People</h5>
              <div className="value-block_one-text">
                The impact of our AI solutions on the broader world forms a
                central theme, highlighting real-world applications and the
                positive changes
              </div>
            </div>
          </div>

          {/* Value Block One (active) */}
          <div className="value-block_one active col-lg-4 col-md-6 col-sm-12">
            <div className="value-block_one-inner">
              <div className="value-block_one-icon">
                <i className="icon-bulb1"></i>
              </div>
              <h5 className="value-block_one-title">Innovation</h5>
              <div className="value-block_one-text">
                The impact of our AI solutions on the broader world forms a
                central theme, highlighting real-world applications and the
                positive changes
              </div>
            </div>
          </div>

          {/* Value Block One */}
          <div className="value-block_one col-lg-4 col-md-6 col-sm-12">
            <div className="value-block_one-inner">
              <div className="value-block_one-icon">
                <i className="fa-solid fa-bullseye fa-fw"></i>
              </div>
              <h5 className="value-block_one-title">Mission</h5>
              <div className="value-block_one-text">
                The impact of our AI solutions on the broader world forms a
                central theme, highlighting real-world applications and the
                positive changes
              </div>
            </div>
          </div>
        </div>

        {/* Button Box */}
        <div className="value-one_button text-center">
          <a href="#" className="template-btn btn-style-two">
            <span className="btn-wrap">
              <span className="text-one">Join braine today</span>
              <span className="text-two">Join braine today</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
