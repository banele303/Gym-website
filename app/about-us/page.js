import Footer from "../components/Footer";
import { TestimonialPage } from "../components/Testimonials";
import MemberShipBenefits from "../member-ship/member-shipbenefits";
import MembershipSections from "../member-ship/membership-sections";
import AboutHero from "./About-hero";
import AboutSecond from "./About-second";
import NavbarA from "./NavbarA";
import TestimonialsSection from "./the-testimonials";
import WhatMakesUsSpecial from "./what-makes-usspeial";

export default function AboutUs() {
  return (
    <div className="">
      <NavbarA />
      <AboutHero />
      <AboutSecond />
      <WhatMakesUsSpecial />
      <MemberShipBenefits />
    <MembershipSections/>
    <TestimonialPage/>
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
