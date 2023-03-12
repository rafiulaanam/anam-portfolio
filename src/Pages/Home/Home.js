import React from "react";
import Title from "../../Components/Title";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AboutMe from "./AboutMe/AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import ContactMe from "./ContactMe";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Title title="about" mytitle="about me" />
      <AboutMe />
      <Title title="skills" mytitle="my skills" />
      <Title title="services" mytitle="my services" />
      <Title title="resume" mytitle="my resume" />
      <Title title="work" mytitle="my work" />
      <Title title="reviews" mytitle="client reviews" />
      <Title title="blogs" mytitle="my blogs" />
      <Title title="contact" mytitle="contact me" />

      <Contact />
      <ContactMe/>
      <Footer />
    </>
  );
};

export default Home;
