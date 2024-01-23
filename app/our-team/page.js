"use client";

import NavbarA from "../about-us/NavbarA";
import Footer from "../components/Footer";
import GymOwnerDetails from "./about-owner";
import { GalleryWithTab } from "./gallary-section";
import QualificationPage from "./qualification";
import TeamHero from "./team-hero";
import Trainer from "./trainers";

export default function Home() {
  return (
    <div className="">
      <NavbarA />
      <TeamHero />
      <GymOwnerDetails />
      <QualificationPage/>
      <Trainer/>
      <Footer />
    </div>
  );
}
