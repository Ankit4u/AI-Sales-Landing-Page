'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import react-slick to disable SSR for it
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="slider-one">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="slider-slide">
          <div className="slider-one_icon">
            <Image src="/assets/images/main-slider/icon-1.png" alt="Icon 1" width={100} height={100} />
          </div>
          <div className="slider-one_icon-two">
            <Image src="/assets/images/main-slider/icon-1.png" alt="Icon 2" width={100} height={100} />
          </div>
          <div className="slider-one_pattern">
            <Image src="/assets/images/main-slider/pattern-1.png" alt="Pattern 1" layout="fill" objectFit="cover" />
          </div>
          <div className="slider-one_pattern-two">
            <Image src="/assets/images/main-slider/pattern-2.png" alt="Pattern 2" layout="fill" objectFit="cover" />
          </div>
          <div className="slider-one_pattern-four">
            <Image src="/assets/images/main-slider/pattern-4.png" alt="Pattern 4" layout="fill" objectFit="cover" />
          </div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="slider-one_content col-lg-7 col-md-12 col-sm-12">
                <div className="slider-one_content-inner">
                  <div className="slider-one_title">
                    <i><img src="/assets/images/main-slider/hand.png" alt="Hand Icon" /></i> AI makes content fast & easy
                  </div>
                  <h1 className="slider-one_heading">Crafting digital brilliance <span>AI-Driven</span> copywriting</h1>
                  <div className="slider-one_text">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                  </div>
                  <div className="slider-one_button d-flex align-items-center flex-wrap">
                    <a href="about.html" className="template-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Get started free</span>
                        <span className="text-two">Get started free</span>
                      </span>
                    </a>
                    <div className="slider-one_video">
                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video play-box">
                        <span className="fa fa-play"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-one_image-column col-lg-5 col-md-12 col-sm-12">
                <div className="slider-one_pattern-three">
                  <Image src="/assets/images/main-slider/pattern-3.png" alt="Pattern 3" layout="fill" objectFit="cover" />
                </div>
                <div className="slider-one_image-outer">
                  <div className="slider-one_author">
                    <i><img src="/assets/images/main-slider/icon-2.png" alt="Icon 2" /></i>
                    <h5 className="slider-one_author-name">Sara Ven</h5>
                    <div className="slider-one_author-text">Social media manager</div>
                  </div>
                  <div className="slider-one_percentage">
                    <i className="fa-solid fa-arrow-up fa-fw"></i>
                    <div className="slider-one_percent">90<sub>%</sub></div>
                    <div className="slider-one_percentage-text">efficiency</div>
                  </div>
                  <div className="slider-one_graph">
                    <div className="slider-one_graph-title">
                      Annual goal <span>$98,541 <sup><i className="fa-solid fa-caret-up fa-fw"></i>110%</sup></span>
                    </div>
                    <Image src="/assets/images/main-slider/graph.png" alt="Graph" width={300} height={200} />
                  </div>
                  <div className="slider-one_image">
                    <Image src="/assets/images/main-slider/image-1.png" alt="Image 1" width={400} height={300} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slider-slide">
          <div className="slider-one_icon">
            <Image src="/assets/images/main-slider/icon-1.png" alt="Icon 1" width={100} height={100} />
          </div>
          <div className="slider-one_icon-two">
            <Image src="/assets/images/main-slider/icon-1.png" alt="Icon 2" width={100} height={100} />
          </div>
          <div className="slider-one_pattern">
            <Image src="/assets/images/main-slider/pattern-1.png" alt="Pattern 1" layout="fill" objectFit="cover" />
          </div>
          <div className="slider-one_pattern-two">
            <Image src="/assets/images/main-slider/pattern-2.png" alt="Pattern 2" layout="fill" objectFit="cover" />
          </div>
          <div className="slider-one_pattern-four">
            <Image src="/assets/images/main-slider/pattern-4.png" alt="Pattern 4" layout="fill" objectFit="cover" />
          </div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="slider-one_content col-lg-7 col-md-12 col-sm-12">
                <div className="slider-one_content-inner">
                  <div className="slider-one_title">
                    <i><img src="/assets/images/main-slider/hand.png" alt="Hand Icon" /></i> AI makes content fast & easy
                  </div>
                  <h1 className="slider-one_heading">Crafting digital brilliance <span>AI-Driven</span> copywriting</h1>
                  <div className="slider-one_text">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                  </div>
                  <div className="slider-one_button d-flex align-items-center flex-wrap">
                    <a href="about.html" className="template-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Get started free</span>
                        <span className="text-two">Get started free</span>
                      </span>
                    </a>
                    <div className="slider-one_video">
                      <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video play-box">
                        <span className="fa fa-play"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-one_image-column col-lg-5 col-md-12 col-sm-12">
                <div className="slider-one_pattern-three">
                  <Image src="/assets/images/main-slider/pattern-3.png" alt="Pattern 3" layout="fill" objectFit="cover" />
                </div>
                <div className="slider-one_image-outer">
                  <div className="slider-one_author">
                    <i><img src="/assets/images/main-slider/icon-2.png" alt="Icon 2" /></i>
                    <h5 className="slider-one_author-name">Sara Ven</h5>
                    <div className="slider-one_author-text">Social media manager</div>
                  </div>
                  <div className="slider-one_percentage">
                    <i className="fa-solid fa-arrow-up fa-fw"></i>
                    <div className="slider-one_percent">90<sub>%</sub></div>
                    <div className="slider-one_percentage-text">efficiency</div>
                  </div>
                  <div className="slider-one_graph">
                    <div className="slider-one_graph-title">
                      Annual goal <span>$98,541 <sup><i className="fa-solid fa-caret-up fa-fw"></i>110%</sup></span>
                    </div>
                    <Image src="/assets/images/main-slider/graph.png" alt="Graph" width={300} height={200} />
                  </div>
                  <div className="slider-one_image">
                    <Image src="/assets/images/main-slider/image-1.png" alt="Image 1" width={400} height={300} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="slider-slide">
          {/* Similar content as Slide 1 */}
        </div>
      </Slider>
    </section>
  );
};

export default SliderComponent;
