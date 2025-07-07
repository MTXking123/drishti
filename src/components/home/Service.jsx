import Link from "next/link";
import React from "react";

const Service = () => {
  const teamMembers = [
    {
      imageUrl:
        "https://www.ojaseyehospital.com/blog/wp-content/uploads/2023/01/catract.jpg",
      name: "Diagnostic Services",
      role: "",
      altText: "woman smiling",
    },
    {
      imageUrl:
        "https://images.ctfassets.net/u4vv676b8z52/23yhkTmq7LfyWgcwdvLEyc/04c3a5cc6ececf64f43d3d869e8bb6d7/phoropter-678x446.gif?fm=jpg&q=80",
      name: " Treatment Services",
      role: "",
      altText: "woman in black dress",
    },
  
    
    
  ];

  return (
    <div className="xl:mx-auto xl:container px-6 py-16 lg:py-24">
      <div className="py-8 lg:py-16">
        <h1 className="text-4xl font-semibold leading-10 text-gray-800 text-center">
          Our Services
        </h1>

        <p className=" lg:px-0 px-4 lg:w-[90%] mx-auto text-base leading-6 text-center mt-6">
          At Drishti Eye & ENT Care, we offer a comprehensive range of advanced
          eye care and ENT services, including routine eye check-ups, cataract
          and glaucoma management, LASIK surgery, retina care, pediatric
          ophthalmology, and specialized ENT treatments, all tailored to ensure
          the best outcomes for our patients.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <div className="" key={index}>
            <Link href='/pages/services'>
            {/* <Link href={member.link}> */}
            <div className="overflow-hidden">

            <img
              src={member.imageUrl}
              className="h-72 hover:scale-125 transition duration-300 ease-in-out w-full object-cover object-center rounded-t-md"
              alt={member.altText}
              />
              </div>
            <div className="bg-white hover:bg-red-700  shadow-md rounded-md py-4 text-center">
              <p className="lg:text-2xl  font-medium leading-6 text-gray-600 hover:text-white">
                {member.name}
              </p>
              {/* <p className="text-base leading-6 mt-2 text-gray-800">
                {member.role}
              </p> */}
            </div>
              </Link>
          </div>
        ))}
      </div>

      <div className="mx-auto text-center justify-center ">
        
        <Link href='/pages/services'>
        <button className="  sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:hover:bg-red-800 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
          Explore
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

        </Link>
      </div>
    </div>
  );
};

export default Service;
