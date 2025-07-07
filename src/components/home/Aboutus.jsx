import Link from "next/link";
import React from "react";

const Aboutus = () => {
  return (
    <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
      <div className="lg:flex items-center justify-between">
        <div className="lg:w-1/3">
          <h1 className="text-4xl font-semibold leading-9 text-gray-800">
            About Us
          </h1>
          <p className="text-base leading-6 mt-4 text-gray-600">
            Drishti Eye & ENT Care stands as a beacon of trust and innovation in
            the field of eye care, setting benchmarks for quality and
            reliability in the Delhi/NCR region. Established in July 2009,
            Drishti Eye Care has consistently upheld the highest ethical and
            professional standards, earning a reputation as one of the most
            dependable eye care centers in the area. Certified with the
            prestigious ISO 9001:2008, it is committed to delivering
            unparalleled healthcare services with a patient-centric approach.
          </p>
          {/* <Link href="/pages/about">
            <button
              aria-label="view catalogue"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline"
            >
              Explore More
              <svg
                className="ml-2 mt-1"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33325 4H10.6666"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 6.66667L10.6667 4"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 1.33398L10.6667 4.00065"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link> */}

          <Link href="/pages/about">
            <button className="  sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-red-800 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
              About Us
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

        <div className="lg:w-7/12 lg:mt-0 mt-8">
          <div className="w-full h-full bg-red-200">
            {/* <img
              src="https://e0.pxfuel.com/wallpapers/374/914/desktop-wallpaper-adult-senior-eye-exams-gainesville-ophthalmology-gainesville-fl-eye-doctor.jpg"
              alt="apartment design"
              className="w-full sm:block hidden"
            /> */}
            {/* <img
              src="https://www.bhartieye.com/wp-content/uploads/2024/04/Bharti-Eye-Doctor-IMG.jpg"
              alt="apartment design"
              className="sm:hidden block w-full"
            /> */}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1661281323861-8bf46349f9cf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXllJTIwZG9jdG9yfGVufDB8fDB8fHww"
              className="w-full"
              alt="kitchen"
            />
            <img
              src="https://www.bhartieye.com/wp-content/uploads/2024/04/Bharti-Eye-Doctor-IMG.jpg"
              className="w-full"
              alt="sitting room"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
