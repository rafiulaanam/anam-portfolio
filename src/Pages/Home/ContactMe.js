import React, { useRef, useState } from "react";
import Title from "../../Components/Title";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const form = useRef();
// console.log(form)
  let [sending, setSent] = useState(false);
  let [thanks, setThanks] = useState(false);



  const handleData = (data) => {
    // console.log(data);
    if (data) {
      setSent(true);
    }
    form.current.reset();
    emailjs
      .sendForm(
        "service_x5b34t4",
        "template_jc1wk3g",
        form.current,
        "SRwYDesCjNeboL7fN"
      )
      .then(
        (result) => {
          console.log(result.text);
          
          if (result.text === "OK") {
            setThanks(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  console.log(errors);




  return (
    <div id="Contact">
      <Title title="contact" mytitle="contact me" />
      <div className="container my-24 px-6 mx-auto bg-[#1c233585] rounded-lg p-6">
        <section className="mb-32 text-white">
          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <h2 className="text-3xl font-bold mb-6">Contact me</h2>
              <p className="text-gray-300 mb-6">
                If you're looking for a skilled web developer, I would be happy
                to help! I have experience in building responsive and
                user-friendly websites using HTML, CSS, JavaScript, and other
                web development technologies. Whether you need a simple landing
                page, a complex web application, or anything in between, I can
                work with you to create a solution that meets your specific
                needs. Please feel free to contact me to discuss your project
                further!
              </p>
              <p className="text-gray-400 mb-2">Sylhet, Bangladesh</p>
              <p className="text-gray-400 mb-2">+8801701916034</p>
              <p className="text-gray-400 mb-2">rafiulaanam@gmail.com</p>
            </div>
            <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <form
                ref={form}
                onSubmit={handleSubmit(handleData)}
              >
                {thanks === true ? (
                
                  <div class="flex items-center justify-center ">
      <div>
        <div class="flex flex-col items-center space-y-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 class="text-4xl font-bold">Thank You !</h1>
          <p className="text-center">Thank you for your interest! Check your email for a link to the guide.</p>
          <a  href="!#"
            class="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600  rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span class="text-sm font-medium">
              Home
            </span>
          </a>
        </div>
      </div>
    </div>
                ) : (
                  <>
                    <div className="form-group mb-6">
                      <input
                        type="text"
                        name="user_name"
                        {...register("user_name", {
                          required: true,
                          maxLength: 180,
                        
                        })}
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput7"
                        placeholder="Name"
                      />
                       {errors.user_name?.type === 'required' && <p className="text-red-400">Name is required</p>}
                    </div>
                    <div className="form-group mb-6">
                      <input
                        name="user_email"
                        type="email"
                        {...register("user_email", {
                          required: true,
                          pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i,
                          
                        })}
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder="Email address"
                      />
                      {errors.user_email?.type === 'required' && <p className="text-red-400">Email is required</p>}
                      {errors.user_email?.type === 'pattern' && <p className="text-red-400">Valid email is required</p>}
                    </div>
                    <div className="form-group mb-6">
                      <textarea
                        {...register("message", {
                          required: true,
                          minLength:4,
                          maxLength: 100,
                          
                        })}
                        name="message"
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
            "
                        id="exampleFormControlTextarea13"
                        rows="3"
                        placeholder="Message"
                      ></textarea>
                      {errors.message?.type === 'required' && <p className="text-red-400">Message is required</p>}
                      {errors.message?.type === 'minLength' && <p className="text-red-400">Write at least 4 character word</p>}
                    </div>

                    {sending === false ? (
                      <input
                        type="submit"
                        value="send"
                        className="inline-flex items-center btnn black bg-[#72E2AE] border-0 py-3 px-5 focus:outline-none hover:bg-white rounded font-medium text-sm  text-black mt-4 md:mt-0"
                      />
                    ) : (
                      <input
                        type="submit"
                        value="sending..."
                        className="inline-flex items-center btnn black bg-[#72E2AE] border-0 py-3 px-5 focus:outline-none hover:bg-white rounded font-medium text-sm  text-black mt-4 md:mt-0"
                      />
                    )}
                  </>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactMe;
