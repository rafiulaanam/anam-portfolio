import React, { useRef, useState } from "react";
// import Button from "../../Components/Button/Button";
import Title from "../../Components/Title";
import emailjs from '@emailjs/browser';
// import { useForm } from 'react-hook-form';


const ContactMe = () => {
  // const { register, handleSubmit, formState: { errors } } = useForm();


  // const onSubmit = data => console.log(data);
  // console.log(errors);

  const form = useRef();
  
  let [sending, setSent]= useState(false)
  let [thanks, setThanks]= useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    const fom = e.target
    if(fom){
      setSent(true)
    }

    emailjs.sendForm('service_x5b34t4', 'template_jc1wk3g', form.current, 'SRwYDesCjNeboL7fN')
      .then((result) => {
          console.log(result.text);
         fom.reset()
         if(result.text==="OK"){
setThanks(true)
         }
      }, (error) => {
          console.log(error.text);
      });
   
  };


  return (
    <div>
      
      <Title title="contact" mytitle="contact me" />
<div className="container my-24 px-6 mx-auto bg-[#1c233585] rounded-lg p-6">

 
  <section className="mb-32 text-white">
    <div className="flex flex-wrap">
      <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <h2 className="text-3xl font-bold mb-6">Contact me</h2>
        <p className="text-gray-300 mb-6">
        If you're looking for a skilled web developer, I would be happy to help! I have experience in building responsive and user-friendly websites using HTML, CSS, JavaScript, and other web development technologies. Whether you need a simple landing page, a complex web application, or anything in between, I can work with you to create a solution that meets your specific needs. Please feel free to contact me to discuss your project further!
        </p>
        <p className="text-gray-400 mb-2">Sylhet, Bangladesh</p>
        <p className="text-gray-400 mb-2">+8801701916034</p>
        <p className="text-gray-400 mb-2">rafiulaanam@gmail.com</p>
      </div>
      <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <form ref={form} onSubmit={sendEmail}>
          { thanks === true ?
          <section class="text-gray-600 body-font">
          <div class="container mx-auto flex flex-col px-5  justify-center items-center">
            <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://blush.design/api/download?shareUri=M2nb2N2ZyPM6E5CF&c=Bottom_0%7E2b44ff_Hair_0%7E181658_Skin_0%7Ed4a181_Top_0%7Eff4133&w=800&h=800&fm=png"/>
            <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Thanks for Contacting me. I will reply your message as soon as possible.</h1>
              
            
             
            </div>
          </div>
        </section>
            :
            <>
              <div className="form-group mb-6">
            <input type="text"
      
            // {...register("Name", {required: true, maxLength: 180})}
            className="form-control block
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
          <div className="form-group mb-6">
            <input type="email"
            // {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
            className="form-control block
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
          <div className="form-group mb-6">
            <textarea 
            // {...register("Message", {required: true, maxLength: 100})}
            
            className="
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

          {
            sending === false ?
            <input type="submit" value="send" className="inline-flex items-center btnn black bg-[#72E2AE] border-0 py-3 px-5 focus:outline-none hover:bg-white rounded font-medium text-sm  text-black mt-4 md:mt-0" />
           : <input type="submit" value="sending..." className="inline-flex items-center btnn black bg-[#72E2AE] border-0 py-3 px-5 focus:outline-none hover:bg-white rounded font-medium text-sm  text-black mt-4 md:mt-0" />
          }
            </>
          }
          
        </form>
      </div>
    </div>
  </section>


</div>

    </div>
  );
};

export default ContactMe;
