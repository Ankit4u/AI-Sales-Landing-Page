// components/ContentMarketingSection.tsx

import Image from 'next/image';
import serviceImage from '../../../../../public/assets/images/resource/service-detail.jpg'; // Adjust the path based on your folder structure

const ContentMarketingSection = () => {
  return (
    <section className="services-detail">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title style-four">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="left-box">
              <div className="sec-title_title">content marketers</div>
              <h2 className="sec-title_heading">
                Navigating the digital landscape with <span>content marketing</span>
              </h2>
            </div>
            <div className="right-box">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa Aliquam in hendrerit urna. 
                Pellentesque sit amet sapien fringilla, mattis l consectetur, ultrices mauris. Maecenas vitae 
                mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa Aliquam in hendrerit urna 
                pellentesque
              </p>
            </div>
          </div>
        </div>
        <div className="service-detail_image">
          <Image src={serviceImage} alt="Service Detail" />
        </div>
      </div>
    </section>
  );
};

export default ContentMarketingSection;
