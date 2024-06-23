import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionFour from "./SectionFour";
import FashionBlog from "./FashionBlog";
import Section3 from "./Section3";
import SectionFive from "./SectionFive";
import RecentProduct from "./RecentProduct";

const Home = () => {
  return (
    <>
      <SectionOne/>
      {/* <RecentProduct/> */}
      <SectionTwo/>
      <Section3/>
      <SectionFour/>
      <SectionFive/> 
      <FashionBlog/>
    </>
  );
};

export default Home;
