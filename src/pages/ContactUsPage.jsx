import React from "react";
import ContactBanner from "/src/components/ContactUs/ContactBanner";
import ConnectSec from "../components/ContactUs/ConnectSec";
import DiscOfficeLoc from "../components/ContactUs/DiscOfficeLoc";
import GallerySection from "../components/ContactUs/GallerySection";
import CTAsec from "/src/components/Home/CTAsec";

const ContactUs = () => {
  return (
    <div>
      <ContactBanner />
      <ConnectSec />
      <DiscOfficeLoc />
      <GallerySection />
      <CTAsec/>
    </div>
  );
};
export default ContactUs;
