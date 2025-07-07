"use client";
import React, { useState } from "react";

const Sec1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT082zd07dlMPBT9MNCdIgk0FUcyU3PkhtSxQ&s",
      title: "Glaucoma Services",
      description:
        "Glaucoma, caused by increased pressure inside the eyeball, can lead to permanent vision loss if untreated. It is of two types: **Acute Congestive Glaucoma**, which presents with sudden pain, eye congestion, and rapid vision loss, and **Chronic Simple Glaucoma**, a more insidious form causing gradual, painless vision loss, often diagnosed late when significant damage has already occurred.  The elevated pressure hampers blood supply to the optic nerve, leading to optic atrophy and irreversible vision impairment. Early diagnosis is crucial, with regular intraocular pressure checks every six months after age 40. Treatment includes anti-glaucoma medications, surgical intervention to create a drainage hole for excess fluid, or advanced laser treatments like YAG laser trabeculoplasty available at our center. Protect your vision with timely care at Drishti Eye & ENT Care.",
    },

    {
      id: 2,
      image:
        "https://www.swansea.ac.uk/health-social-care/research/sche/collaborations/Diabetic-Retinopathy.jpg",
      title: "Diabetic eye screening",
      description:
        "Diabetic eye screening is a vital part of diabetes care, as it helps detect diabetic retinopathy, a condition that can lead to permanent sight loss if untreated. Diabetic retinopathy is a leading cause of vision loss, particularly among working-age individuals, and occurs when high blood sugar levels damage the small blood vessels in the retina. When the central area of the retina, called the macula, is affected, it is known as diabetic maculopathy. People with diabetes should undergo regular eye tests with their optician every two years. While diabetic eye screening focuses on detecting diabetic retinopathy, it is not intended for diagnosing other eye conditions. Early detection through screening is crucial for preventing severe vision impairment, allowing timely intervention and treatment to preserve eye health.",
    },
    {
      id: 3,
      image: "https://bhartieyefoundation.in/img/Squint-Surgery.webp",
      title: "Squint Correction with Glasses",
      description:
        "In certain cases, squint or strabismus can be corrected without surgery by using specially prescribed glasses. At Drishti Eye & ENT Care, we assess the type and severity of the squint to determine whether corrective lenses can align the eyes and improve vision. This approach is particularly effective for children, as their eyes are still developing, and early treatment can prevent complications like amblyopia. Regular follow-ups ensure the glasses are working effectively, and adjustments are made as needed. Non-surgical correction offers a safe, simple, and effective solution to restore proper eye alignment and improve visual function.",
    },

    {
      id: 4,
      image:
        "https://3.imimg.com/data3/NS/TR/MY-10171223/contact-lens-services-500x500.jpg",
      title: "Contact Lens Services",
      description:
        "At our center, we offer all types of contact lenses to correct various refractive errors. Myopia, or nearsightedness, occurs when light rays focus in front of the retina due to an excessively long eyeball, and is corrected with minus lenses. Hypermetropia, or farsightedness, is the opposite and is corrected with plus lenses. Astigmatism happens when light rays fail to focus on the retina in one meridian and is corrected with cylindrical lenses that have an axis reading. Contact lenses offer several advantages over spectacles, including a wider visual field, more natural vision, and the ability to engage in activities like playing sports or swimming without glasses. Contact lenses are worn on the outer surface of the eye and are removed before sleep, with training provided for their use. We also offer cosmetic contact lenses in various colors, such as gray, brown, light blue, and green, which can be worn even without a refractive error.",
    },
  ];

  const openModal = (cardId) => {
    setActiveCard(cardId);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setActiveCard(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white border rounded-lg shadow-md p-2 text-center"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>

            <button
              onClick={() => openModal(card.id)}
              className="rounded-md px-4 w-full lg:text-xl text-white hover:text-indigo-600 border border-indigo-600 bg-indigo-600 hover:bg-white py-2"
            >
              Explore
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && activeCard && (
        <div
          className="fixed inset-0 overflow-auto bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">
              {cards[activeCard - 1].title}
            </h2>
            <p className="mb-4 text-sm  lg:text-md">
              {cards[activeCard - 1].description}
            </p>
            <img
              src={cards[activeCard - 1].image}
              alt={cards[activeCard - 1].title}
              className="w-full lg:h-[290px] object-cover rounded-md mb-4"
            />
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sec1;
