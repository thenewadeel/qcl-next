import Image from "next/image";
import React from "react";
import Container from "./container";
import defaultImage from "../public/img/qcl.jpg";

const FacilityTemplate = (props) => {
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props?.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <Image
              src={data?.image ? data.image : defaultImage.src}
              width="521"
              height="521"
              alt="Benefits"
              className={"object-cover"}
              // placeholder="blur"
              // blurDataURL={data?.image?.src}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data?.imgPos === "right" ? "lg:justify-end" : "rounded-xl"
          }`}
        >
          <div className="justify-between border-4 border-red-900 h-full">
            <div className="flex flex-col w-full mt-4 border-4 border-red-300">
              <div
                className="text-left  p-8 shadow-black dark:shadow-sky-900 dark:border-4 dark:border-gray-900 shadow-lg rounded-xl  w-full   backdrop-blur-md bg-stone-950 bg-opacity-70
        text-gray-200"
              >
                <h2 className=" font-extrabold mb-6 ">Welcome to Our Website</h2>
                <p className="mb-4 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, ipsum vel iaculis bibendum,
                  justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis in bibendum
                  tincidunt.
                </p>
              </div>
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data?.title ? data.title : "Titleeee"}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data?.desc ? data.desc : "Desccccccc"}
              </p>
            </div>

            <div className="w-full mt-5">
              {/* {data.bullets.map((item, index) => ( */}
              "Bulletttttt"
              {/* ))} */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">{props.title}</h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">{props.children}</p>
        </div>
      </div>
    </>
  );
}

export default FacilityTemplate;
