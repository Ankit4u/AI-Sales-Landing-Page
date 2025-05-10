// pages/login.tsx
import React from 'react';
import PageBanner from '../Component/CommonBanner/LoginSignupBanner';
import StorySection from '../Component/AboutComponent/StoryComponent';
import CoreValuesSection from '../Component/AboutComponent/ValueComponent';
import TestimonialAbout from '../Component/AboutComponent/AboutTestimonial';
import ClientsSection from '../Component/AboutComponent/TrustedComponent';
import CtaSection from '../Component/CtaComponent';
import TeamSection from '../Component/AboutComponent/OurTeam';

const AboutPage = () => {
  return (
    <>
      <PageBanner
        title="About us"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: ' About us'},
        ]}
      />
      <StorySection/>
      <CoreValuesSection/>
      <TeamSection/>
      <TestimonialAbout/>
      <ClientsSection/>
      <CtaSection/>
    </>
  );
};

export default AboutPage;
