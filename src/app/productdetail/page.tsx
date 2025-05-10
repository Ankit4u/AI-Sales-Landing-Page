// pages/login.tsx
import React from 'react';
import PageBanner from '../Component/CommonBanner/LoginSignupBanner';
import ContentMarketingSection from '../Component/ProductDetailComponent/ProductInformation';
import ServicesTwo from '../Component/ProductDetailComponent/ProductBenefits';
import StepsSection from '../Component/StepComponent';
import SolutionSection from '../Component/ProductDetailComponent/problemsolutions';
import FAQSection from '../Component/FaqComponent/FaqQuestion';
import CtaSection from '../Component/CtaComponent';
const ProductDetailPage = () => {
  return (
    <>
      <PageBanner
        title="Product detail"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'ProductDetail'},
        ]}
      />
      <ContentMarketingSection/>
      <ServicesTwo/>
      <StepsSection/>
      <SolutionSection/>
      <FAQSection/>
      <CtaSection/>
    </>
  );
};

export default ProductDetailPage;
