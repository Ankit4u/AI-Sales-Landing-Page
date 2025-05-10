// pages/login.tsx
import React from 'react';
import PageBanner from '../Component/CommonBanner/LoginSignupBanner';
import PriceSection from '../Component/PriceComponent/PriceCard';
import VideoSection from '../Component/PriceComponent/CustomerVedio';
import CounterSection from '../Component/PriceComponent/CustomerReview';
import TestimonialAbout from '../Component/AboutComponent/AboutTestimonial';
import ClientsSection from '../Component/AboutComponent/TrustedComponent';
import CtaSection from '../Component/CtaComponent';
const PricePage = () => {
  return (
    <>
      <PageBanner
        title="Our pricing"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Pricing'},
        ]}
      />
      <PriceSection/>
      <VideoSection/>
      <CounterSection/>
      <TestimonialAbout/>
      <ClientsSection/>
      <CtaSection/>
    </>
  );
};

export default PricePage;
