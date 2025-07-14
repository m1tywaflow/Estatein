import React from "react";
import Discover from "../components/Home/Discover";
import PaginSec from "../components/Home/PaginSec";
import Properties from "../components/Home/Properties";
import Comments from "../components/Home/Comments";
import CTAsec from "../components/Home/CTAsec";
const HomePage = () => {
  return <div>
    <Discover/>
    <PaginSec/>
    <Properties/>
    <Comments/>
    <CTAsec/>
  </div>;
};
export default HomePage;
