'use client';
import Image from 'next/image';
import React from 'react';

const StorySection = () => {
  return (
    <section className="story-one">
      <div className="auto-container">
        <div className="row clearfix">

          {/* Image Column */}
          <div className="story-one_image-column col-lg-6 col-md-12 col-sm-12">
            <div className="story-one_image-outer">
              <div className="story-one_image">
                <Image
                  src="/assets/images/resource/story.png"
                  alt=""
                  width={600}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="story-one_content-column col-lg-6 col-md-12 col-sm-12">
            <div className="story-one_content-outer">
              {/* Sec Title */}
              <div className="sec-title style-four">
                <div className="sec-title_title">Our story</div>
                <h2 className="sec-title_heading">
                  Navigating the frontier of our <span>intelligence</span>
                </h2>
              </div>
              <p>
                The narrative unfolds as we delve into the inception of our company, tracing the roots of our vision for a future intertwined with artificial intelligence. Through the lens of this captivating chronicle, readers will witness the trials and triumphs that have shaped. the story weaves together the intricate threads of innovation
              </p>
              <p>
                Through anecdotes and case studies, readers will witness the tangible difference our innovations make in fields ranging from healthcare and finance to education and beyond.
              </p>
              <div className="story-one_button">
                <a href="#" className="template-btn btn-style-one">
                  <span className="btn-wrap">
                    <span className="text-one">Know more</span>
                    <span className="text-two">Know more</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;
