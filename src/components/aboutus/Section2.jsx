import React from "react";
import TeamCard from "../Teamcard";
import docImg from "../public/Images/dr_manish.jpg";
import docImg2 from "../public/Images/dr_rinki.jpg";
import docImg3 from "../public/Images/dr_vivek.jpg";
import docImg4 from "../public/Images/dr_ashu.jpg";
import docImg5 from "../public/Images/dr_shruti.jpg";

const teamMembers = [
  {
    imageUrl: docImg,
    name: "Dr. Manish Agrawal",
    role: "MBBS, MS, FSEH",
    altText: "woman smiling",
  },
  {
    imageUrl: docImg2,
    name: "Dr. Rinki",
    role: "MBBS, MS (Ophthalmology) ",
    altText: "woman in black dress",
  },
  {
    imageUrl: docImg3,
    name: "Dr. Vivek Kumar Pathak",
    role: "MBBS, MS (ENT)",
    altText: "woman smiling",
  },
  {
    imageUrl: docImg4,
    name: "Dr. Anshu Arora",
    role: "MBBS MS",
    altText: "man smiling",
  },
  {
    imageUrl: docImg5,
    name: "Dr. Shruti Agrawal",
    role: "MBBS DNB(ENT)",
    altText: "woman smiling",
  },
];

const Section2 = () => {
  return (
    <div className="xl:mx-auto xl:container 2xl:px-20 px-6 py-16 lg:py-24">
      <h1 className="text-5xl font-semibold leading-10 text-gray-800 text-center">
        Dedicated Team of Professionals
      </h1>

      <p className=" lg:px-0 px-4 text-base leading-6 text-center mt-6">
        The team of doctors at Drishti EYE And ENT Care are highly qualified and
        one of the best in their own super-specialties. The doctors and the
        management ensure that the patients get the best possible treatment in a
        very friendly and convenient manner.
      </p>

      <div className="flex flex-wrap  xl:justify-between justify-center mt-16 gap-4">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            imageUrl={member.imageUrl}
            name={member.name}
            role={member.role}
            altText={member.altText}
          />
        ))}
      </div>
    </div>
  );
};

export default Section2;
