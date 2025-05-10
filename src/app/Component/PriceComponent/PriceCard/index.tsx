'use client';

import { useState } from 'react';
import Image from 'next/image';
import bgImage from '../../../../../public/assets/images/background/price-bg.png';
import starsImage from '../../../../../public/assets/images/icons/price-stars.png';

const PriceSection = () => {
  const [activeTab, setActiveTab] = useState('prod-monthly');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section className="price-one">
      <div className="price-one_bg">
        <Image
          src={bgImage}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="auto-container">
        <div className="inner-container">
          <div className="sec-title title-anim centered">
            <div className="sec-title_title">Our Pricing</div>
            <h2 className="sec-title_heading">
              Join for <span>free</span> Today
            </h2>
          </div>

          <div className="pricing-tabs tabs-box">
            <div className="buttons-outer">
              <ul className="tab-buttons clearfix">
                <li
                  className={`tab-btn ${activeTab === 'prod-monthly' ? 'active-btn' : ''}`}
                  data-tab="#prod-monthly"
                  onClick={() => handleTabClick('prod-monthly')}
                >
                  Monthly
                </li>
                <li
                  className={`tab-btn ${activeTab === 'prod-yearly' ? 'active-btn' : ''}`}
                  data-tab="#prod-yearly"
                  onClick={() => handleTabClick('prod-yearly')}
                >
                  Yearly
                </li>
              </ul>
            </div>

            <div className="tabs-content">
              {/* Monthly Tab */}
              <div className={`tab ${activeTab === 'prod-monthly' ? 'active-tab' : ''}`} id="prod-monthly">
                <div className="content">
                  <div className="row clearfix">
                    {/* Starter */}
                    <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                      <div className="price-block_one-inner">
                        <div className="price-block_one-title">Starter</div>
                        <div className="price-block_one-subtitle">Up to 2,000 words / mo</div>
                        <div className="price-block_one-content">
                          <div className="d-flex justify-content-between align-items-end flex-wrap">
                            <div className="price-block_one-price"><sup>$</sup>3<sub>/mo</sub></div>
                            <div className="price-block_one-text">*Get Braine tailored</div>
                          </div>
                          <div className="price-block_one-button">
                            <a className="template-btn price-one_button" href="#">Start 1 month free trial</a>
                          </div>
                          <ul className="price-block_one-list">
                            <li><i className="fa-solid fa-check fa-fw"></i>Up to 10,000 words</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Access to basic tools</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Access to AI copywriting tools</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Email support only</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Advance 700+ tools</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Professional */}
                    <div className="price-block_one active col-lg-4 col-md-6 col-sm-12">
                      <div className="price-block_one-inner">
                        <div className="price-one_stars" style={{ backgroundImage: `url(${starsImage.src})` }}></div>
                        <div className="price-block_one-title">Professional</div>
                        <div className="price-block_one-subtitle">Up to 10,000 words / mo</div>
                        <div className="price-block_one-content">
                          <div className="d-flex justify-content-between align-items-end flex-wrap">
                            <div className="price-block_one-price"><sup>$</sup>9<sub>/mo</sub></div>
                            <div className="price-block_one-text">*Get Braine tailored</div>
                          </div>
                          <div className="price-block_one-button">
                            <a className="template-btn price-one_button" href="#">Start 1 month free trial</a>
                          </div>
                          <ul className="price-block_one-list">
                            <li><i className="fa-solid fa-check fa-fw"></i>Up to 10,000 words</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Access to basic tools</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Access to AI copywriting tools</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Email support only</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Advance 700+ tools</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Enterprise */}
                    <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                      <div className="price-block_one-inner">
                        <div className="price-block_one-title">Enterprise</div>
                        <div className="price-block_one-subtitle">Up to 10,000 words / mo</div>
                        <div className="price-block_one-content">
                          <div className="d-flex justify-content-between align-items-end flex-wrap">
                            <div className="price-block_one-price"><sup>$</sup>18<sub>/mo</sub></div>
                            <div className="price-block_one-text">*Get Braine tailored</div>
                          </div>
                          <div className="price-block_one-button">
                            <a className="template-btn price-one_button" href="#">Start 1 month free trial</a>
                          </div>
                          <ul className="price-block_one-list">
                            <li><i className="fa-solid fa-check fa-fw"></i>Up to 10,000 words</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Access to basic tools</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Access to AI copywriting tools</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Email support only</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Advance 700+ tools</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yearly Tab */}
              <div className={`tab ${activeTab === 'prod-yearly' ? 'active-tab' : ''}`} id="prod-yearly">
                <div className="content">
                  <div className="row clearfix">
                    {/* Starter */}
                    <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                      <div className="price-block_one-inner">
                        <div className="price-block_one-title">Starter</div>
                        <div className="price-block_one-subtitle">Up to 2,000 words / yr</div>
                        <div className="price-block_one-content">
                          <div className="d-flex justify-content-between align-items-end flex-wrap">
                            <div className="price-block_one-price"><sup>$</sup>30<sub>/yr</sub></div>
                            <div className="price-block_one-text">*Get Braine tailored</div>
                          </div>
                          <div className="price-block_one-button">
                            <a className="template-btn price-one_button" href="#">Start 1 year free trial</a>
                          </div>
                          <ul className="price-block_one-list">
                            <li><i className="fa-solid fa-check fa-fw"></i>Up to 10,000 words</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Access to basic tools</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Access to AI copywriting tools</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Email support only</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Advance 700+ tools</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Professional */}
                    <div className="price-block_one active col-lg-4 col-md-6 col-sm-12">
                      <div className="price-block_one-inner">
                        <div className="price-one_stars" style={{ backgroundImage: `url(${starsImage.src})` }}></div>
                        <div className="price-block_one-title">Professional</div>
                        <div className="price-block_one-subtitle">Up to 10,000 words / yr</div>
                        <div className="price-block_one-content">
                          <div className="d-flex justify-content-between align-items-end flex-wrap">
                            <div className="price-block_one-price"><sup>$</sup>90<sub>/yr</sub></div>
                            <div className="price-block_one-text">*Get Braine tailored</div>
                          </div>
                          <div className="price-block_one-button">
                            <a className="template-btn price-one_button" href="#">Start 1 year free trial</a>
                          </div>
                          <ul className="price-block_one-list">
                            <li><i className="fa-solid fa-check fa-fw"></i>Up to 10,000 words</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Access to basic tools</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Access to AI copywriting tools</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Email support only</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Advance 700+ tools</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Enterprise */}
                    <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
                      <div className="price-block_one-inner">
                        <div className="price-block_one-title">Enterprise</div>
                        <div className="price-block_one-subtitle">Up to 10,000 words / yr</div>
                        <div className="price-block_one-content">
                          <div className="d-flex justify-content-between align-items-end flex-wrap">
                            <div className="price-block_one-price"><sup>$</sup>180<sub>/yr</sub></div>
                            <div className="price-block_one-text">*Get Braine tailored</div>
                          </div>
                          <div className="price-block_one-button">
                            <a className="template-btn price-one_button" href="#">Start 1 year free trial</a>
                          </div>
                          <ul className="price-block_one-list">
                            <li><i className="fa-solid fa-check fa-fw"></i>Up to 10,000 words</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Access to basic tools</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Access to AI copywriting tools</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Email support only</li>
                            <li><i className="fa-solid fa-check fa-fw"></i>Advance 700+ tools</li>
                          </ul>
                        </div>
                      </div>
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

export default PriceSection;
