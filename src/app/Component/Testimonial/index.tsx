// TestimonialSection.tsx

'use client';

import Slider from 'react-slick';
import Image from 'next/image';

// Import images
import author2 from '../../../../public/assets/images/resource/author-2.png';
import author3 from '../../../../public/assets/images/resource/author-3.png';
import author4 from '../../../../public/assets/images/resource/author-4.png';
import backgroundImage from '../../../../public/assets/images/background/testimonial-one_bg.png';

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-one">
      <div className="auto-container">
        <div
          className="inner-container"
          style={{ backgroundImage: `url(${backgroundImage.src})` }}
        >
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="sec-title_title">Testimonials</div>
            <h2 className="sec-title_heading">
              What our respectable <br /> <span>clients says</span>
            </h2>
          </div>

          <Slider {...settings} className="testimonial-carousel">
            {/* Slide 1 */}
            <div className="testimonial-block_one">
              <div className="testimonial-block_one-inner">
                <div className="testimonial-block_one-rating">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <div className="testimonial-block_one-text">
                  Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit{' '}
                  <span>Pellentesque sit amet</span> sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </div>
                <div className="testimonial-block_one-author_box">
                  <div className="testimonial-block_one-author-image">
                    <Image src={author2} alt="Author 2" />
                  </div>
                  Larry K. Lund <span>Social Media Manger</span>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="testimonial-block_one">
              <div className="testimonial-block_one-inner">
                <div className="testimonial-block_one-rating">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <div className="testimonial-block_one-text">
                  Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit{' '}
                  <span>Pellentesque sit amet</span> sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </div>
                <div className="testimonial-block_one-author_box">
                  <div className="testimonial-block_one-author-image">
                    <Image src={author3} alt="Author 3" />
                  </div>
                  Marian R. Vieira <span>Social Media Manger</span>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="testimonial-block_one">
              <div className="testimonial-block_one-inner">
                <div className="testimonial-block_one-rating">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <div className="testimonial-block_one-text">
                  Lorem ipsum amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit{' '}
                  <span>Pellentesque sit amet</span> sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </div>
                <div className="testimonial-block_one-author_box">
                  <div className="testimonial-block_one-author-image">
                    <Image src={author4} alt="Author 4" />
                  </div>
                  Bob E. Wiggins <span>Social Media Manger</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
