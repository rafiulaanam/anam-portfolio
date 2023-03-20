import React from "react";
import rafi from "../../Assets/rafi.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="Header">
      <div className="flex justify-center  bg-no-repeat  bg-cover h-full md:bg-center">
        <div className="flex flex-col items-center ">
          <div className="flex flex-col justify-center items-center text-center  max-w-7xl   my-8 py-4 px-10">
            <div className="avatar">
              <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img alt="" src={rafi} />
              </div>
            </div>
            <span className="underline underline-offset-2 text-gray-700-mt-3">
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            </span>

            <div className="flex flex-col text-gray-700mt-5">
              <h1 className="text-4xl text-white md:text-[50px] font-bold">
                Hi, I am{" "}
                <span className="text-[#72E2AE] ">
                  <Typewriter
                    words={[
                      "RAFIUL ANAM",
                      "Full-stack Web Developer",
                      "React Js Developer",
                      "Coder",
                      "Javascript Developer!",
                    ]}
                    loop={30}
                    cursor
                    cursorStyle="_"
                    typeSpeed={90}
                    deleteSpeed={90}
                    delaySpeed={1000}
                    // onLoopDone={handleDone}
                    // onType={handleType}
                  />
                </span>
              </h1>
              <p className="text-xl font-bold mt-2 md:mt-4 tracking-wide">
                Full-stack Web Developer
              </p>
            </div>
            <p className="mt-4 text-md font-semibold md:w-[52%] tracking-wide leading-7">
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations.
            </p>
            <div className="space-x-3 mt-6 md:mt-4 text-white flex">
              <a
                href="https://www.facebook.com/rafiulaanam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaFacebookF className=" bg-[#083f53] hover:bg-[#72E2AE] hover:text-[#01202C] rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></FaFacebookF>
              </a>
              <a
                href="https://www.linkedin.com/in/rafiulaanam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaLinkedinIn className=" bg-[#083f53] hover:bg-[#72E2AE] hover:text-[#01202C] rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></FaLinkedinIn>
              </a>
              <a
                href="https://github.com/rafiulaanam"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaGithub className=" bg-[#083f53] hover:bg-[#72E2AE] hover:text-[#01202C] rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></FaGithub>
              </a>
              <a
                href="https://www.instagram.com/rafiulaanam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaInstagram className=" bg-[#083f53] hover:bg-[#72E2AE] hover:text-[#01202C] rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></FaInstagram>
              </a>
              <a
                href="https://wa.me/8801701916034?text=Hello%2C%20Thanks%20for%20messaging%20me.%20How%20can%20I%20help%20you%20as%20a%20Full-stack%20Web%20Developer"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaWhatsapp className=" bg-[#083f53] hover:bg-[#72E2AE] hover:text-[#01202C] rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></FaWhatsapp>
              </a>
              <a
                href="https://twitter.com/rafiulaanam"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaTwitter className=" bg-[#083f53] hover:bg-[#72E2AE] hover:text-[#01202C] rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></FaTwitter>
              </a>

              {/* <a
                href="https://www.facebook.com/rafiulaanam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FaDribbble className=" bg-[#083f53] hover:bg-[#72E2AE] hover:text-[#01202C] rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></FaDribbble>
              </a> */}
            </div>
            <div className="flex mt-10 space-x-5">
            <Link to="About" spy={true} smooth={true} offset={-30} duration={1000}>
            <button className="bg-white text-blue-900 px-6 py-2 hover:brightness-105 font-semibold">
                Read More
              </button>
            </Link>
            <Link to="Contact" spy={true} smooth={true} offset={-30} duration={1000}>
            <button className="bg-blue-900 text-white border-2 border-white px-6 py-2 hover:brightness-105 font-semibold">
                Contact Me
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
