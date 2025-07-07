"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Import required modules
import { Navigation, Autoplay } from "swiper/modules";

// Star Ratings Component
const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="text-yellow-500 text-2xl mb-2">
      {Array.from({ length: totalStars }, (_, index) => (
        <span key={index}>{index < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

export default function Rev() {
  return (
    <div className="lg:w-[90%] my-4 mx-auto">
      <div className="px-2 lg:py-16">
        <h1 className="mx-auto text-center text-4xl font-semibold leading-9 text-gray-800">
        Patient Reviews
        </h1>
      </div>

      <Swiper
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay configuration
        loop={true} // Infinite scroll configuration
        modules={[Navigation, Autoplay]}
        className="text-center p-2 lg:p-16 "
      >
        <SwiperSlide className="pt-2 lg:pt-4">
          {/* <p>3 months ago</p> */}
          <StarRating rating={5} />
          <p className="text-sm w-[80%] mx-auto lg:text-3xl py-4 font-semibold">
            &ldquo; Hi, This is mani I have done eye surgery at Dristi I care
            center. Dr. Manish agarwal eye surgery for my Mother, with in 15 day
            she feels very comfortable. Thanks to Dr. Manish Agarwal and team
            &rdquo;
          </p>
          <p>~ Mani Vannan</p>
        </SwiperSlide>

        <SwiperSlide className="pt-2 lg:pt-4">
          {/* <p>10 months ago</p> */}
          <StarRating rating={4} />
          <p className="text-sm w-[80%] mx-auto lg:text-3xl py-4 font-semibold">
            &ldquo; Got my wife’s cataract surgery done from Drishti Eye & ENT
            care. Both of us are satisfied the way case was handled & operated.
            The staff is also very supportive & courteous. Dr Manish is very
            good at his subject. Highly recommended. &rdquo;
          </p>
          <p>~ Deepak Gupta</p>
        </SwiperSlide>

        <SwiperSlide className="pt-2 lg:pt-4">
          {/* <p>3 years ago</p> */}
          <StarRating rating={5} />
          <p className="text-sm w-[80%] mx-auto lg:text-3xl py-4 font-semibold">
            &ldquo; Excellent experience. Very well organised. I am really
            thankful to Dr Manish Agrawal and his team. Special thanks to Admin
            Incharge and coordinator Rohit and Pooja in Front Office. &rdquo;
          </p>
          <p>~ Rajan Narula</p>
        </SwiperSlide>

        <SwiperSlide className="pt-2 lg:pt-4">
          {/* <p>3 years ago</p> */}
          <StarRating rating={5} />
          <p className="text-sm w-[80%] mx-auto lg:text-3xl py-4 font-semibold">
            &ldquo; Best Doctor I Ever seen  Dr manish sir is understanding and greatest one but staff specially girls they are soo rude and confused, attitude on top. Not understand what patients feel and always fix there option as I said always. 
            &rdquo;
          </p>
          <p>~ Heena Saifi </p>
        </SwiperSlide>

        <SwiperSlide className="pt-2 lg:pt-4">
          {/* <p>3 years ago</p> */}
          <StarRating rating={5} />
          <p className="text-sm w-[80%] mx-auto lg:text-2xl py-4 font-semibold">
            &ldquo; I recently underwent LASIK surgery with Dr. Manish Aggarwal,
            and I couldn’t be happier with the results. From the initial
            consultation to the post-operative care, Dr. Aggarwal and his team
            were professional, informative, and supportive. The procedure was
            quick and virtually painless, and my vision has improved
            dramatically now which is 6/6😃. I highly recommend Dr. Aggarwal for
            anyone considering LASIK. His expertise and care made all the
            difference! &rdquo;
          </p>
          <p>~ Anu Gautam</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
