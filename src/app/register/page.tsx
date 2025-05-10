// pages/login.tsx
import React from 'react';
import PageBanner from '../Component/CommonBanner/LoginSignupBanner';
import RegisterSection from '../Component/RegisterComponent/RegisterForm';
import CtaSection from '../Component/CtaComponent';

const RegisterPage = () => {
  return (
    <>
      <PageBanner
        title="Register now"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Register now' },
        ]}
      />
      <RegisterSection/>
      <CtaSection/>
    </>
  );
};

export default RegisterPage;
