// pages/login.tsx
import React from 'react';
import PageBanner from '../Component/CommonBanner/LoginSignupBanner';
import ContactInfo from '../Component/ContactComponent/ContactInfo';
import ContactSection from '../Component/ContactComponent/ContactForm';
import MapSection from '../Component/ContactComponent/MapLocation';
const ContactPage = () => {
  return (
    <>
      <PageBanner
        title="Contact Us"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us'},
        ]}
      />
      <ContactInfo/>
      <ContactSection/>
      <MapSection/>
    </>
  );
};

export default ContactPage;
