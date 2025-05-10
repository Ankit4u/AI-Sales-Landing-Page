"use client"; // If you're using Next.js 13+ with app router

import React from "react";
import Slider from "react-slick";

const ClientsSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="clients-two">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <div className="sec-title_title">Trusted Organizations</div>
        </div>
        <div className="clients_slider swiper-container">
          <Slider {...settings} className="swiper-wrapper">
            {/* Slide */}
            <div className="swiper-slide">
              <div className="client-image">
                <a href="#">
                  <img src="assets/images/clients/1.png" alt="" />
                </a>
              </div>
            </div>

            {/* Slide */}
            <div className="swiper-slide">
              <div className="client-image">
                <a href="#">
                  <img src="assets/images/clients/2.png" alt="" />
                </a>
              </div>
            </div>

            {/* Slide */}
            <div className="swiper-slide">
              <div className="client-image">
                <a href="#">
                  <img src="assets/images/clients/3.png" alt="" />
                </a>
              </div>
            </div>

            {/* Slide */}
            <div className="swiper-slide">
              <div className="client-image">
                <a href="#">
                  <img src="assets/images/clients/4.png" alt="" />
                </a>
              </div>
            </div>

            {/* Slide */}
            <div className="swiper-slide">
              <div className="client-image">
                <a href="#">
                  <img src="assets/images/clients/5.png" alt="" />
                </a>
              </div>
            </div>
            {/* Slide */}
            <div className="swiper-slide">
              <div className="client-image">
                <a href="#">
                  <img src="assets/images/clients/5.png" alt="" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
