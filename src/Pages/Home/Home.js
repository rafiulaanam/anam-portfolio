import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AboutMe from "./AboutMe/AboutMe";
import Header from "./Header";
import ContactMe from "./ContactMe";
import MyResume from "./MyResume";
import MyServices from "./MyServices";
import MySkills from "./MySkills";
import ClientReviews from "./ClientReviews/ClientReviews";
import LatestBlogs from "./LatestBlogs";
import MyWorks from "./MyWorks";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
      <Navbar />
      
      <Fade buttom>

        <Header />
        <AboutMe />
        <MySkills />
        <MyServices />
        <MyResume />
        <MyWorks />
        <ClientReviews />
        <LatestBlogs />
        <ContactMe />
        <Footer />

      </Fade>
    </>
  );
};

export default Home;
