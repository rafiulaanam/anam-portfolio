import React from "react";
import Button from "../../Components/Button/Button";
import Title from "../../Components/Title";

const ContactMe = () => {
  return (
    <div>
      
      <Title title="contact" mytitle="contact me" />
<div class="container my-24 px-6 mx-auto bg-[#1c233585] rounded-lg p-6">

 
  <section class="mb-32 text-white">
    <div class="flex flex-wrap">
      <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <h2 class="text-3xl font-bold mb-6">Contact me</h2>
        <p class="text-gray-300 mb-6">
        If you're looking for a skilled web developer, I would be happy to help! I have experience in building responsive and user-friendly websites using HTML, CSS, JavaScript, and other web development technologies. Whether you need a simple landing page, a complex web application, or anything in between, I can work with you to create a solution that meets your specific needs. Please feel free to contact me to discuss your project further!
        </p>
        <p class="text-gray-400 mb-2">Sylhet, Bangladesh</p>
        <p class="text-gray-400 mb-2">+8801701916034</p>
        <p class="text-gray-400 mb-2">rafiulaanam@gmail.com</p>
      </div>
      <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <form>
          <div class="form-group mb-6">
            <input type="text" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
              placeholder="Name"/>
          </div>
          <div class="form-group mb-6">
            <input type="email" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
              placeholder="Email address"/>
          </div>
          <div class="form-group mb-6">
            <textarea class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
          </div>
          
          <Button text='Send'/>
        </form>
      </div>
    </div>
  </section>


</div>

    </div>
  );
};

export default ContactMe;
