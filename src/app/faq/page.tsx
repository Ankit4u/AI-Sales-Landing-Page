// pages/login.tsx
import React from 'react';
import PageBanner from '../Component/CommonBanner/LoginSignupBanner';
import OrganizationSection from '../Component/FaqComponent/TrustedOrganisation';
import ContactSection from '../Component/ContactComponent/ContactForm';
import CtaSection from '../Component/CtaComponent';
import FAQSection from '../Component/FaqComponent/FaqQuestion';
const ContactPage = () => {
  return (
    <>
      <PageBanner
        title="Frequently asked questions"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: ' Faq'},
        ]}
      />
      <FAQSection/>
      <OrganizationSection/>
      <ContactSection/>
      <CtaSection/>
    </>
  );
};

export default ContactPage;
