import { useState } from "react";

const teamMembers = [
  {
    name: "Jen Gardner",
    title: "Family Nurse Practioner-Board Certified",
    picture:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    desc: "Jen Gardner is a Board-Certified Family Nurse Practitioner with over 15 years of experience in healthcare as a Registered Nurse. She graduated in 2005 with her Associate’s Degree in Nursing and completed her Bachelor’s Degree in 2007 at Idaho State University. Jen completed her Master of Science in Nursing Degree from the University of Southern Indiana and became a Certified Family Nurse Practitioner in 2020. Since graduating, she has been practicing in a small Family Medicine Clinic in Twin Falls.",
    more: "Jen believes the philosophies central to Functional and Integrative Medicine are what is often missing from the traditional American health care model. While she recognizes the value of modern allopathic medicine, Jen has encountered countless frustrated, confused, and over medicated patients who are desperate for answers and tired of living with chronic disease. She is passionate about partnering with her patients to find and address the root causes of illness and chronic disease and practicing wellness through in- depth, personalized evaluation, optimized nutrition, and holistic treatment of the whole person.",
  },
  {
    name: "Lorem Ipsum",
    title: "Lorem Ipsum Dolor Sit Amet",
    picture:
      "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    more: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Lorem Ipsum",
    title: "Lorem Ipsum Dolor Sit Amet",
    picture:
      "https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    more: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export const Profiles = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDesc, setModalDesc] = useState("");

  const handleReadMore = (title, desc) => {
    setModalTitle(title);
    setModalDesc(desc);
    setShowModal(true);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 divide-gray-300 divide-y-2">
      <div className="grid grid-rows-1 md:grid-rows-2 md:row-span-5 divide-y-2">
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
      </div>
      {teamMembers.map((member, idx) => (
        <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2" key={`Member-${idx}`}>
          <div className="md:row-span-3 mx-auto mt-5 mb-3">
            {/* IMG */}
            <img
              className=" object-cover bg-clip-content rounded-2xl shadow-2xl h-96 w- w-80"
              src={member.picture}
            />
          </div>
          <div className="mt-5 mx-3">
            {/* Name & Title */}
            <span className="texxt-black">{member.name}</span> <br />{" "}
            <span className="text-primary font-semibold">{member.title}</span>
          </div>
          <div className=" text-gray-500 mr-5 mx-3 text-left">
            {/* desc */}
            {member.desc}
          </div>
          <div>
            {/* links */}
            <button
              className=" z-10 bg-secondary font-bold uppercase text-sm px-6 py-3 mx-3 rounded shadow hover:shadow-lg  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={() => handleReadMore(member.name, member.more)}
            >
              <span className="text-gray-100 underline">READ MORE</span>
            </button>
          </div>
        </div>
      ))}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* HEADER */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{modalTitle}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* BODY */}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {modalDesc}
                  </p>
                </div>
                {/* FOOTER */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-primary text-white active:bg-primary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
