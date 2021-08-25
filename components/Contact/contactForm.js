import { useState, createRef } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { VscError } from "react-icons/vsc";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactForm = () => {
  const recaptchaRef = createRef();
  const [captchaSuccess, setCaptchaSuccess] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [vals, setVals] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errorFields, setErrorFields] = useState({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
    message: false,
  });

  const onReCAPTCHAChange = (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    setCaptchaSuccess(true);
  };

  const handleChange = (e) => {
    setVals({
      ...vals,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      let error = false;
      let firstname = false;
      let lastname = false;
      let email = false;
      let phone = false;
      let message = false;
      e.preventDefault();

      const formData = {};

      Array.from(e.currentTarget.elements).forEach((field) => {
        if (!field.name) return;
        if (field.value === "" && field.name !== "g-recaptcha-response") {
          error = true;
          if (field.name === "firstname") firstname = true;
          if (field.name === "lastname") lastname = true;
          if (field.name === "phone") phone = true;
          if (field.name === "email") email = true;
          if (field.name === "message") message = true;
        }
        formData[field.name] = field.value;
      });

      setErrorFields({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        message: message,
      });

      if (!error && captchaSuccess) {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then(() => {
            setVals({
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              message: "",
            });
          })
          .then(() => {
            setFailure(false);
            setSuccess(true);
          });
      } else {
        throw new Error("Form Errors");
      }
    } catch (e) {
      console.log(e);
      setSuccess(false);
      setFailure(true);
    }
  };
  return (
    <>
      <div className="grid w-screen grid-rows-1 text-center px-0 md:px-64 lg:px-80 xl:px-96 pt-10">
        {success && (
          <div className="shadow-lg rounded-lg py-7 border border-green-500">
            <div className="grid grid-rows-2 text-center">
              <span className="flex justify-center">
                <BsCheckCircle className="text-green-500 text-3xl text-center" />
              </span>
              <span>message sent, we will be in touch shortly.</span>
            </div>
          </div>
        )}
        {failure && (
          <div className="shadow-lg rounded-lg py-7 border border-red-500">
            <div className="grid grid-rows-2 text-center">
              <span className="flex justify-center">
                <VscError className="text-red-500 text-3xl text-center" />
              </span>
              <span>message failed, make sure all fields are filled and the ReCAPTCHA is checked.</span>
            </div>
          </div>
        )}
      </div>
      <form method="post" onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="grid grid-cols-1 w-screen px-7 md:px-40 lg:px-64 xl:px-80 pt-10 pb-5">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  errorFields.firstname ? "border-red-500" : "border-gray-200"
                }`}
                id="grid-first-name"
                type="text"
                name="firstname"
                placeholder="Jane"
                value={vals.firstname}
                onChange={handleChange}
              />
              {errorFields.firstname && (
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  errorFields.lastname ? "border-red-500" : "border-gray-200"
                }`}
                id="grid-last-name"
                type="text"
                name="lastname"
                placeholder="Doe"
                value={vals.lastname}
                onChange={handleChange}
              />
              {errorFields.lastname && (
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  errorFields.email ? "border-red-500" : "border-gray-200"
                }`}
                id="email"
                type="email"
                name="email"
                placeholder="jane@example.com"
                value={vals.email}
                onChange={handleChange}
              />
              {errorFields.email && (
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Primary Phone
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                  errorFields.phone ? "border-red-500" : "border-gray-200"
                }`}
                id="phone"
                type="phone"
                name="phone"
                placeholder="555-555-5555"
                value={vals.phone}
                onChange={handleChange}
              />
              {errorFields.phone && (
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className={`resize appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 ${
                  errorFields.message ? "border-red-500" : "border-gray-200"
                }`}
                id="message"
                name="message"
                value={vals.message}
                onChange={handleChange}
              />
              {errorFields.message && (
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              )}
            </div>
          </div>
          <div className="flex md:flex md:items-center">
          <div className="w-full md:w-full pb-4">
              {" "}
              <ReCAPTCHA
                ref={recaptchaRef}
                size="compact"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onReCAPTCHAChange}
              />
            </div>
            <div className="w-full md:w-full">
              <button
                className="shadow bg-sage hover:bg-beige focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-2 px-7 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
            
          </div>
        </div>
      </form>
    </>
  );
};
