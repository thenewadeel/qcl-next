import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = (props) => {
  // if(props!==null)
  let newdata;
  const { data } = props;
  console.log(props);
  // if (!data) {
  newdata = data
    ? data
    : [
        {
          question: "Where can I apply for membership?",
          answer:
            "Membership forms can be obtained from our operator at the phone number provided in the Contact section.",
        },
      ];
  // } else {
  // newdata = data;
  // }
  const faqdata = newdata;
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5 shadow-md shadow-slate-500 dark:shadow-slate-700 rounded-md">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-indigo-500`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Faq;
