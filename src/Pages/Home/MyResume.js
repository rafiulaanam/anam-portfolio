import React from "react";
import Certification from "../../Components/Certification";
import Education from "../../Components/Education";
import Title from "../../Components/Title";

const MyResume = () => {
  return (
    <div>
      <Title title="resume" mytitle="my resume" />
      <div className="md:flex">
        {" "}
        <Education />
        <Certification />
      </div>
    </div>
  );
};

export default MyResume;
