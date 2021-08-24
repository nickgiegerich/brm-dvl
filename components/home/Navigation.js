import styles from "../../styles/Navigation.module.css";
import { BsChevronCompactDown } from "react-icons/bs";
import { GiPlantRoots } from "react-icons/gi";
import { RiMedicineBottleLine, RiMentalHealthFill, RiHealthBookFill } from "react-icons/ri";
import { IoFitnessSharp } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

const data = [
  {
    serviceTitle: "Service One",
    serviceLink: "#",
    icon: <GiPlantRoots />,
  },
  {
    serviceTitle: "Service Two",
    serviceLink: "#",
    icon: <RiMedicineBottleLine />,
  },
  {
    serviceTitle: "Service Three",
    serviceLink: "#",
    icon: <RiMentalHealthFill />,
  },
  {
    serviceTitle: "Service Four",
    serviceLink: "#",
    icon: <RiHealthBookFill/>
  },
  {
    serviceTitle: "More...",
    serviceLink: "/services",
  },
];

export const DesktopNavigation = (props) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <nav
        style={{ position: props.position, height: "fit-content" }}
        className={styles.navItems}
      >
        <ul className="font-medium">
          <Link href="/">
            <li className="bg-gradient-to-r from-sage to-sage bg-growing-underline">
              Home
            </li>
          </Link>
          <Link href="/providers">
            <li className="bg-gradient-to-r from-sage to-sage bg-growing-underline">
              Providers
            </li>
          </Link>
          <Link href="/newpatients">
            <li className="bg-gradient-to-r from-sage to-sage bg-growing-underline">
              New Patients
            </li>
          </Link>
          {/* <li
            className=" bg-gradient-to-r from-sage to-sage bg-growing-underline relative"
            onMouseOver={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <Link href="/services">Services</Link>
            <Link href="/services">
              <BsChevronCompactDown />
            </Link>
            <div
              className={`absolute grid grid-cols-1 divide-y div w-64 divide-sage bg-white top-10 rounded-md transform transition ease-in-out duration-200  ${
                !dropdown ? "hidden" : "block"
              }`}
            >
              {data.map(({ serviceTitle, serviceLink, icon }, idx) => (
                <Link key={`Service-Link-${idx}`} href={serviceLink}>
                  <div
                    key={`Service-${idx}`}
                    className="hover:bg-sage text-xl py-4 px-2 flex"
                  >
                    {icon}
                    <span className="pl-1">{serviceTitle}</span>
                  </div>
                </Link>
              ))}
            </div>
          </li> */}
          <Link href="#">
            <li className="bg-gradient-to-r from-sage to-sage bg-growing-underline">
              Patient Portal
            </li>
          </Link>
          <Link href="/contact">
            <li className="bg-gradient-to-r from-sage to-sage bg-growing-underline">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
