"use client";

import ParallaxSection from "./components/Paralex";

import Testimonials from "./components/Testimonials";
import NavbarA from "./about-us/NavbarA";
import HeroSection from "./components/Home-hero";
import Services from "./components/services";
import FitnessForEveryOne from "./components/fitnessfor-everyone";
import Footer from "./components/Footer";
import TypingText from "./components/typing-text";
import TestimonialsSection from "./about-us/the-testimonials";
import MemberShipBenefits from "./member-ship/member-shipbenefits";

export default function Home() {
  return (
    <div className="">
      <NavbarA />
      <HeroSection />
      <MemberShipBenefits />
      <FitnessForEveryOne />
      <ParallaxSection />
      <TypingText />
      <Services />
      <Testimonials />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
