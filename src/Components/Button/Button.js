import React from 'react';
import './Button.css'


const Button = ({text}) => {
    return (
        <>
        <button className="inline-flex items-center btnn black bg-[#72E2AE] border-0 py-3 px-5 focus:outline-none hover:bg-white rounded font-medium text-sm  text-black mt-4 md:mt-0">
          {text}
        </button>
      </>
    );
};

export default Button;