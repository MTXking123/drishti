import Link from "next/link";
import React from "react";
function Footernew() {
  return (
    <div className="pt-24 border-gray-300  border-t">
      <div className="w-full  lg:w-[80%] mx-auto justify-center ">
        <div className="container mx-auto py-12">
          <div className="xl:flex lg:flex md:flex pt-6">
            <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0">
              <div className="flex items-center mb-6 xl:mb-0 lg:mb-0">
                {/* <svg className="w-12 h-12" id="logo" enableBackground="new 0 0 300 300" height={44} viewBox="0 0 300 300" width={43} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g>
                                        <path
                                            fill="#4c51bf"
                                            d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                                        />
                                    </g>
                                </svg> */}
                <p className="ml-3 font-bold text-xl lg:text-4xl">
                  Drishti Eye & ENT Care{" "}
                </p>
              </div>
            </div>

            <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
              <ul>
                <li className="text-gray-800 font-bold text-xl mb-6">
                  Quick Links
                </li>
                <li className="hover:underline text-base text-gray-600 hover:text-gray-700 mb-5">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:underline text-base text-gray-600 hover:text-gray-700 mb-5">
                  <Link href="/pages/about">About Us</Link>
                </li>
                <li className="hover:underline text-base text-gray-600 hover:text-gray-700 mb-5">
                  <Link href="/pages/services">Services</Link>
                </li>
                <li className="hover:underline text-base text-gray-600 hover:text-gray-700 mb-5">
                  <Link href="/pages/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
              <ul>
                <li className="text-gray-800 font-bold text-xl mb-6">
                  Services
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <Link href="/pages/services">
                    Stitchless Cataract Surgery
                  </Link>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <Link href="/pages/services">
                    Femtosecond Cataract Surgery
                  </Link>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <Link href="/pages/services">Lasik Surgery</Link>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <Link href="/pages/services">Femtosecond LASIK</Link>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <Link href="/pages/services">ICL Surgery</Link>
                </li>
                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                  <Link href="/pages/services">Glaucoma Services</Link>
                </li>

                <li className="hover:underline text-base text-gray-600 hover:text-gray-700 mb-5">
                  <Link href="/pages/services">Explore More...</Link>
                </li>
              </ul>
            </div>
            {/* <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex xl:justify-end pl-3 sm:pl-0">
                            <ul>
                                <li className="text-gray-800 font-bold text-xl mb-6">Resources</li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <a href="javascript:void(0)">Accessibility</a>
                                </li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <a href="javascript:void(0)">Usability</a>
                                </li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <a href="javascript:void(0)">Marketplace</a>
                                </li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <a href="javascript:void(0)">Design &amp; Dev</a>
                                </li>
                                <li className="text-base text-gray-600 hover:text-gray-700 mb-5">
                                    <a href="javascript:void(0)">Marketplace</a>
                                </li>
                            </ul>
                        </div> */}
          </div>
          <div className="xl:flex flex-wrap justify-between xl:mt-24 mt-16 pb-6 pl-3 sm:pl-0">
            <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
              <p className="text-gray-800 text-base">
                © 2024. All rights reserved
              </p>
            </div>
            <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0">
              <ul className="xl:flex lg:flex md:flex sm:flex justify-between">
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a href="javascript:void(0)">Terms of service</a>
                </li>
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a href="javascript:void(0)">Privacy Policy</a>
                </li>
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a href="javascript:void(0)">Security</a>
                </li>
                <li className="text-gray-800 hover:text-gray-900 text-base mb-4 sm:mb-0">
                  <a href="javascript:void(0)">Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="w-11/12 xl:w-1/6 lg:w-1/6 sm:w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 mt-8 lg:mt-8 xl:mt-0">
              <div className="flex justify-start sm:justify-start xl:justify-end space-x-6 pr-2 xl:pr-0 lg:pr-0 md:pr-0 sm:pr-0">
                <div>
                  <Link href="https://x.com/drishtieye16171?t=fGFns_e0a0JmaIXOdpi_VA&s=09">
                    <svg
                      aria-label="X"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-x"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#000000"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M7 4l10 16" />
                      <path d="M17 4l-10 16" />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link href="https://www.instagram.com/drishtieyeandentcare/">
                    <svg
                      aria-label="Instagram"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#718096"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram"
                    >
                      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link href="https://www.facebook.com/drishtieyevaishali?mibextid=ZbWKwL">
                    <svg
                      aria-label="Facebook"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-facebook"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#1877F2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 10v-2a2 2 0 0 1 2-2h2v-3h-3a5 5 0 0 0-5 5v2h-2v3h2v9h4v-9h3l1-3h-4z" />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link href="javascript:void(0)">
                    <svg
                      aria-label="YouTube"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-youtube"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#FF0000"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={3} y={5} width={18} height={14} rx={4} />
                      <path d="M10 9l5 3-5 3z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footernew;
