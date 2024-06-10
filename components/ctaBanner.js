import React from "react";
import Container from "./container";
import Link from "next/link";

const CtaBanner = () => {
  return (
    <Container>
      <div className="flex items-center text-center p-8 min-h-[380px] bg-gradient-to-t from-gray-800 to-gray-600 text-white w-full rounded-2xl">
        <div className="max-w-4xl mx-auto">
          <h1 className="sm:text-4xl text-2xl font-bold">The Perfect Way to Make Great Impressions</h1>
          <p className="mt-8 text-lg text-gray-300">
            A Legacy of Luxury and Distinction. Immerse yourself in an exclusive world of opulence, where prestigious
            facilities meet refined experiences.
          </p>
          <Link
            type="button"
            href="/join"
            className="px-6 py-3 mt-12 rounded-full text-white text-base tracking-wider font-semibold border-none outline-none bg-gray-600 hover:bg-gray-700"
          >
            Apply for Membership
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default CtaBanner;
