'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef } from 'react';

const NewsSection = () => {
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const resizeCards = () => {
      const cards = document.querySelectorAll('.news-block_one-inner');
      let maxHeight = 0;
      cards.forEach((card) => {
        (card as HTMLElement).style.height = 'auto'; // Reset
        const height = (card as HTMLElement).offsetHeight;
        if (height > maxHeight) maxHeight = height;
      });
      cards.forEach((card) => {
        (card as HTMLElement).style.height = `${maxHeight}px`;
      });
    };

    resizeCards();
    window.addEventListener('resize', resizeCards);
    return () => window.removeEventListener('resize', resizeCards);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div className="three-item_carousel-pagination">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: () => <button type="button" className="dot"></button>,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="news-one">
      <div
        className="news-one_shadow"
        style={{
          backgroundImage: "url(assets/images/background/news-shadow-1.png)",
        }}
      ></div>
      <div
        className="news-one_shadow-two"
        style={{
          backgroundImage: "url(assets/images/background/news-shadow-2.png)",
        }}
      ></div>
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title title-anim centered">
          <div className="sec-title_title">our blog</div>
          <h2 className="sec-title_heading">
            Read our latest <span>blogs</span>
          </h2>
        </div>

        <Slider {...settings} ref={sliderRef}>
          {/* Slide 1 */}
          <div className="news-block_one">
            <div className="news-block_one-inner">
              <div className="news-block_one-image">
                <a href="/blogdetail">
                  <img src="assets/images/resource/news-1.jpg" alt="" />
                </a>
              </div>
              <div className="news-block_one-content">
                <h5 className="news-block_one-title">
                  <a href="/blogdetail">
                    Transforming industries and shaping the future
                  </a>
                </h5>
                <div className="news-block_one-text">
                  Lorem ipsum dolor sit amet consectetur adipiscing vitae
                  mattis tellus. Nullam quis mattis ligula consectetur.
                </div>
                <div className="news-block_one-button">
                  <a href="/blogdetail" className="template-btn btn-style-two">
                    <span className="btn-wrap">
                      <span className="text-one">Read more</span>
                      <span className="text-two">Read more</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Duplicate Slide 2 */}
          <div className="news-block_one">
            <div className="news-block_one-inner">
              <div className="news-block_one-image">
                <a href="/blogdetail">
                  <img src="assets/images/resource/news-2.jpg" alt="" />
                </a>
              </div>
              <div className="news-block_one-content">
                <h5 className="news-block_one-title">
                  <a href="/blogdetail">
                    AI Innovations in Modern Healthcare
                  </a>
                </h5>
                <div className="news-block_one-text">
                  Exploring how artificial intelligence is revolutionizing the
                  health sector with new technologies and faster diagnoses.
                </div>
                <div className="news-block_one-button">
                  <a href="/blogdetail" className="template-btn btn-style-two">
                    <span className="btn-wrap">
                      <span className="text-one">Read more</span>
                      <span className="text-two">Read more</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Duplicate Slide 3 */}
          <div className="news-block_one">
            <div className="news-block_one-inner">
              <div className="news-block_one-image">
                <a href="/blogdetail">
                  <img src="assets/images/resource/news-3.jpg" alt="" />
                </a>
              </div>
              <div className="news-block_one-content">
                <h5 className="news-block_one-title">
                  <a href="/blogdetail">
                    The Rise of Green Tech Startups in 2025
                  </a>
                </h5>
                <div className="news-block_one-text">
                  Discover how green startups are taking over industries and
                  reshaping eco-friendly living and sustainability.
                </div>
                <div className="news-block_one-button">
                  <a href="/blogdetail" className="template-btn btn-style-two">
                    <span className="btn-wrap">
                      <span className="text-one">Read more</span>
                      <span className="text-two">Read more</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default NewsSection;
