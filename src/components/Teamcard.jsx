import React from "react";
import Image from "next/image";

const Teamcard = ({ imageUrl, name, role, altText }) => {
  return (
    <div className="lg:w-96 w-80">
      <Image
        src={imageUrl}
        width={100}
        height={100}
        className="h-72 w-full object-contain object-center rounded-t-md"
        alt={altText}
      />
      <div className="bg-white shadow-md rounded-md py-4 text-center">
        <p className="text-base font-medium leading-6 text-gray-600">{name}</p>
        <p className="text-base leading-6 mt-2 text-gray-800">{role}</p>
      </div>
    </div>
  );
};

export default Teamcard;
