import React from "react";
import Title from "../../Components/Title";
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

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Title title="skills" mytitle="my skills" />
      <MySkills />

      <MyServices />

      <MyResume />
      <Title title="work" mytitle="my work" />
      <Title title="reviews" mytitle="client reviews" />
      <ClientReviews />
      <Title title="blogs" mytitle="latest blogs" />
      <LatestBlogs />

      <ContactMe />
      <Footer />
    </>
  );
};

export default Home;
