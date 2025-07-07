import React from "react";
import docImg from "../../../public/Images/dr_manish.jpg";
import Image from "next/image";

const Doctor = () => {
  return (
    <div className="text-black">
      <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:container">
        <div className=" relative lg:w-1/2">
          <div className="  bg-gray-200 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
            <div className="w-full lg:w-auto lg:-mr-32">
              <Image
                src={docImg}
                alt="image with decent chairs"
                className="w-full relative lg:pl-20 px-6 py-14"
              />
            </div>
          </div>
          <div className="absolute top-0   md:h-96 w-full hidden md:block lg:hidden"></div>
          {/* <div className="w-full h-full lg:hidden">
                        <img src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png" alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14" />
                    </div> */}
        </div>
        <div className="bg-gray-100  lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
          <div>
            <h1 className="  w-full xl:text-6xl sm:text-5xl text-4xl font-semibold  capitalize">
              About <br /> Dr Manish Agrawal
            </h1>

            <ul className="py-2">
              <li>MBBS, MS, FSEH</li>
              <li>Medical Director & Founder: Drishti Eye & ENT Care</li>
              <li>Ex Senior Consultant : Max Hospital(Shroff Eye Hospital)</li>
              <li>Fellow medical retina LV PRASHAD INSTITUTE HYDERABAD </li>
              <li>Fellow Shroff charity eye hospital Delhi</li>
            </ul>
            <p className=" font-semibold text-base leading-normal  mt-5">
              Experience 22 yrs of Cataract Surgery (Phacoemulsification),
              Refractive Surgery (Lasik ICL), Glaucoma, Oculoplasty, Cornea,
              Medical Retina
            </p>
            <button className="  sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:hover:bg-red-800 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
              Meet Our Team
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
  );
};

export default Doctor;
