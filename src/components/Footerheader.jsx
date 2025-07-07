import React from "react";
function Footerheader() {
  return (
    <div className="bg-red-700 overflow-y-hidden">
      <div className="">
        <div className="w-full flex justify-center">
          <div className="w-full md:py-8 md:px-8 px-5 py-4  ">
            <div>
              <div className="  lg:w-[80%] mx-auto flex flex-wrap items-center md:flex-row flex-col-reverse">
                <div className=" w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                  <div className="">
                    <h1
                      role="heading"
                      className="   text-white  leading-6 lg:leading-10 md:text-left"
                    >
                      If you Have Any Questions Schedule an Appointment <br/>
                      <span className="text-xl font-semibold  md:text-2xl">

                      With Our Eye Specialist in Delhi or Call: +919650772233
                      </span>
                    </h1>
                    <button
                    role="button"
                    aria-label="Join the community"
                    className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                  >
                    Contact Us
                  </button>
                  </div>

              
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footerheader;
