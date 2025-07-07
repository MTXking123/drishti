"use client";
import React, { useState } from "react";

const Sec2 = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [activeCard, setActiveCard] = useState(null);
    
      const cards = [
        {
          id: 1,
          image:
            "https://magruderlaservision.com/wp-content/uploads/2018/03/operating-room-eye-surgery-HFDT3VJ-scaled.jpg",
          title: "Stitchless Cataract Surgery",
          description:
            "Cataracts, which cause clouding of the natural lens of the eye, can significantly impair vision and reduce quality of life. At **Drishti Eye & ENT Care**, we offer **stitchless cataract surgery**, an advanced and minimally invasive procedure designed to restore clear vision effectively and comfortably. This technique involves making a tiny incision (as small as 1.8mm to 2.8mm) to remove the cloudy lens, which is then replaced with a high-quality artificial lens (Intraocular Lens or IOL). Unlike traditional cataract surgery, this method does not require stitches, ensuring quicker healing, minimal discomfort, and reduced risk of complications. Patients benefit from improved visual outcomes and can return to their daily activities much sooner. With our state-of-the-art technology and skilled surgeons, stitchless cataract surgery at Drishti Eye & ENT Care is a safe, efficient, and life-changing solution for restoring clear vision.",
        },
        {
          id: 2,
          image:
            "https://myvision.org/wp-content/uploads/2022/04/woman-getting-laser-cataract-surgery.jpg",
          title: "Femtosecond Cataract Surgery",
          description:
            "Femtosecond Cataract Surgery is a cutting-edge advancement that enhances precision and safety in cataract treatment. Using a femtosecond laser guided by real-time imaging, it creates highly accurate tissue planes, offering greater repeatability than manual methods. This technology allows for precise correction of astigmatism during surgery and improves outcomes for patients with presbyopia-correcting intraocular lenses (IOLs). It is particularly beneficial in complex cases, such as Fuchs’ dystrophy, dense corneal guttata, subluxated lenses, and advanced cataracts, ensuring improved safety and better visual outcomes.",
        },
        {
          id: 3,
          image:
            "https://eyemantra.in/wp-content/uploads/2022/06/How-Much-Does-LASIK-Surgery-Cost-in-Delhi.jpg.webp",
          title: "Phacoemulsification Cataract Surgery",
          description:
            "Phacoemulsification is a state-of-the-art cataract surgery technique that uses ultrasound energy to break the cataract into tiny pieces, which are then gently removed through a small incision. This minimally invasive procedure ensures faster recovery and minimal discomfort. At Drishti Eye & ENT Care, phacoemulsification is performed with precision, followed by the implantation of an intraocular lens (IOL) to restore clear vision. Patients can resume daily activities within a short period and enjoy improved visual quality. The procedure’s high safety profile and effectiveness make it a preferred choice for cataract management.  ",
        },
    
        {
          id: 4,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT082zd07dlMPBT9MNCdIgk0FUcyU3PkhtSxQ&s",
          title: "Glaucoma Laser Treatment",
          description:
            "Laser treatment for glaucoma offers a safe and effective alternative for reducing intraocular pressure in cases where medications alone are insufficient. Techniques like Selective Laser Trabeculoplasty (SLT) and Laser Peripheral Iridotomy (LPI) are commonly used. At Drishti Eye & ENT Care, we utilize advanced laser technology to enhance fluid drainage or create openings to relieve pressure. The procedures are minimally invasive, quick, and virtually painless, making them suitable for a wide range of patients. Early intervention with laser treatment can help slow disease progression, protect the optic nerve, and preserve vision.",
        },
    
        {
          id: 5,
          image:
            "https://www.swansea.ac.uk/health-social-care/research/sche/collaborations/Diabetic-Retinopathy.jpg",
          title: "Diabetic Retinopathy Laser Treatment",
          description:
            "Diabetic eye screening is a vital part of diabetes care, as it helps detect diabetic retinopathy, a condition that can lead to permanent sight loss if untreated. Diabetic retinopathy is a leading cause of vision loss, particularly among working-age individuals, and occurs when high blood sugar levels damage the small blood vessels in the retina. When the central area of the retina, called the macula, is affected, it is known as diabetic maculopathy. People with diabetes should undergo regular eye tests with their optician every two years. While diabetic eye screening focuses on detecting diabetic retinopathy, it is not intended for diagnosing other eye conditions. Early detection through screening is crucial for preventing severe vision impairment, allowing timely intervention and treatment to preserve eye health.",
        },
        {
          id: 6,
          image: "https://bhartieyefoundation.in/img/Squint-Surgery.webp",
          title: "Squint Surgery",
          description:
            "In certain cases, squint or strabismus can be corrected without surgery by using specially prescribed glasses. At Drishti Eye & ENT Care, we assess the type and severity of the squint to determine whether corrective lenses can align the eyes and improve vision. This approach is particularly effective for children, as their eyes are still developing, and early treatment can prevent complications like amblyopia. Regular follow-ups ensure the glasses are working effectively, and adjustments are made as needed. Non-surgical correction offers a safe, simple, and effective solution to restore proper eye alignment and improve visual function.",
        },
        {
          id: 7,
          image: "https://cosmoseyecare.in/wp-content/uploads/2019/05/Retina.png",
          title: "Retinal Detachment Surgery",
          description:
            "Retinal detachment is a medical emergency that requires immediate surgical intervention to prevent permanent vision loss. At Drishti Eye & ENT Care, we offer advanced surgical techniques such as vitrectomy and scleral buckling to repair the detachment and restore retinal function. These procedures involve reattaching the retina to its proper position and sealing any tears with laser or cryotherapy. Post-surgery care includes regular follow-ups and vision rehabilitation. With prompt treatment and expert surgical care, retinal detachment surgery significantly improves the chances of preserving and recovering vision.", //   },
        },
        {
          id: 8,
          image:
            "https://images.ctfassets.net/u4vv676b8z52/7oIbNPEKLs40KQT76Aata/ed24d7f141eca28f73c08d13be468fdd/cornea_transplant.png?fm=jpg&q=80",
          title: "Corneal Transplantation",
          description:
            "At Drishti Eye & ENT Care, we perform corneal transplants to replace a damaged or diseased cornea with healthy donor tissue, helping restore vision and improve quality of life. This procedure is beneficial for patients with conditions such as keratoconus, corneal scars, and endothelial dystrophy. Our expert surgeons use advanced techniques, including Femtosecond laser technology for precise incisions and partial thickness transplants like DMEK (Descemet’s Membrane Endothelial Keratoplasty). These methods offer quicker recovery, reduced discomfort, and lower rejection rates, resulting in better visual outcomes. We provide personalized care with thorough pre- and post-operative support to ensure optimal healing and vision restoration. If you're experiencing vision loss due to corneal disease, we encourage you to consult us about a potential corneal transplant.",
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
  )
}

export default Sec2