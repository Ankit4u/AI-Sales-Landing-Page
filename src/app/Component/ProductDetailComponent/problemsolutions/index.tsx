'use client';

import { BsCheckCircleFill } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';

const SolutionSection = () => {
  return (
    <section className="solution-one">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title style-four">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="left-box">
              <div className="sec-title_title">problem & solutions</div>
              <h2 className="sec-title_heading">
                Unveiling <span>solutions</span> for common dilemmas in braine
              </h2>
            </div>
            <div className="right-box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla, mattis l consectetur, ultrices mauris. Maecenas vitae
                mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
              </p>
              <ul className="solution-one_list">
                <li><BsCheckCircleFill className="fa-fw" /> Sed tempor magna et risus ornare, a lobortis.</li>
                <li><BsCheckCircleFill className="fa-fw" /> Vivamus tempus urna sit amet ante imperdiet.</li>
                <li><BsCheckCircleFill className="fa-fw" /> Mauris sit amet eros ac tellus egestas placerat.</li>
                <li><BsCheckCircleFill className="fa-fw" /> Aliquam at leo pretium of consecteter.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Images Row */}
        <div className="row clearfix">
          <div className="column col-lg-6 col-md-6 col-sm-12">
            <div className="service-detail_image-two">
              <img src="assets/images/resource/service-detail-1.jpg" alt="Service Detail" />
            </div>
          </div>
          <div className="column col-lg-6 col-md-6 col-sm-12">
            <div className="service-detail_image-two">
              <a
                href="https://www.youtube.com/watch?v=kxPCFljwJws"
                className="lightbox-video service-detail_play"
              >
                <span className="fa-fw">
                  <FaPlay className="fa-fw" />
                  <i className="ripple"></i>
                </span>
              </a>
              <img src="assets/images/resource/service-detail-2.jpg" alt="Service Video" />
            </div>
          </div>
        </div>

        {/* Final Result Section */}
        <div className="sec-title style-four">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="left-box">
              <div className="sec-title_title">Final result</div>
              <h2 className="sec-title_heading">
                Excellence in our service <span>final results</span>
              </h2>
            </div>
            <div className="right-box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa Aliquam in hendrerit urna.
                Pellentesque sit amet sapien fringilla, mattis l consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              </p>
              <p>
                Pellentesque commodo lacus at sodales sodales. Quisque lorem sagittis orci ut diam condimentum, vel euismod
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
