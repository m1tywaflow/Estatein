import React from "react";
import Discover from "../components/Home/Discover";
import PaginSec from "../components/Home/PaginSec";
import Properties from "../components/Home/Properties";
import Comments from "../components/Home/Comments";
import CTAsec from "../components/Home/CTAsec";
import AskedSec from "../components/Home/AskedSec";
const HomePage = () => {
  return <div>
    <Discover/>
    <PaginSec/>
    <Properties/>
    <Comments/>
    <AskedSec/>
    <CTAsec/>
  </div>;
};
export default HomePage;
