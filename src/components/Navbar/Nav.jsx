"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import logo1 from "../../public/Images/Main_logo.png";

import { useState } from "react";



const Nav = () => {
  const [navbar, setNavbar] = useState(false);


  const phoneNumber = "9312023087"; // Replace with your phone number (in international format)
  const message = "Hello , I want to book an appointment!"; // Customize your message


  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;


  return (
    <div className="sticky top-0 z-6">
      <div className=" bg-white shadow-md  z-[50]">
        <div className=" justify-between py-4 lg:py-0 px-4 mx-auto lg:max-w-8xl  md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex  items-center justify-between py-0 md:py-0 md:block">
              <Link href="/">
                <Image
                  src={"/images/logo2.jpeg"}
                  height={900}
                  width={900}
                  alt="dd"
                  className="w-[90px] lg:w-[170px]"
                />
              </Link>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src={"/Images/close.jpg"}
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none rounded-md active:border-none"
                    />
                  ) : (
                    <Image
                      src={"/Images/open.jpg"}
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none rounded-md active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <Link href="/" onClick={() => setNavbar(!navbar)}>
                  <li className="pb-4 text-xl  py-4 md:px-6 text-center  hover:bg-[#4c9dbd]   md:hover:underline md:hover:bg-transparent">
                    Home
                  </li>
                </Link>

                <Link href="/pages/about" onClick={() => setNavbar(!navbar)}>
                  <li className="pb-4 text-xl  py-4 md:px-6 text-center  hover:bg-[#4c9dbd]   md:hover:underline md:hover:bg-transparent">
                    {" "}
                    About Us
                  </li>
                </Link>

                <Link href="/pages/services" onClick={() => setNavbar(!navbar)}>
                  <li className="pb-4 text-xl  py-4 md:px-6 text-center  hover:bg-[#4c9dbd]   md:hover:underline md:hover:bg-transparent">
                    {" "}
                    Services
                  </li>
                </Link>

                <Link
                  href="/pages/contactus"
                  onClick={() => setNavbar(!navbar)}
                >
                  <li className="pb-4 text-xl  py-4 md:px-6 text-center  hover:bg-[#4c9dbd]   md:hover:underline md:hover:bg-transparent">
                    {" "}
                    Contact Us
                  </li>
                </Link>

                <Link 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setNavbar(!navbar)}>
                  <li className="text-xl justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-red-800 font-medium leading-none text-white py-4 px-4 bg-gray-800 flex items-center">
                    Book Appointment
                  </li>
                </Link>

               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
