'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically load react-slick only on client-side
const Slider = dynamic(() => import('react-slick'), { ssr: false });

import Client1 from '../../../../../public/assets/images/clients/1.png';
import Client2 from '../../../../../public/assets/images/clients/2.png';
import Client3 from '../../../../../public/assets/images/clients/3.png';
import Client4 from '../../../../../public/assets/images/clients/4.png';
import Client5 from '../../../../../public/assets/images/clients/5.png';
import Client6 from '../../../../../public/assets/images/clients/6.png';

const OrganizationSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // ensure slider is only rendered after mount
    setIsMounted(true);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500, // Smooth transition
    autoplay: true,
    autoplaySpeed: 500, // Time between slides
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const clientImages = [Client1, Client2, Client3, Client4, Client5, Client6];

  return (
    <section className="clients-one">
      <div className="auto-container">
        <div className="inner-container">
          {/* Sec Title */}
          <div className="sec-title style-two light centered">
            <div className="sec-title_title">Trusted organizations</div>
            <h2 className="sec-title_heading">
              <span>Trusted 3000+</span> businesses <br /> & online stores
            </h2>
          </div>
          <div className="clients-box_one">
            <div className="animation_mode">
              {isMounted && (
                <Slider {...settings}>
                  {clientImages.map((img, index) => (
                    <div className="clients-box" key={index}>
                      <a href="#">
                        <Image
                          src={img}
                          alt={`Client ${index + 1}`}
                          width={150}
                          height={80}
                          style={{ height: 'auto', objectFit: 'contain' }}
                        />
                      </a>
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;
