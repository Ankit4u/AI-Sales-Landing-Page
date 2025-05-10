// pages/login.tsx
import React from 'react';
import PageBanner from '../Component/CommonBanner/LoginSignupBanner';
import AllTestimonial from '../Component/TestimonialComponent/TestimonialGrid';
import CtaSection from '../Component/CtaComponent';
const TestimonialPage = () => {
  return (
    <>
      <PageBanner
        title="Clients testimonials"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Testimonial'},
        ]}
      />
      <AllTestimonial/>
      <CtaSection/>
    </>
  );
};

export default TestimonialPage;
