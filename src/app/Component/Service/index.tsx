import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="services-one">
      <div className="auto-container">
        <div className="sec-title centered">
          <div className="sec-title_title">Our Service</div>
          <h2 className="sec-title_heading">
            Experience our latest <br /> <span>new features</span>
          </h2>
        </div>

        <div className="row clearfix">
          {[
            {
              iconClass: 'icon-speaker1',
              title: 'Digital marketers',
              delay: 'fadeInLeft',
              number: '01'
            },
            {
              iconClass: 'icon-marketing',
              title: 'Content marketers',
              delay: 'fadeInUp',
              number: '02'
            },
            {
              iconClass: 'icon-users',
              title: 'Founders',
              delay: 'fadeInRight',
              number: '03'
            },
            {
              iconClass: 'icon-copyright',
              title: 'Copywriters',
              delay: 'fadeInLeft',
              number: '04'
            },
            {
              iconClass: 'icon-tag',
              title: 'SEO specialists',
              delay: 'fadeInUp',
              number: '05'
            }
          ].map(({ iconClass, title, delay, number }, i) => (
            <div className="service-block_one col-lg-4 col-md-6 col-sm-12" key={i}>
              <div className={`service-block_one-inner wow ${delay}`} data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="service-block_one-icon">
                  <i className={iconClass}></i>
                </div>
                <h5 className="service-block_one-heading">
                  <Link href="/productdetail">{title}</Link>
                </h5>
                <div className="service-block_one-text">
                  Lorem ipsum dolor sit ame consectetur adipiscing elit Ut et <span>massa mi. Aliquam</span> in hendrerit urna..
                </div>
                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                  <div className="service-block_one-number">{number}</div>
                  <Link className="service-block_one-join" href="/service-detail">
                    Join now <i className="fa-solid fa-plus fa-fw"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Service Block Two */}
          <div className="service-block_two col-lg-4 col-md-6 col-sm-12">
            <div className="service-block_two-inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div
                className="service-block_two-sideicon"
                style={{ backgroundImage: 'url(/assets/images/icons/service-1.png)' }}
              ></div>
              <div className="service-block_two-icon">
                <Image src="/assets/images/icons/service.png" alt="Service" width={64} height={64} />
              </div>
              <h5 className="service-block_two-heading">
                <Link href="/productdetail">More service</Link>
              </h5>
              <div className="service-block_two-text">Lorem ipsum dolor sit ame consectetur.</div>
              <div className="service-block_two-button">
                <Link href="/productdetail" className="template-btn btn-style-one">
                  <span className="btn-wrap">
                    <span className="text-one">learn more</span>
                    <span className="text-two">learn more</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
