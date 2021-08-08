import { motion } from "framer-motion";
import styles from "../../styles/MenuItem.module.css";
import Link from "next/link";

const variants = {
  open: {
    y: 0, // move the item to the zero position; animates from original which is 50
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }, // changing these doesn't seem to affect much, need documentation
      delay: 0.6,
    },
    display: "flex",
  },
  closed: {
    y: 50, // move the item down 50px on close variant
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

const colors = ["#5e8f65", "#5e8f65", "#5e8f65", "#5e8f65", "#5e8f65"];

export default function MenuItem(i) {
  const style = { border: `2px solid ${colors[i.index]}` };

  return (
    <>
      <Link href={i.link}>
        <motion.li
          className={styles.sideBarLi}
          variants={variants}
          whileHover={{
            scale: 1.1,
            // borderBottom: "2px 0px solid #5e8f65",
            // textDecoration: "underline",
            textDecorationColor: "rgb(94, 143, 101)",
            transition: "ease-in-out .3s",
            borderRadius: "5px",
            originX: 0, 
            originY: 0,
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* <div className={styles.iconPlaceholder} style={style}>
          {i.icon}
        </div> */}
          <div className={styles.linkText}>{i.name}</div>
        </motion.li>
      </Link>
    </>
  );
}
