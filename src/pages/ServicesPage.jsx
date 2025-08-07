import React from "react";
import ServicesBanner from "../components/ServicesP/ServicesBanner";
import PaginSec from "../components/Home/PaginSec";
import UnlockPropValue from "../components/ServicesP/UnlockPropValue";
import EffortlessProp from "../components/ServicesP/EffortlessProp";
import CTAsec from "/src/components/Home/CTAsec";
const ServicesPage = () => {
  return (
    <div>
      <ServicesBanner />
      <PaginSec />
      <UnlockPropValue />
      <EffortlessProp />
      <CTAsec/>
    </div>
  );
};
export default ServicesPage;
