const newPatientForm = "/forms/new-patient-form.pdf";
const formImg = "/forms/form-screenshot.png";
import { AiFillFilePdf } from "react-icons/ai";
import colors from "tailwindcss/colors";

const data = [
  { form: "/forms/new-patient-form.pdf", title: "New Patient Form" },
  { form: "/forms/female-addendum.pdf", title: "New Patient Female Addendum" },
  { form: "/forms/male-addendum.pdf", title: "New Patient Male Addendum" },
];

export const Content = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="text-center text-3xl py-6">New Patient Forms</div>
      <div className="text-center py-2 font-bold">
        *please print and fill out before your first appointment
      </div>
      <div className="flex justify-center items-center flex-col pb-10">
        {data.map(({ title, form }, idx) => (
          <div
            key={`Form-${idx}`}
            className="border border-sage w-full md:w-1/2 py-6 my-2 rounded-lg shadow-sm"
          >
            <a className="w-full" target="_blank" rel="noreferrer" href={form}>
              <div className="flex flex-row text-2xl justify-center hover:text-blue-500 hover:underline">
                <AiFillFilePdf /> <span className="pl-3">{title}</span>
              </div>
            </a>
          </div>
        ))}
        {/* <div className="text-center text-sm py-2">
        *click the image to download
      </div> */}
        {/* <div className="flex justify-center">
        <a className="z-10" target="_blank" rel="noreferrer" href={newPatientForm}>
          <img className="shadow-xl rounded-2xl px-3" alt="New Patient Form" src={formImg} />
          <span>*click image to download</span>
        </a>
      </div> */}
      </div>
    </div>
  );
};
