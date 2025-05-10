'use client';

import React from 'react';
import Slider, { Settings } from 'react-slick';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const TestimonialAbout = () => {
  const settings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div className="three-item_carousel-pagination">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (_i: number) => (
      <div className="custom-dot" />
    ),
  };

  const testimonials = [
    {
      image: '/assets/images/resource/author-2.png',
      name: 'Larry K. Lund',
      position: 'Social Media Manager',
      text: 'Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.',
    },
    {
      image: '/assets/images/resource/author-3.png',
      name: 'Marian R. Vieira',
      position: 'Social Media Manager',
      text: 'Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.',
    },
    {
      image: '/assets/images/resource/author-4.png',
      name: 'Bob E. Wiggins',
      position: 'Social Media Manager',
      text: 'Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.',
    },
        {
      image: '/assets/images/resource/author-4.png',
      name: 'Bob E. Wiggins',
      position: 'Social Media Manager',
      text: 'Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit <span>Pellentesque sit amet</span> sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.',
    },
  ];

  return (
    <section className="testimonial-three">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title style-four centered">
          <div className="sec-title_title">Success Stories</div>
          <h2 className="sec-title_heading">
            Our clients share their <br /> fitness <span>journey</span>
          </h2>
        </div>

        <div className="three-item_carousel">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div className="swiper-slide" key={index}>
                <div className="testimonial-block_one">
                  <div className="testimonial-block_one-inner">
                    <div className="testimonial-block_one-rating">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="fa fa-star" />
                      ))}
                    </div>
                    <div
                      className="testimonial-block_one-text"
                      dangerouslySetInnerHTML={{ __html: testimonial.text }}
                    />
                    <div className="testimonial-block_one-author_box">
                      <div className="testimonial-block_one-author-image">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      {testimonial.name} <span>{testimonial.position}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAbout;
