const newPatientForm = "/forms/new-patient-form.pdf";
const formImg = "/forms/form-screenshot.png";
export const Content = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="text-center text-3xl py-6">New Patient Form</div>
      <div className="text-center py-2">
        please print and fill out before your first appointment
      </div>
      <div className="text-center text-sm py-2">
        *click the image to download
      </div>
      <div className="flex justify-center">
        <a className="z-10" target="_blank" href={newPatientForm}>
          <img className="shadow-xl rounded-2xl px-3" alt="New Patient Form" src={formImg} />
          <span>*click image to download</span>
        </a>
      </div>
    </div>
  );
};
