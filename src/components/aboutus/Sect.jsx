import React from "react";

const Section1 = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-12 lg:px-20  md:px-6 py-1 px-4">
      <div className="lg:w-12/12 w-full">
        <h1 className="text-5xl font-semibold leading-10 text-gray-800 text-center">
          About Us
        </h1>



        <div className="lg:mt-14 sm:mt-10 mt-12">
          <img
            className=" w-full"
            src="https://www.laxmieye.org/blog/wp-content/uploads/2024/03/5_vorteile_der_femto_lasik_korrektur_von_fehlsichtigkeit-www.jpg"
            alt="Group of people Chilling"
          />
          {/* <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Group of people Chilling" /> */}
          {/* <img className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Group of people Chilling" /> */}
        </div>

        <div className="font-normal text-base leading-6 text-gray-600 mt-6">
          <li className="py-1">
            Drishti Eye And ENT Care Is in vaishali sec-5, Ghaziabad which
            provides comprehensive super-specialty eye care services using the
            best in technology and skills.
          </li>
          <li className="py-1">The Centre is NABH Accredited.</li>
          <li className="py-1">
            The Centres are equipped with the cutting edge technology with the
            latest machines to provide advanced eye care services. We receive
            regular referrals from our Ophthalmic and Physician colleagues to
            manage their difficult cases.
          </li>
          <li className="py-1">
            The Excellent Infrastructure facility is supplemented with a very
            motivated and dedicated team of staff members who are willing to go
            an extra mile to make the patients comfortable and to ensure the
            quality of services and the safety of the patients and the
            attendants.
          </li>
          <li className="py-1">
            The Centres are equipped with the cutting edge technology with the
            latest machines to provide advanced eye care services. We receive
            regular referrals from our Ophthalmic and Physician colleagues to
            manage their difficult cases.
          </li>
          {/* <li className="py-1"><span className="font-bold">Pediatric Ophthalmology: </span> Specialized care for children’s eye health.  </li> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:flex items-center w-full ">
            <img
              className=" w-full py-9"
              src="https://images.ctfassets.net/u4vv676b8z52/4SfqmdOhLVp0z28Vyo8ECA/24713a068e6213dd85570de29183800b/Hero_Article_EnUK_Vision-Surgery-IntraLasik.jpg?fm=jpg&q=80"
              alt="people discussing on board"
            />
          </div>

          <div className="py-4">
            <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
              World Class Facility
            </h2>

            <p className="py-2 font-normal text-base leading-6 text-gray-600">
              Our expert team of Doctors is ably supported by a very motivated
              and dedicated team of staff members and a wide array of latest
              machines with the cutting edge technology to provide the very best
              advanced eye care services.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:mt-14 sm:mt-10 mt-12">
        <img
          className=" w-full"
          src="https://static.royacdn.com/Site-53e7879a-9243-4f6b-8c8e-41f62998e8d6/inside_banner/ib4.jpg"
          alt="Group of people Chilling"
        />
        {/* <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Group of people Chilling" /> */}
        {/* <img className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Group of people Chilling" /> */}
      </div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            Cashless and Mediclaim
          </h2>

          <p className="font-normal text-base leading-6 text-gray-600 mt-4">
            Our NABH Accredited Centre is empanelled with CGHS, DGEHS, ECHS, and
            many other Govt. Panels and with almost all Insurance TPAs.
          </p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2 ">
          <img
            className=" w-full"
            src="https://w0.peakpx.com/wallpaper/362/690/HD-wallpaper-drop-in-the-eye-eye-treatment-concepts-medicine-eyes-ophthalmology-concepts.jpg"
            alt="people discussing on board"
          />
          {/* <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" /> */}
          {/* <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" /> */}
        </div>
      </div>
    </div>
  );
};

export default Section1;
