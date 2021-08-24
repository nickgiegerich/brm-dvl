import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import styles from "../../styles/Navigation.module.css";

const logo = "/images/home/logo-white.svg";


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const logoVariants = {
  open: {
    y: 50, // move the item to the zero position; animates from original which is 50
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }, // changing these doesn't seem to affect much, need documentation
    },
    display: "flex",
  },
  closed: {
    y: 0, // move the item down 50px on close variant
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    transitionEnd: {
      // without this the objects still exist on close and are clickable
      display: "none",
    },
  },
};

function Navigation() {
  return (
    <>
      <motion.div variants={variants}>
        {/* <motion.img
          variants={logoVariants}
          src={logo}
          className={styles.sideBarLogo}
          alt="Sidebar Logo"
          height="auto"
          width="50px"
        /> */}
      </motion.div>
      <motion.ul className={styles.sideBarUl} variants={variants}>
        {pages.map((i, index) => (
          <MenuItem
            name={i.name}
            link={i.link}
            icon={i.icon}
            index={index}
            key={index}
          />
        ))}
      </motion.ul>
    </>
  );
}

const pages = [
  { name: "Home", link: "/", icon: null },
  { name: "Providers", link: "/providers", icon: null },
  {
    name: "New Patients",
    link: "/newpatients",
    icon: null,
  },
  // {
  //   name: "Services",
  //   link: "/services",
  //   icon: null,
  // },
  {
    name: "Patient Portal",
    link: "/#",
    icon: null,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: null,
  },
];

export default Navigation;
