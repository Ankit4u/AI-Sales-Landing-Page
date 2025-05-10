import React from 'react';
import { FaHeart, FaEye, FaSearch, FaBullhorn } from 'react-icons/fa';

const ServicesTwo = () => {
  return (
    <div className="services-two">
      <div className="auto-container">
        {/* Section Title */}
        <div className="sec-title style-four centered">
          <div className="sec-title_title">Service benefit</div>
          <h2 className="sec-title_heading">
            <span>Benefit</span> of our services
          </h2>
        </div>
        <div className="row clearfix">

          {/* Service Block Four */}
          <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
            <div className="service-block_four-inner">
              <div className="service-block_four-icon">
                <FaHeart />
              </div>
              <h4 className="service-block_four-title">Engagement</h4>
              <div className="service-block_four-text">
                Design patent protects the unique visual aspects of your product, preventing.
              </div>
            </div>
          </div>

          {/* Service Block Four */}
          <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
            <div className="service-block_four-inner">
              <div className="service-block_four-icon">
                <FaEye />
              </div>
              <h4 className="service-block_four-title">Brand visibility</h4>
              <div className="service-block_four-text">
                Design patent protects the unique visual aspects of your product, preventing.
              </div>
            </div>
          </div>

          {/* Service Block Four */}
          <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
            <div className="service-block_four-inner">
              <div className="service-block_four-icon">
                <FaSearch />
              </div>
              <h4 className="service-block_four-title">SEO optimization</h4>
              <div className="service-block_four-text">
                Design patent protects the unique visual aspects of your product, preventing.
              </div>
            </div>
          </div>

          {/* Service Block Four */}
          <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
            <div className="service-block_four-inner">
              <div className="service-block_four-icon">
                <FaBullhorn />
              </div>
              <h4 className="service-block_four-title">Lead generation</h4>
              <div className="service-block_four-text">
                Design patent protects the unique visual aspects of your product, preventing.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ServicesTwo;
