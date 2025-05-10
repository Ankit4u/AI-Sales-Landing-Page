// pages/login.tsx
import React from 'react';
import PageBanner from '../Component/CommonBanner/LoginSignupBanner';
import BlogContent from '../Component/BlogComponent/BlogInfo';
import CtaSection from '../Component/CtaComponent';
const BlogPage = () => {
  return (
    <>
      <PageBanner
        title="Our Blog"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Blog'},
        ]}
      />
      <BlogContent/>
      <CtaSection/>
    </>
  );
};

export default BlogPage;
