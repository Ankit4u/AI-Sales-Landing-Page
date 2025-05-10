'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SocialSection = () => {
  const leftToRightSettings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const rightToLeftSettings = {
    ...leftToRightSettings,
    rtl: true,
  };

  return (
    <section className="social-one">
      <div className="social-one_bg-shadow"></div>
      <div className="auto-container">
        <div className="sec-title centered">
          <div className="sec-title_title">Integrations</div>
          <h2 className="sec-title_heading">
            Incorporate our tool into <br /> <span>your everyday tasks</span>
          </h2>
        </div>

        <div className="social-one_logo">
          <span>
            <img src="/assets/images/icons/social-logo.png" alt="Logo" />
          </span>
        </div>

        <div className="inner-container">
          <div className="social-one_bg"></div>
          <div className="social-one_bg-two"></div>

          <div className="social-box_one">
            <Slider {...leftToRightSettings} className="animation_mode">
              {Array.from({ length: 7 }, (_, i) => (
                <div className="social_icon-box" key={`icon1-${i}`}>
                  <a href="#">
                    <img src={`/assets/images/icons/social-${i + 1}.png`} alt={`Icon ${i + 1}`} />
                  </a>
                </div>
              ))}
            </Slider>
          </div>

          <div className="social-box">
            <Slider {...rightToLeftSettings} className="animation_mode_two">
              {Array.from({ length: 7 }, (_, i) => (
                <div className="social_icon-box" key={`icon2-${i}`}>
                  <a href="#">
                    <img src={`/assets/images/icons/social-${i + 8}.png`} alt={`Icon ${i + 8}`} />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
