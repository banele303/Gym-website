import NavbarA from "../about-us/NavbarA";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

import Membership from "./member-ship";
import MemberShipHero from "./member-shipHero";
import MemberShipBenefits from "./member-shipbenefits";
import MembershipCards from "./membership-cards";
import MembershipSections from "./membership-sections";


export default function MemberShip() {
  return (
    <div className="">
      <NavbarA />
      <MemberShipHero/>
      <MemberShipBenefits/>
     <MembershipSections/>

     <MembershipCards/>
      <Footer/>
      
    </div>
  );
}
