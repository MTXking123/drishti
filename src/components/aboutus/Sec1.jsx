"use client";
import React, { useState } from "react";

const Sec1 = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      src: "/images/dr_manish.jpg",
      name: "Dr. Manish Agrawal",
      role: "MBBS, MS, FSEH",
      altText: "woman smiling",
      description: "Founder And Medical  Director Of Drishti Eye  and ENT Care.Degrees MBBS, MS ,FSCEH, Fellow  LV Prasad Eye Institute(Hyedrabad),Fellow  Dr Shroff Charity Eye Hospital (Delhi)  EXPERIENCE - 20 Year Experience in OphthalmologyEx Senior Consultant at Max Hospital(vaishali)Ex Senior Consultant at Shroff  Eye HospitalEx Senior Consultant at Pushpanjali crosslay Hospital Specialities Cataract and Refractive,Glaucoma,Medical Retina Dr. Manish Agralwal  is the Founder, Director and Senior Eye Surgeon at Drishti Eye and ENT Care. He has spent 10 years at the prestigious and premier Medical Institutes of India, where he received his training and work experience. He established his eye centre in 2009. Since then, his organization has expanded with addition  senior eye surgeons. Currently he is a leading a very competent team of experts in various sub-specialties of eye diseases, who work at Drishti Eye And ENT Care.Dr. Manish Agrawal  has expertise in dealing with all kinds of eye surgeries, investigations and lasers. He has been trained and has a special interest in managing Cataract(Phacoemulsification) and Refractive surgery( LASIK,ICL ),Medical Retina,Glaucoma . He has performed more than 20,000 successful surgical procedures so far . He is the member of National and International Ophthalmic Associations.Dr. Agrawal  has a passion for education. He is actively involved in giving public lectures to educate the common people regarding the eye care tips and precautions. He likes to educate the patients and their relatives regarding their eye diseases and involves them in their eye care and decision making.",
    },
    {
      src: "/images/dr_rinki.jpg",
      name: "Dr. Rinki",
      role: "MBBS, MS (Ophthalmology)",
      altText: "woman in black dress",
      description: "I am a dedicated ophthalmologist with over 8 years of clinical and surgical experience gathered from prestigious and renowned institutes of the country. I completed my post graduation as well as senior residency from AIIMS,New Delhi following which I served as an Assistant professor in LHMC and GNEC. I also conducted RAAB survey as a part if community service. I am skilled in surgical subspecialities pertaining to cataract,cornea,refractive,ocular surface, squint and oculoplasty along with wide experience in efficient and effective management of general OPD. Besides clinical knowledge,I also have a passion for teaching and research and have my academic presence recognized in multiple national and international journals and conferences.  My professional aspiration is to deliver my best in patient care simultaneously excelling in academics and research. ",
    },
    {
      src: "/images/dr_anshu.jpg",
      name: "Dr. Anshu Arora",
      role: "MBBS MS",
      altText: "man smiling",
      description: "MBBS, MS - Ophthalmology, Ophthalmologist/Eye SurgeonDr. Anshu Arora (MS, FMRF, FRCS Glasgow) Is a Young but Experienced Vitreoretinal Surgeon at Delhi, Noida, He Specializes in Diagnosing and Treating Vitreoretinal Diseases and Uveitis. He Did His Medical Schooling From Kasturba Medical College Manipal and Followed His Interest in the Sub Speciality of Vitreoretinal and Uvea by Persuing Fellowship at the Prestigious Sankara Nethralaya, Chennai. He Remained the Top Achiever at His Medical School With Gold Medal in MS Ophthalmology in the Year 2003. This Was Followed by the Prestigious Fellow Award at Sankara Nethralaya in 2006. He Is Also a Member and Fellow of Royal College of Physicians and Surgeons (RCPGS), Glasgow, UK.He Enjoys a Reputation as a Result Oriented Vitreo-Retinal Surgeon and Is Sought by Colleagues for Difficult Surgical Cases. An Important Part of His Work Is Educating Patients About the Common Retinal Problems Like Diabetic Retinopathy and Ways to Prevent Visual Loss. He Is Armed With the Knowledge of Latest Developments in the Field of Surgical as Well as Medical Retina and Believes in Ethical Management of His Patients With Evidence-Based Medicine. He Has Performed More Than 3000 Complex Vitreoretinal Surgeries and Similar Number of Cataract Surgeries. "
    },
    {
      src: "/images/dr_shruti.jpg",
      name: "Dr. Shruti Agrawal",
      role: "MBBS DNB(ENT)",
      altText: "woman smiling",
      description: "mbbs dns (ent).",
    },
    {
      src: "/images/dr_rajesh.jpg",
      name: "Dr. Rajesh Khanna",
      role: "MBBS MS (SQUINT AND OCULOPLASTY)",
      altText: "woman smiling",
      description: "Dr. Rajesh Khanna is an accomplished ophthalmologist with over 31 years of experience specializing in cataract, glaucoma, oculoplastic, and squint surgeries. He completed his MBBS from University College of Medical Sciences and Safdarjung Hospital, New Delhi in 1985 and his post-graduation in Ophthalmology from Maulana Azad Medical College and Guru Nanak Eye Centre, New Delhi in 1992. He cleared the Basic and Clinical Sciences Examinations conducted by the International Council of Ophthalmology in 1999 and 2000 and attended the Advanced Course in Ophthalmology at the National University of Singapore in 2000. With a keen interest in oculoplastics, Dr. Khanna underwent an Observership in Oculoplasty and Glaucoma at Moorfields Eye Hospital, London in 2003.Throughout his career, Dr. Khanna has performed thousands of eye surgeries, including advanced cataract procedures such as phacoemulsification, MICS, and SICS. He has expertise in complex oculoplastic surgeries such as lacrimal sac operations (DCR, intubation, canaliculo-DCR, congenital duct block probing), eyelid surgeries for conditions like ptosis, entropion, ectropion, lid retraction in thyroid patients, punctum blockage, eyelid trauma management, contracted eye socket surgery, and various orbital procedures. He is also proficient in squint surgeries and the management of amblyopia (lazy eye) in children."
    },
  ];

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="xl:mx-auto xl:container 2xl:px-20 px-6 py-16 lg:py-24">
      <div className="mt-16 mb-16">
        <h1 className="text-5xl font-semibold leading-10 text-gray-800 text-center">
          Dedicated Team of Professionals
        </h1>
        <p className="lg:px-0 px-4 text-base leading-6 text-center mt-6">
          Drishti Eye Care is supported by a highly dedicated team of trained and
          caring staff who work tirelessly to provide the best possible care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md p-4 text-center transition-all duration-300"
          >
            <img
              src={card.src}
              alt={card.name}
              className="w-full h-[40vh]  rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{card.name}</h3>
            <p className="text-sm mb-2 text-gray-600">{card.role}</p>

            <button
              onClick={() => toggleCard(index)}
              className="rounded-md px-4 w-full lg:text-xl text-white hover:text-indigo-600 border border-indigo-600 bg-indigo-600 hover:bg-white py-2 transition-all duration-300"
            >
              {activeCard === index ? "Hide" : "View"}
            </button>

            {/* Roll-down section */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                activeCard === index ? "max-h-60 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-700 max-h-48 overflow-y-auto tracking-tight">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sec1;

