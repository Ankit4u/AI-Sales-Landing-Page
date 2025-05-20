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

          {/* Section Title */}
          <div className="sec-title">
            <div className="sec-title_title">How its work</div>
            <h2 className="sec-title_heading">
              Customized Implementation <br />Process
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
            {/* Step 1 - Left */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="step-block_one">
                <div className="step-block_one-inner">
                  <div className="step-block_one-steps">step 01</div>
                  <h5 className="step-block_one-title">Discovery & Consultation</h5>
                  <div className="step-block_one-text">
                    We begin by understanding your business goals, existing systems, and specific requirements.
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

            {/* Step 2 - Right */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="step-block_one">
                <div className="step-block_one-inner">
                  <div className="step-block_one-steps">step 02</div>
                  <h5 className="step-block_one-title">Solution Design</h5>
                  <div className="step-block_one-text">
                    Our team crafts a tailored chatbot strategy, selecting the appropriate AI models and designing conversation flows that resonate with your audience.
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
            </div>

            {/* Step 3 - Left */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="step-block_one">
                <div className="step-block_one-inner">
                  <div className="step-block_one-steps">step 03</div>
                  <h5 className="step-block_one-title">
                    Development & Integration
                  </h5>
                  <div className="step-block_one-text">
                    We develop the chatbot solution, integrating it seamlessly with your current platforms and ensuring it complements your existing workflows.
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

            {/* Step 4 - Right */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="step-block_one">
                <div className="step-block_one-inner">
                  <div className="step-block_one-steps">step 04</div>
                  <h5 className="step-block_one-title">Testing & Optimization</h5>
                  <div className="step-block_one-text">
                    Rigorous testing ensures reliability and effectiveness. We fine-tune the chatbot based on feedback and performance metrics.
                  </div>
                  <div className="step-block_one-content">
                    <div className="image">
                      <Image
                        src="/assets/images/resource/step-4.png"
                        alt="Step 4"
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Empty left column to push Step 5 to right */}
            <div className="column col-lg-6 col-md-12 col-sm-12"></div>

            {/* Step 5 - Right */}
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="step-block_one">
                <div className="step-block_one-inner">
                  <div className="step-block_one-steps">step 05</div>
                  <h5 className="step-block_one-title">Deployment & Training</h5>
                  <div className="step-block_one-text">
                    Upon deployment, we provide comprehensive training to your team, ensuring they can leverage the chatbot's capabilities fully.
                  </div>
                  <div className="step-block_one-content">
                    <div className="image">
                      <Image
                        src="/assets/images/resource/step-5.png"
                        alt="Step 5"
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
