"use client";
import Nav from "./Nav";
import Link from "next/link";

function NavBar() {
  return (
    <div>
      <nav className="w-full top-0  fixed left-0 right-0 z-10">
        
        {/* <div className="bg-gradient-to-r from-indigo-600 to-cyan-400 lg:px-24 ">
          
          <div className="flex flex-row text-center mx-auto gap-4  lg:h-16  px-16 lg:px-4">
           
          <div className=" lg:px-6 text-center mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
            <div className=" flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-3 h-3 lg:w-5 lg:h-5"
              >
                <path d="M8 16.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75z" />
                <path
                  fill-rule="evenodd"
                  d="M4 4a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V2.5h1A1.5 1.5 0 0114.5 4v12a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 16V4A1.5 1.5 0 017 2.5h1z"
                  clip-rule="evenodd"
                />
              </svg>
              <Link href="/"><span className="cursor-pointer text-[14px] lg:text-sm hover:text-red-400">+91- 00000000000</span> </Link>
            </div>
            <div className=" flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-3 h-3 lg:w-5 lg:h-5"
              >
                <path d="M3.5 2A1.5 1.5 0 002 3.5V5c0 1.149.15 2.263.43 3.326a13.022 13.022 0 009.244 9.244c1.063.28 2.177.43 3.326.43h1.5a1.5 1.5 0 001.5-1.5v-1.148a1.5 1.5 0 00-1.175-1.465l-3.223-.716a1.5 1.5 0 00-1.767 1.052l-.267.933c-.117.41-.555.643-.95.48a11.542 11.542 0 01-6.254-6.254c-.163-.395.07-.833.48-.95l.933-.267a1.5 1.5 0 001.052-1.767l-.716-3.223A1.5 1.5 0 004.648 2H3.5zM16.72 2.22a.75.75 0 111.06 1.06L14.56 6.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.22-3.22z" />
              </svg>
              <Link href="/"><span className="cursor-pointer text-[14px] lg:text-sm hover:text-red-400" >+91- 0000000000</span> </Link>
            </div>
            <div className=" flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-3 h-3 lg:w-5 lg:h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.106 6.447A2 2 0 001 8.237V16a2 2 0 002 2h14a2 2 0 002-2V8.236a2 2 0 00-1.106-1.789l-7-3.5a2 2 0 00-1.788 0l-7 3.5zm1.48 4.007a.75.75 0 00-.671 1.342l5.855 2.928a2.75 2.75 0 002.46 0l5.852-2.926a.75.75 0 10-.67-1.342l-5.853 2.926a1.25 1.25 0 01-1.118 0l-5.856-2.928z"
                  clip-rule="evenodd"
                />
              </svg>
              <Link href="/"><span className="cursor-pointer text-[10px] lg:text-sm hover:text-red-400">abc@gmail.com</span> </Link>
            </div>
            </div>
          </div>

        </div> */}

        

        <Nav />
      </nav>
    </div>
  );
}

export default NavBar;