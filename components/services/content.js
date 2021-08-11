const cardData = [
  {
    title: "Service Overview",
    buttons: [
      {
        buttonTitle: "more about a service",
      },
      {
        buttonTitle: "more about a service",
      },
      {
        buttonTitle: "more about a service",
      },
      {
        buttonTitle: "more about a service",
      },
    ],
  },
  {
    title: "Service Overview",
    buttons: [
      {
        buttonTitle: "more about a service",
      },
      {
        buttonTitle: "more about a service",
      },
      {
        buttonTitle: "more about a service",
      },
      {
        buttonTitle: "more about a service",
      },
    ],
  },
  {
    title: "Service Overview",
    buttons: [
      {
        buttonTitle: "more about a service",
      },
      {
        buttonTitle: "more about a service",
      },
      {
        buttonTitle: "more about a service",
      },
      {
        buttonTitle: "more about a service",
      },
    ],
  },
];

export const Content = () => {
  return (
    <div className="relative grid grid-cols-1">
      {/* COLUMN */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* COLUMN - services */}
        <div className="text-left m-10">
          <div className="text-5xl">Services</div>
          <div className="text-2xl pt-3">Lorem Ipsum - Dolor Sit</div>
          <div className="text-xl pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="grid grid-cols-2 gap-3 pt-5">
            <button className="transition ease-in-out uppercase bg-sage rounded-md py-4 shadow-2xl text-black hover:bg-primary hover:text-white">
              how can we help?
            </button>
            <button className="transition ease-in-out uppercase bg-beige rounded-md  py-4 shadow-2xl text-black hover:bg-primary hover:text-white">
              schedule an appointment
            </button>
          </div>
        </div>

        {/* COLUMN - img */}
        <div className="flex justify-center">
          <div className="m-10">
            <img
              className="rounded-2xl shadow-2xl"
              src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-200  rounded-t-3xl">
        <div className="text-center text-5xl m-3">Lorem Ipsum</div>
        <div className="text-center text-xl m-3">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {cardData.map((item, idx) => (
            <div
              key={`Card-${idx}`}
              className="flex flex-col flex-grow items-center justify-center pb-3 m-5 bg-white rounded-3xl shadow-2xl"
            >
              <div className="text-3xl mb-5 pt-5">{item.title}</div>
              {item.buttons.map((button, idx) => (
                <button
                  key={`Button-${idx}`}
                  className="transition ease-in-out duration-500 mb-1 text-black bg-beige py-5 px-10 rounded-md hover:bg-sage"
                >
                  {button.buttonTitle}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
