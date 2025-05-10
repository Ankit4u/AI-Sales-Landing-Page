'use client';
import Image from 'next/image';
import Link from 'next/link';

const StepsSection = () => {
  return (
    <section className="steps-one">
      <div
        className="steps-one_bg"
        style={{ backgroundImage: "url('/assets/images/background/step-1_bg.png')" }}
      ></div>
      <div
        className="steps-one_icon"
        style={{ backgroundImage: "url('/assets/images/icons/step.png')" }}
      ></div>
      <div className="auto-container">
        <div className="inner-container">
          <div className="circle-layer"></div>
          <div className="dots-layer">
            <span className="dot-one"></span>
            <span className="dot-two"></span>
          </div>

          {/* Sec Title */}
          <div className="sec-title">
            <div className="sec-title_title">How its work</div>
            <h2 className="sec-title_heading">
              Braine <span>typically operate</span> in <br /> a three steps
            </h2>
          </div>

          <div className="steps-one_button">
            <Link href="/about" className="template-btn btn-style-two">
              <span className="btn-wrap">
                <span className="text-one">Know more</span>
                <span className="text-two">Know more</span>
              </span>
            </Link>
          </div>

          <div className="row clearfix">
            {/* Step 1 */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="step-block_one">
                <div className="step-block_one-inner">
                  <div className="step-block_one-steps">step 01</div>
                  <h5 className="step-block_one-title">Algorithm processing</h5>
                  <div className="step-block_one-text">
                    Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna..
                  </div>
                  <div className="step-block_one-content">
                    <div className="image">
                      <Image
                        src="/assets/images/resource/step-1.png"
                        alt="Step 1"
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 and 3 */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="step-block_one">
                <div className="step-block_one-inner">
                  <div className="step-block_one-steps">step 02</div>
                  <h5 className="step-block_one-title">Input & data gathering</h5>
                  <div className="step-block_one-text">
                    Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna..
                  </div>
                  <div className="step-block_one-content">
                    <div className="image">
                      <Image
                        src="/assets/images/resource/step-2.png"
                        alt="Step 2"
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="step-block_one">
                <div className="step-block_one-inner">
                  <div className="step-block_one-steps">step 03</div>
                  <h5 className="step-block_one-title">
                    Content generation & refinement
                  </h5>
                  <div className="step-block_one-text">
                    Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et
                    massa mi. Aliquam in hendrerit urna..
                  </div>
                  <div className="step-block_one-content">
                    <div className="image">
                      <Image
                        src="/assets/images/resource/step-3.png"
                        alt="Step 3"
                        width={400}
                        height={300}
                      />
                    </div>
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

export default StepsSection;
