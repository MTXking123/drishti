// "use client"
// import React, { useState } from "react";
// function Hero() {
//     const [show, setShow] = useState(false);
//     return (
//         <div className="py-2 lg:py-8 bg-gray-100 overflow-y-hidden">
//             {/* Code block starts */}
//             <dh-component>
//                 <nav className="w-full">

//                 </nav>
//                 <div className="w-full px-6">
//                     <div className="mt-8 relative rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-400 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
//                         <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
//                         <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
//                         <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
//                             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl text-center text-white font-bold leading-tight">Welcome to Dristi Eye & ENT Care</h1>
//                         </div>
//                         <div className="flex justify-center items-center mb-10 sm:mb-20">
//                             <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Get Started</button>
//                             <button className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">Learn More</button>
//                         </div>
//                     </div>
//                     <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
//                         <div className="relative w-[80%] ">
//                             <img src="https://images2.alphacoders.com/133/1330529.png" alt="Sample Page" role="img" />
//                         </div>
//                     </div>
//                 </div>
//             </dh-component>
//             {/* Code block ends */}
//         </div>

//     );
// }

// export default Hero;

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Hero() {


  const slides = [
    {
      image: "https://images2.alphacoders.com/133/1330529.png",
      alt: "Slide 1",
      title: "Comprehensive Eye Care",
      text: "Your vision is our priority.",
    },
    {
      image:
        "https://www.pennmedicine.org/-/media/images/patient%20care/man_eye_exam.ashx?mw=620&mh=408",
      alt: "Slide 2",
      title: "Expert ENT Services",
      text: "Advanced care for ENT conditions.",
    },
    {
      image:
        "https://www.associatesinophthalmologypc.com/wp-content/uploads/2015/12/eye-exam.jpg",
      alt: "Slide 3",
      title: "State-of-the-Art Facilities",
      text: "Ensuring quality healthcare services.",
    },
  ];

  return (
    <div className="py-2 lg:py-8 bg-gray-100 overflow-y-hidden">
      <dh-component>
        <nav className="w-full"></nav>
        <div className="w-full px-6">
          <div className="mt-8 relative rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-400 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
            <img
          
              className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg"
              alt="bg"
            />
            <img
              className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg"
              alt="bg"
            />
            <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl text-center text-white font-bold leading-tight">
                Welcome to Dristi Eye & ENT Care
              </h1>
            </div>
            <div className="flex justify-center items-center mb-10 sm:mb-20">
              <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">
                Get Started
              </button>
              <button className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Slider Section */}
          <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
            <div className="relative w-[90%] lg:w-[80%]">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                // navigation
                loop
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-[300px] lg:h-[550px] object-cover rounded-lg"
                      />
                      {slide.text && (
                        <div className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-4 rounded-md">
                          <h3 className="text-xl font-bold">{slide.title}</h3>
                          <p>{slide.text}</p>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

           


            </div>
          </div>
        </div>
      </dh-component>
    </div>
  );
}

export default Hero;
