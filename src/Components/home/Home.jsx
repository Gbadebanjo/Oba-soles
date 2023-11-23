import React from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import FashionBlog from "./FashionBlog";
import Footer from "./Footer"

const Home = () => {
  return (
    <>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/> 
      <SectionFour/>
      <FashionBlog/>
      <Footer/>
    </>
  );
};

export default Home;
