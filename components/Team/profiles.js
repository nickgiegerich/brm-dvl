import { useState } from "react";
import { Modal } from "./Modal";

const teamMembers = [
  {
    name: "Jen Gardner",
    title: "Family Nurse Practioner - Board Certified",
    picture:
      "data:image/jpeg;base64,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",
    desc1:
      "Jen Gardner is a Board-Certified Family Nurse Practitioner with over 15 years of experience in healthcare as a Registered Nurse. She graduated in 2005 with her Associate’s Degree in Nursing and completed her Bachelor’s Degree in 2007 at Idaho State University. Jen completed her Master of Science in Nursing Degree from the University of Southern Indiana and became a Certified Family Nurse Practitioner in 2020. Since graduating, she has been practicing in a small Family Medicine Clinic in Twin Falls.",
    desc2: "",
    desc3:
      "Jen believes the philosophies central to Functional and Integrative Medicine are what is often missing from the traditional American health care model. While she recognizes the value of modern allopathic medicine, Jen has encountered countless frustrated, confused, and over medicated patients who are desperate for answers and tired of living with chronic disease. She is passionate about partnering with her patients to find and address the root causes of illness and chronic disease and practicing wellness through in-depth, personalized evaluation, optimized nutrition, and holistic treatment of the whole person.",
    desc4:
      "Jen and her husband Kevin, who is also a Registered Nurse, have been married over 20 years. Together they have five sons, and love spending time as a family traveling, relaxing, and exploring all the beautiful outdoor activities Idaho has to offer.",
    desc5: "",
  },
  {
    name: "Erica Cameron",
    title: "Adult Nurse Practitioner - Board Certified",
    picture:
      "data:image/jpeg;base64,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",
    desc1:
      "Erica Cameron is a Board Certified Adult Nurse Practitioner with a broad base of knowledge that spans over 20 years of experience in healthcare. She holds a Master of Science in Nursing from Emory University in Atlanta, Georgia, a Bachelor of Science in Nursing from Brenau University in Gainesville,Georgia, and a Bachelor of Science in Psychology from Georgia State University.",
    desc2:
      "She has extensive experience in Oncology, Hematology, Palliative Care, Hospice, Transitional care, Urgent Care, Primary Care, and Counseling. She has integrated her expertise and knowledge into her care model as she creates an individualized approach that followsa more allopathic and holistic pathway for better healthcare outcomes.",
    desc3:
      "Erica battles her own health issues on a daily basis. Being diagnosed with diabetes and autoimmune disease has allowed her to understand the challengeand frustration that patients experience when they endure intolerable side effects and failed treatments.She empathizes with her patients and works alongside them to create a treatment plan that is conducive to each individual patient while understanding their needs and well being to createa balance and a better quality of life. This has fueled Erica’s desire to find answers for her patients struggling with chronic disease and improve their lifestyle choices.",
    desc4:
      "Erica, along with her healthcare team and the help of the local charity, coordinated and implemented testing for COVID-19 for first responders and essential workers during the peak of the Covid pandemic.She continues to provide wellness screenings throughout her facets she is associated with, helping to bridge the healthcare gap in rural areas throughout the greater Twin Falls area.",
    desc5:
      "Erica and her husband moved to Twin Falls, Idaho in2018. Her husband is currently completing his Bachelor of Science in Nursing. Together, they are raising two boys, two girls, a few chickens, rabbits, and two dogs. The family likes to explore the hidden treasures in Idaho and the surrounding states. Erica is the board President for the local swim team--The Magic Valley Marlins. She loves traveling, kayaking, hiking, and attending swim meets with her family in her spare time.",
  },
  {
    name: "Libby Cameron ",
    title: "Women’s Health OB/GYN Nurse Practitioner - Board Certified",
    picture:
      "data:image/jpeg;base64,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",
    desc1:
      "Libby is a Women’s Health OB/GYN Nurse Practitioner who graduated first in class from Harbor-UCLA in 2004. She has more than 20 years of experience prior to NP school, and has focused in cardiovascular, endocrine, and internal medicine. She now specializes in women’s health, primary care, and anti-aging medicine, and her interests include bio-identical hormone replacement therapy, sexual dysfunction, incontinence, IV micronutrient therapy, aesthetic procedures, and additional regenerative pathways to health.",
    desc2: "",
    desc3:
      "Libby raised all boys, in her free time she enjoys rockhounding, hiking, panning for gold, playing tennis, and gardening. She is compassionate and dedicated to helping people reach their highest level of wellness. Regenerative Medicine is her passion and she looks forward to helping everyone live a healthier and more vibrant life.",
    desc4: "",
    desc5: ""
  },
];

export const Profiles = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [desc3, setModalDesc3] = useState("");
  const [desc4, setModalDesc4] = useState("");
  const [desc5, setModalDesc5] = useState("");

  const handleReadMore = (title, desc3, desc4, desc5) => {
    setModalTitle(title);
    setModalDesc3(desc3);
    setModalDesc4(desc4);
    setModalDesc5(desc5);
    setShowModal(true);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 divide-gray-300 divide-y-2">
      {/* <div className="grid grid-rows-1 md:grid-rows-2 md:row-span-5 divide-y-2">
        <div className="text-center m-5">
          <div className="text-4xl">About Us</div>
          <div className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div> */}
      {teamMembers.map((member, idx) => (
        <div
          className="grid grid-cols-1 md:grid-cols-2 md:col-span-2"
          key={`Member-${idx}`}
        >
          <div className="md:row-span-3 mx-auto mt-5 mb-3">
            {/* IMG */}
            <img
              className=" object-cover bg-clip-content rounded-2xl shadow-2xl h-96 w- w-80"
              src={member.picture}
            />
          </div>
          <div className="mt-5 mx-3">
            {/* Name & Title */}
            <span className="text-black">{member.name}</span> <br />{" "}
            <span className="text-primary font-semibold">{member.title}</span>
          </div>
          <div>
            <div className=" text-gray-500 mr-5 mx-3 text-left">
              {/* desc */}
              {member.desc1}
            </div>
            <div className=" text-gray-500 mr-5 mx-3 pt-3 text-left">
              {/* desc */}
              {member.desc2}
            </div>
          </div>
          <div>
            {/* links */}
            <button
              className=" z-10 bg-secondary font-bold uppercase text-sm px-6 py-3 mx-3 rounded shadow hover:shadow-lg  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={() =>
                handleReadMore(member.name, member.desc3, member.desc4, member.desc5)
              }
            >
              <span className="text-gray-100 underline">READ MORE</span>
            </button>
          </div>
        </div>
      ))}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title={modalTitle}
        desc3={desc3}
        desc4={desc4}
        desc5={desc5}
      />
    </div>
  );
};
