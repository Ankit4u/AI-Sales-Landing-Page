// pages/login.tsx
import React from 'react';
import PageBanner from '../Component/CommonBanner/LoginSignupBanner';
import ServicesSection from '../Component/Service';
import VideoSection from '../Component/PriceComponent/CustomerVedio';
import CounterSection from '../Component/PriceComponent/CustomerReview';
import PriceSection from '../Component/PriceComponent/PriceCard';
import FAQSection from '../Component/FaqComponent/FaqQuestion';
import CtaSection from '../Component/CtaComponent';
const ProductPage = () => {
  return (
    <>
      <PageBanner
        title="Our product"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'product'},
        ]}
      />
      <ServicesSection/>
      <VideoSection/>
      <CounterSection/>
      <PriceSection/>
      <FAQSection/>
      <CtaSection/>
    </>
  );
};

export default ProductPage;
