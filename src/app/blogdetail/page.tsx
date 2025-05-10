// pages/login.tsx
import React from 'react';
import PageBanner from '../Component/CommonBanner/LoginSignupBanner';
import BlogFullInformation from '../Component/BlogComponent/BlogRead';
import CtaSection from '../Component/CtaComponent';
const BlogDetailPage = () => {
  return (
    <>
      <PageBanner
        title="Blog detail"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'BlogDetail'},
        ]}
      />
      <BlogFullInformation/>
      <CtaSection/>
    </>
  );
};

export default BlogDetailPage;
