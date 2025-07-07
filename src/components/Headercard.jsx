import React from "react";

const Headercard = ({
  desktopImage,
  mobileImage,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className=" lg:pt-24 py-24 lg:py-9">
      <div className="relative">
        <img
          src={desktopImage}
          alt="desktop view"
          className="w-full h-[40vh] object-center object-fill absolute sm:block hidden"
        />
        <img
          src={mobileImage}
          alt="mobile view"
          className="w-full h-full  absolute object-center object-fill sm:hidden"
        />
        <div className="text-xl relative  bg-gradient-to-r from-gray-800 to-transparent w-full lg:h-[40vh] top-0 md:p-16 p-6 flex flex-col justify-between ">
          <div>
            <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">
              {title}
            </h1>
            <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12 2xl:pr-12 mt-4">
              {description}
            </p>
          </div>
          <div className="md:mt-12 mt-20">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headercard;
