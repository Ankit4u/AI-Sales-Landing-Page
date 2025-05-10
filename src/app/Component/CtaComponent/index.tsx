import Image from 'next/image'; // Import Image component
import ctaIcon1 from '../../../../public/assets/images/icons/cta-icon-1.png'; // Import first image
import ctaIcon2 from '../../../../public/assets/images/icons/cta-icon-2.png'; // Import second image
import ctaCard from '../../../../public/assets/images/icons/cta-card.png'; // Import CTA card image
import ctaCards from '../../../../public/assets/images/icons/cta-cards.png'; // Import CTA cards image
import ctaImage from '../../../../public/assets/images/resource/cta.png'; // Import main CTA image

const CtaSection = () => {
  return (
    <section className="cta-one">
      <div className="auto-container">
        <div className="inner-container">
          <div
            className="cta-icon_one"
            style={{
              backgroundImage: `url(${ctaIcon1.src})`,
            }}
          ></div>
          <div
            className="cta-icon_two"
            style={{
              backgroundImage: `url(${ctaIcon2.src})`,
            }}
          ></div>
          <div className="cta-one_card">
            <Image
              src={ctaCard}
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="row clearfix">
            {/* Column */}
            <div className="cta-one_title-column col-lg-6 col-md-12 col-sm-12">
              <div className="cta-one_title-outer">
                <h2 className="cta-one_title">
                  Craft your next great <span>content now.</span>
                </h2>
                <div className="cta-one_button">
                  <a href="about.html" className="template-btn btn-style-three">
                    <span className="btn-wrap">
                      <span className="text-one">Get started free</span>
                      <span className="text-two">Get started free</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Column */}
            <div className="cta-one_image-column col-lg-6 col-md-12 col-sm-12">
              <div className="cta-one_image-outer">
                <div className="cta-one_cards">
                  <Image
                    src={ctaCards}
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
                <div className="image">
                  <Image
                    src={ctaImage}
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
