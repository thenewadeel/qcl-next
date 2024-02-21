import Image from "next/image";
import React from "react";
import Container from "./container";

const Contact = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${props.imgPos === "right" ? "lg:order-1" : ""}`}
        >
          <div>
            <Image
              src={data.image}
              width="521"
              height="auto"
              alt="Contact"
              className={"object-cover"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${data.imgPos === "right" ? "lg:justify-end" : ""}`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                Contact Us
              </h3>
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                Your feedback is important to us
              </p>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="z-10 flex flex-col justify-around rounded-xl text-ellipsis h-full p-4 text-justify text-base text-white relative md:relative md:text-black leading-4 inset-x-0 md:text-2xl md:indent-16 bg-black bg-opacity-80 md:bg-opacity-60 md:shadow-inner"
              >
                <div className="flex row p-2 justify-between">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="mx-4 rounded-md focus:border-opacity-80 border-4 border-red-300 border-opacity-0 text-black"
                  />
                </div>
                <div className="flex row p-2 justify-start">
                  <input
                    type="email"
                    name="email"
                    placeholder="eMail address"
                    className="mx-4 rounded-md focus:border-opacity-80 text-black border-2 border-red-300 border-opacity-0"
                  />
                </div>
                <div className="flex row p-2 justify-start items-center">
                  <textarea
                    name="message"
                    placeholder="Your Message will be directed to Club management"
                    className="mx-4 rounded-md focus:border-opacity-80 text-black border-2 border-red-300 border-opacity-0"
                  ></textarea>
                </div>
                <button className="bg-red-300 hover:bg-red-600 font-bold hover:text-white hover:shadow-md transition-all rounded-xl p-4 px-6 m-4 text-black text-xl self-stretch">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
