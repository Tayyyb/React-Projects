import React from "react";
import HeroSection from "../../subComponents/HeroSection";
import ToVillas from "../../subComponents/ToVillas";
import Regions from "../../subComponents/Regions";
import OurSpecialities from "../../subComponents/OurSpecialities";
import Host from "../../subComponents/Host";
import About from "../../subComponents/About";
import Contact from '../../subComponents/Contact';
function Home() {
  return (
    <>
      <article className="page">
        <HeroSection />
        <ToVillas/>
        <Regions/>
        <OurSpecialities/>
        <Host/>
        <About/>
        <Contact/>
      </article>
    </>
  );
}

export default Home;
