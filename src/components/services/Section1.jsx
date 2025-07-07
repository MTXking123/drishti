"use client";
import React, { useState } from "react";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";

const Section1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT082zd07dlMPBT9MNCdIgk0FUcyU3PkhtSxQ&s",
      title1: "Glaucoma Services",
      description1:
        "Glaucoma, caused by increased pressure inside the eyeball, can lead to permanent vision loss if untreated. It is of two types: **Acute Congestive Glaucoma**, which presents with sudden pain, eye congestion, and rapid vision loss, and **Chronic Simple Glaucoma**, a more insidious form causing gradual, painless vision loss, often diagnosed late when significant damage has already occurred.  The elevated pressure hampers blood supply to the optic nerve, leading to optic atrophy and irreversible vision impairment. Early diagnosis is crucial, with regular intraocular pressure checks every six months after age 40. Treatment includes anti-glaucoma medications, surgical intervention to create a drainage hole for excess fluid, or advanced laser treatments like YAG laser trabeculoplasty available at our center. Protect your vision with timely care at Drishti Eye & ENT Care.",
    },
    {
      id: 2,
      image1: "https://amdbook.org/sites/default/files/u3/OCT_Fig_3.JPG",
      title1: "OCT for Retina",
      description1:
        "At Drishti Eye & ENT Care, OCT is a revolutionary, non-invasive imaging technique that captures high-resolution, cross-sectional images of the retina, crucial for diagnosing and managing conditions like diabetic retinopathy, macular degeneration, retinal detachment, and macular edema. This painless, quick procedure allows our specialists to visualize intricate retinal layers, detect subtle abnormalities, and monitor changes over time. By providing early detection and personalized care, OCT helps preserve vision and improve overall eye health. For comprehensive retinal evaluation or vision issues, book your appointment at Drishti Eye & ENT Care today!",
    },
    {
      id: 3,
      image1:
        "https://www.swansea.ac.uk/health-social-care/research/sche/collaborations/Diabetic-Retinopathy.jpg",
      title1: "Diabetic eye screening",
      description1:
        "Diabetic eye screening is a vital part of diabetes care, as it helps detect diabetic retinopathy, a condition that can lead to permanent sight loss if untreated. Diabetic retinopathy is a leading cause of vision loss, particularly among working-age individuals, and occurs when high blood sugar levels damage the small blood vessels in the retina. When the central area of the retina, called the macula, is affected, it is known as diabetic maculopathy. People with diabetes should undergo regular eye tests with their optician every two years. While diabetic eye screening focuses on detecting diabetic retinopathy, it is not intended for diagnosing other eye conditions. Early detection through screening is crucial for preventing severe vision impairment, allowing timely intervention and treatment to preserve eye health.",
    },
    {
      id: 4,
      image1: "https://bhartieyefoundation.in/img/Squint-Surgery.webp",
      title1: "Squint Services",
      description1:
        "Squint, or misalignment of the eyes, occurs when the left and right eyes point in different directions. It is a common condition in children but can also develop later in life. The misalignment can be either permanent or temporary. Timely treatment is crucial, as untreated squint can lead to amblyopia, a condition where the brain ignores the images from the misaligned eye, resulting in permanent vision loss. At Drishti Eye & ENT Care, we specialize in managing squint cases across all age groups. Our experts evaluate the type of squint and determine the appropriate treatment, which may include corrective glasses or, in some cases, surgery. Delaying treatment can lead to permanent vision impairment due to amblyopia, so early intervention is key to preventing long-term eye problems.",
    },
    {
      id: 5,
      image1: "https://cosmoseyecare.in/wp-content/uploads/2019/05/Retina.png",
      title1: "Retina Services",
      description1:
        "The eye functions like a camera, with a lens in the front and a film (retina) at the back, about two centimeters behind the pupil. The retina, shaped like a small cup, converts the image into a signal sent to the brain. The macula, the central part of the retina, is responsible for straight-ahead vision and tasks involving fine detail, such as reading and recognizing faces. The surrounding retina aids in peripheral vision, helping with mobility but not fine tasks. The retina connects to the brain via the optic nerve, and blood vessels supply both the retina and optic nerve to maintain their health. In front of the retina is the vitreous cavity, filled with a gel-like substance. Diseases affecting the retina, vitreous, or optic nerve can lead to significant vision problems, but with modern diagnostic techniques and treatments, most of these conditions can now be effectively managed.",
    },

    {
      id: 6,
      image1:
        "https://www.researchgate.net/publication/333754091/figure/fig2/AS:771423798829066@1560933174721/Fundus-picture-Fundus-Fluorescein-Angiography-images-of-both-eyes-at-presentation.png",
      title1: "Fundus Fluorescein Angiography",
      description1:
        "Fundus fluorescein angiography (FFA) is a diagnostic procedure in which a fluorescent dye is injected into the bloodstream to highlight the blood vessels at the back of the eye for photographic analysis. This test is primarily used to manage eye disorders, confirm diagnoses, determine appropriate treatments, and monitor the condition of retinal blood vessels. During FFA, the dye circulates through the body, and since the retina is the only place where blood vessels are visible, it is used to observe the retinal vasculature. A special fundus camera, equipped with specific lens filters, captures images of the retina. When blue light shines on the retina, which has the fluorescein dye, the reflected light appears green, allowing detailed study of the retinal anatomy. If the retinal blood vessels are normal, the dye follows the usual path; blockages, leaks, or defects will cause abnormal patterns, providing valuable insights into the patient's condition.",
    },

    {
      id: 7,
      image1:
        "https://3.imimg.com/data3/NS/TR/MY-10171223/contact-lens-services-500x500.jpg",
      title1: "Contact Lens Services",
      description1:
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
    <div className="2xl:container 2xl:mx-auto lg:py-12 lg:px-20  md:px-6 px-4">
      {/* Grid layout */}

      <div className="flex flex-col items-center justify-center py-4 lg:py-8 ">
        <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">
          Our Services
        </h1>
        <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-11/12 md:w-10/12 w-11/12">
          At Drishti Eye & ENT Care, we offer a comprehensive range of advanced
          eye care and ENT services, including routine eye check-ups, cataract
          and glaucoma management, LASIK surgery, retina care, pediatric
          ophthalmology, and specialized ENT treatments, all tailored to ensure
          the best outcomes for our patients.
        </p>
      </div>

      <div>
        <h1 className="text-4xl py-6 lg:py-12 font-semibold leading-10 text-gray-800 text-center">
          Diagnostic Services
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border rounded-lg shadow-md p-2 text-center"
            >
              <img
                src={card.image1}
                alt={card.title1}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{card.title1}</h3>
              {/* <p className="text-sm text-gray-600 mb-4">{card.description}</p> */}
              <button
                onClick={() => openModal(card.id)}
                className="rounded-md px-4 w-full lg:text-xl text-white hover:text-indigo-600 border border-indigo-600 bg-indigo-600 hover:bg-white py-2"
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-4xl py-6 lg:py-12 font-semibold leading-10 text-gray-800 text-center">
          Treatment Services
        </h1>

        <h1 className="text-4xl py-6 lg:py-12 font-semibold leading-10 text-gray-800 text-left">
          Non-Surgical Treatments :
        </h1>

        <Sec1/>


        <h1 className="text-4xl py-6 lg:py-12 font-semibold leading-10 text-gray-800 text-left">
          Surgical and Advanced Treatment Services :
        </h1>

        <Sec2/>


      </div>

      {/* Modal 1 */}
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
              {cards[activeCard - 1].title1}
            </h2>
            <p className="mb-4 text-sm  lg:text-md">
              {cards[activeCard - 1].description1}
            </p>
            <img
              src={cards[activeCard - 1].image1}
              alt={cards[activeCard - 1].title1}
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

export default Section1;
