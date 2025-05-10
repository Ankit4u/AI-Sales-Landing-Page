// pages/login.tsx
import React from 'react';
import PageBanner from '../Component/CommonBanner/LoginSignupBanner';
import ForgotForm from '../Component/ForgotComponent/ForgotForm';
import CtaSection from '../Component/CtaComponent';

const ForgotPage = () => {
  return (
    <>
      <PageBanner
        title="Reset password"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Reset password'},
        ]}
      />
      <ForgotForm/>
      <CtaSection/>
    </>
  );
};

export default ForgotPage;
