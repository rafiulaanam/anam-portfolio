import React from "react";

const Title = ({ title, mytitle }) => {
  return (
    <h1
      className="relative
         lg:text-9xl md:text-9xl text-7xl text-center font-bold text-[rgba(238,238,238,0.08)] uppercase"
    >
      {title}
      <h4 className="absolute text-4xl top-2 right-0 left-0 text-white">
        {mytitle}
        <div className="mt-10 mx-auto w-36">
          <span>
            <span></span>
            <span></span>
          </span>
        </div>
      </h4>
    </h1>
  );
};

export default Title;
