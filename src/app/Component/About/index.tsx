'use client';

import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="about-one">
      <div
        className="about-one_pattern"
        style={{ backgroundImage: 'url(/assets/images/background/about-pattern.png)' }}
      ></div>
      <div
        className="about-one_icon"
        style={{ backgroundImage: 'url(/assets/images/icons/about-1.png)' }}
      ></div>
      <div
        className="about-one_icon-two"
        style={{ backgroundImage: 'url(/assets/images/icons/about-2.png)' }}
      ></div>

      <div className="auto-container">
        <div className="row clearfix">
          {/* Tab Column */}
          <div className="about-one_tab-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-one_tab-outer">
              <div
                className="about-one_tab-shadow"
                style={{ backgroundImage: 'url(/assets/images/background/tab-shadow.png)' }}
              ></div>
              <div className="about-one_tab-image">
                <Image
                  src="/assets/images/resource/tabs.png"
                  alt="Tabs"
                  width={600}
                  height={500}
                  layout="responsive"
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="about-one_content-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-one_content-outer">
              <div className="sec-title">
                <div className="sec-title_title">About us</div>
                <h2 className="sec-title_heading">
                  Crafting of your digital <span>narrative discover</span> our journey
                </h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
                hendrerit urna. <span>Pellentesque sit amet</span> sapien fringilla, mattis ligula
                consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                augue.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing vitae mattis tellus. Nullam quis
                mattis ligula consectetur.
              </p>

              <div className="about-one_options d-flex align-items-center flex-wrap">
                <Link href="/about" className="template-btn btn-style-one">
                  <span className="btn-wrap">
                    <span className="text-one">Know more</span>
                    <span className="text-two">Know more</span>
                  </span>
                </Link>

                <div className="about-one_rating-box d-flex align-items-center flex-wrap">
                  4.7
                  <div className="about-one_rating">
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <i>Customer rating</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
