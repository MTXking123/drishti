import React from "react";
export default function Banner() {
  return (
    <div>
      <div className="2xl:mx-auto  md:px-20 px-4 md:py-12 py-9">
        <div className="relative rounded-md">
          <img
            src="/images/eyetest.png"
            alt="city view"
            className="w-full h-full rounded-md  object-center object-fill absolute"
          />
        
          <div className="text-xl relative  bg-gradient-to-r from-blue-700 to-transparent w-full h-full  top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
            <div>
              <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">
                Act Before It’s Too Late!
              </h1>
              <p className="text-lg leading-6 text-white xl:w-8/12 lg:w-11/12 md:w-11/12  2xl:pr-12 mt-4">
              Don’t let vision problems or eye conditions go unnoticed. Early diagnosis and timely treatment can make all the difference. Schedule your appointment at Drishti Eye & ENT Care now and take the first step towards healthier eyes and a brighter future!
              </p>
            </div>
            <div className="md:mt-12 mt-20">
            <button className="  sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-red-800 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
            Book Appointment Now
            <div className="ml-2 mt-0.5">
                <svg
                  className="fill-stroke"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33325 8H12.6666"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10.6667L12.6667 8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 5.33301L12.6667 7.99967"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
