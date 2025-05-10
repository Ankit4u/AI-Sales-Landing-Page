'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamSection = () => {
  // Explicitly type sliderRef as a reference to a Slider component
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false, // disable default arrows
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev(); // TypeScript will now understand slickPrev exists
  };

  const goToNext = () => {
    sliderRef.current?.slickNext(); // TypeScript will now understand slickNext exists
  };

  return (
    <section className="team-one">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Title Column */}
          <div className="team-one_title-column col-lg-4 col-md-12 col-sm-12">
            <div className="team-one_title-outer">
              {/* Sec Title */}
              <div className="sec-title style-four">
                <div className="sec-title_title">Our team</div>
                <h2 className="sec-title_heading">
                  Team behind the <span>innovation</span>
                </h2>
                <div className="sec-title_text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa Aliquam hendrerit urna.
                  Maecenas vitae mattis tellus.
                </div>

                {/* Arrows Below Text */}
                <div className="team-one_arrows">
                  <div className="team_carousel-prev" onClick={goToPrev}>
                    <FaAngleLeft />
                  </div>
                  <div className="team_carousel-next" onClick={goToNext}>
                    <FaAngleRight />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Column */}
          <div className="team-one_team-column col-lg-8 col-md-12 col-sm-12">
            <div className="team-one_team-outer">
              <Slider {...settings} ref={sliderRef}>
                {/* Slide 1 */}
                <div className="swiper-slide">
                  <div className="team-block_one">
                    <div className="team-block_one-inner">
                      <div className="team-block_one-image">
                        <a href="team-detail.html">
                          <img src="/assets/images/resource/team-1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="team-block_one-content">
                        <h4 className="team-block_one-title">
                          <a href="team-detail.html">Elliot S. Acevedo</a>
                        </h4>
                        <div className="team-block_one-designation">Founder</div>
                        <div className="team-block_one-socials">
                          <a href="#"><FaFacebookF /></a>
                          <a href="#"><FaTwitter /></a>
                          <a href="#"><FaLinkedinIn /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="swiper-slide">
                  <div className="team-block_one">
                    <div className="team-block_one-inner">
                      <div className="team-block_one-image">
                        <a href="team-detail.html">
                          <img src="/assets/images/resource/team-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="team-block_one-content">
                        <h4 className="team-block_one-title">
                          <a href="team-detail.html">Jane D. Carter</a>
                        </h4>
                        <div className="team-block_one-designation">Co-Founder</div>
                        <div className="team-block_one-socials">
                          <a href="#"><FaFacebookF /></a>
                          <a href="#"><FaTwitter /></a>
                          <a href="#"><FaLinkedinIn /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                            <div className="swiper-slide">
                  <div className="team-block_one">
                    <div className="team-block_one-inner">
                      <div className="team-block_one-image">
                        <a href="team-detail.html">
                          <img src="/assets/images/resource/team-2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="team-block_one-content">
                        <h4 className="team-block_one-title">
                          <a href="team-detail.html">Jane D. Carter</a>
                        </h4>
                        <div className="team-block_one-designation">Co-Founder</div>
                        <div className="team-block_one-socials">
                          <a href="#"><FaFacebookF /></a>
                          <a href="#"><FaTwitter /></a>
                          <a href="#"><FaLinkedinIn /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more slides as needed */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
