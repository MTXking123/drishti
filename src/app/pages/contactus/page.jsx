import Headercard from "@/components/Headercard";
import Whatsapp from "@/components/Whatsapp";
import React from "react";
export default function page() {
  return (
    <>
      <Headercard
        desktopImage="https://socaleye.com/wp-content/uploads/2021/07/Eye-Exam.jpg"
        mobileImage="https://i.ibb.co/LQpxBsc/mobile.png"
        title="Contact Us"
        // description="A good idiom for kids is 'It's raining cats and dogs.' Kids know what both cats and dogs are from an early age."
      />
      <div className="py-1 lg:py-12  relative">
        <img
          src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
          className="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden"
          alt="map"
        />
        <div className="xl:mx-auto xl:container  relative ">
          <div className="flex flex-wrap xl:mx-auto xl:container">
            <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
              <img
                src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
                className="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden"
                alt="map"
              />
              <div className="w-full flex flex-col items-start  xl:justify-start  relative xl:px-0 px-4 xl:py-0 py-4">
                <div className="w-full 2xl:pl-48 xl:pt-1">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">
                    We’re Here
                  </h1>
                  <div className="w-full md:w-10/12 mt-3">
                    <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">
                      We believe digital innovation is at the heart of every
                      business success
                    </h2>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                        Address
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        Plot no 8 sec 5 vaishali ghaziabad UP 201010
                      </h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                        Contact
                      </h2>

                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        +91 9312023087
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        01204965656
                      </h2>
                    </div>

                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm md:text-base text-indigo-700 font-semibold">
                        Email
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        drishtieyecare17@gmail.com
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        drishtieyeandentcare@gmail.com
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24  relative">
              {/* <img src="https://lh5.googleusercontent.com/proxy/7Ai3cu3k3Dro5RJzDYrvVJuMg6xbsfBxKz4r9Bf0573NWnXtmEk3u-6OulMr5RqrLXVeciymPDKJ7gHTZSTX4sveDAiJzoK_alhsapaZgR_PX_jcsVGjyVIIB99BL3uGBQ" className="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden" alt="map" /> */}
              <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-indigo-700">
                  Let’s Talk
                </h1>
                <div className="w-full 2xl:w-8/12 mt-3">
                  <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">
                    For enquiries, please email us using the form below
                  </h2>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">Name</p>
                    <input
                      className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800"
                      type="text"
                      placeholder="Justin Timberlake"
                    />
                  </div>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">
                      Email Address
                    </p>
                    <input
                      className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800"
                      type="email"
                      placeholder="example@mail.com"
                    />
                  </div>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">
                      Message
                    </p>
                    <textarea
                      className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800"
                      type="text"
                      placeholder="Write us something..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="py-5">
                    <button className="py-3 md:py-5 px-5 md:px-10 bg-gray-900 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Whatsapp />
    </>
  );
}
