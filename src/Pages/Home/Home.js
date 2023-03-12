import React from "react";
import Title from "../../Components/Title";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import MyResume from "./MyResume";
import MyServices from "./MyServices";
import MySkills from "./MySkills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Title title="about" mytitle="about me" />
      <AboutMe />
      <Title title="skills" mytitle="my skills" />
      <MySkills/>
      <Title title="services" mytitle="my services" />
      <MyServices/>
      <Title title="resume" mytitle="my resume" />
      <MyResume/>
      <Title title="work" mytitle="my work" />
      <Title title="reviews" mytitle="client reviews" />
      <Title title="blogs" mytitle="my blogs" />
      <Title title="contact" mytitle="contact me" />

   
      <ContactMe/>
      <Footer />
    </>
  );
};

export default Home;
