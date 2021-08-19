import { useState } from "react";

export const ContactForm = () => {
  //   const [error, setError] = useState(false);
  const [errorFields, setErrorFields] = useState({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
    message: false,
  });

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
        if (field.value === "") {
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

      if (!error) {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else {
        throw new Error("Form Errors");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form method="post" onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="grid grid-cols-1 w-screen px-28 md:px-40 lg:px-64 xl:px-80 pt-10 pb-5">
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
              Primary Phone
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                errorFields.email ? "border-red-500" : "border-gray-200"
              }`}
              id="phone"
              type="phone"
              name="phone"
              placeholder="555-555-5555"
            />
            {errorFields.lastname && (
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
            />
            {errorFields.message && (
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            )}
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-sage hover:bg-beige focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </div>
    </form>
  );
};
