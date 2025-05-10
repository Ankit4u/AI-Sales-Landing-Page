import Image from "next/image";
import ServicesSection from "./Component/Service";
import AboutSection from "./Component/About";
import ChooseSection from "./Component/ChooseUs";
import AnswerSection from "./Component/AnswerComponent";
import StepsSection from "./Component/StepComponent";
import PricingSection from "./Component/PriceComponent/PriceCard";
import CtaSection from "./Component/CtaComponent";
import TestimonialSection from "./Component/Testimonial";
import SocialSection from "./Component/SocialIntegration";
import FaqSection from "./Component/FaqComponent/FaqQuestion";
import NewsSection from "./Component/BlogComponent/BlogSlider";
import SliderSection from "./Component/CommonBanner/MainPageBanner";
export default function Home() {
  return (
    <>
    <SliderSection/>
    <ServicesSection/>
    <AboutSection/>
    <ChooseSection/>
    <AnswerSection/>
    <TestimonialSection/>
    <StepsSection/>
    <PricingSection/>
    <FaqSection/>
    <SocialSection/>
    <NewsSection/>
    <CtaSection/>
    </>
  );
}
