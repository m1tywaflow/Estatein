import React from "react";

import OurJourney from "../components/About/OurJourney";
import OurValues from "../components/About/OurValues";
import OurAchiev from "../components/About/OurAchievements";
import EstateinExperience from "../components/About/EstateinExperience";
import EstateinTeam from "../components/About/EstateinTeam";
import ValuedClients from "../components/About/ValuedClients";
import CTAsec from "/src/components/Home/CTAsec";
import { Cat } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-[#141414]">
      <OurJourney />
      <OurValues />
      <OurAchiev />
      <EstateinExperience />
      <EstateinTeam />
      <ValuedClients />
      <CTAsec />
    </div>
  );
};
export default AboutUs;
