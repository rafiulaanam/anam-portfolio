import React from 'react';
import Title from '../../Components/Title';

const MyServices = () => {
    return (
        <div>
          <Title title="services" mytitle="my services" />
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
   
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4  flex flex-col bg-[#1c233585] rounded-lg text-white   items-center">
        <div className='flex '>
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
          <span className="text-5xl pr-1 font-bold ml-52 text-[rgba(238,238,238,0.22)]">01</span>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">Frontend Developer</h2>
          <p className="leading-relaxed text-base text-gray-400">As a frontend developer, my primary focus is on creating user-facing web applications and interfaces. I use a combination of programming languages such as HTML, CSS, and JavaScript to build and design interactive, visually appealing, and intuitive web pages that users can easily navigate and engage with. Additionally, I continuously stay up-to-date with the latest web development trends, technologies, and tools to provide the best user experience possible.</p>
          <a href='!#' className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4  flex flex-col bg-[#1c233585] rounded-lg text-white  items-center">
       <div className='flex'>
       <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
           <span className="text-5xl pr-1 font-bold ml-52 text-[rgba(238,238,238,0.22)]">02</span>
       </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">Backend Developer</h2>
          <p className="leading-relaxed text-base text-gray-400">As a backend developer, my primary responsibility is to design, develop, and maintain the server-side of web applications. This involves writing code that handles data storage, processing, and retrieval, as well as managing communication between the client-side and the server-side. I work with databases, APIs, and various technology, such as Node js, Express js, MongoDB, or Mongoose, depending on the project's requirements.</p>
          <a href='!#' className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="p-4  flex flex-col bg-[#1c233585] rounded-lg text-white  items-center">
        <div className='flex'>
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
           <span className="text-5xl pr-1 font-bold ml-52 text-[rgba(238,238,238,0.22)]">03</span>
        </div>
        <div className="flex-grow">
          <h2 className="text-white text-lg title-font font-medium mb-3">MERN-stack Developer</h2>
          <p className="leading-relaxed text-base text-gray-400">As a MERN stack developer, I am skilled in building web applications using a combination of four technologies: MongoDB (a NoSQL database), Express.js (a web application framework for Node.js), React (a JavaScript library for building user interfaces), and Node.js (a JavaScript runtime environment). With these tools, I can handle both the front-end and back-end development of web applications, and can implement features such as user authentication, real-time data updates, and data storage.</p>
          <a href='!#' className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
  </div>
</section>
        </div>
    );
};

export default MyServices;