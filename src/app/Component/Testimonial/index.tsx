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
    autoplay: true,
    autoplaySpeed: 3000,
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
              Success Stories<br /> <span>Proven Impact</span>
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
                  After implementing the custom chatbot solution, our lead conversion rate increased by 35%, and our sales cycle shortened significantly.
                </div>
                <div className="testimonial-block_one-author_box">
                  <div className="testimonial-block_one-author-image">
                    <Image src={author2} alt="Author 2" />
                  </div>
                  Jane Doe<span>Sales Director at XYZ Corp </span>
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
                  “The personalized approach ensured the chatbot not only matched our brand voice but also exceeded customer expectations with seamless, engaging conversations.”
                </div>

                <div className="testimonial-block_one-author_box">
                  <div className="testimonial-block_one-author-image">
                    <Image src={author3} alt="Author 3" />
                  </div>
                  John Smith <span> Marketing Manager at ABC Ltd </span>
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
                  The integration process was smooth, and the support team was incredibly responsive. We've seen a notable boost in customer satisfaction since deploying the chatbot
                </div>
                <div className="testimonial-block_one-author_box">
                  <div className="testimonial-block_one-author-image">
                    <Image src={author4} alt="Author 4" />
                  </div>
                  Amit Verma<span>Customer Experience Lead at LMN Solutions</span>
                </div>
              </div>
            </div>
            {/* Slide 4 */}
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
                  Thanks to the AI-driven interactions, our support tickets dropped by nearly 40%, freeing up our team to focus on complex queries.
                </div>
                <div className="testimonial-block_one-author_box">
                  <div className="testimonial-block_one-author-image">
                    <Image src={author4} alt="Author 4" />
                  </div>
                  Ritika Sharma<span>Head of Customer Support at QRS Tech</span>
                </div>
              </div>
            </div>
            {/* Slide 5 */}
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
                  We were amazed by how quickly the chatbot adapted to our workflows. Within weeks, it became an integral part of our customer journey.
                </div>
                <div className="testimonial-block_one-author_box">
                  <div className="testimonial-block_one-author-image">
                    <Image src={author4} alt="Author 4" />
                  </div>
                  Manav Patel<span>Product Manager at DeltaSoft</span>
                </div>
              </div>
            </div>
            {/* Slide 6 */}
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
                  From onboarding to optimization, everything was seamless. The chatbot not only improved user engagement but also helped us gather valuable insights.
                </div>
                <div className="testimonial-block_one-author_box">
                  <div className="testimonial-block_one-author-image">
                    <Image src={author4} alt="Author 4" />
                  </div>
                  Neha Kapoor<span>Digital Strategy Lead at BrightEdge Solutions</span>
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
