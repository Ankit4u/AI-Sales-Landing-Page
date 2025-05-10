// pages/login.tsx
import React from 'react';
import PageBanner from '../Component/CommonBanner/LoginSignupBanner';
import LoginSection from '../Component/LoginComponent/LoginForm';
import CtaSection from '../Component/CtaComponent';

const LoginPage = () => {
  return (
    <>
      <PageBanner
        title="Login now"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Login now' },
        ]}
      />
      {/* Your login form here */}
      <LoginSection/>
      <CtaSection/>
    </>
  );
};

export default LoginPage;
