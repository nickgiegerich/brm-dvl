import { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import useDimensions from "./useDimensions";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";
import styles from "../../styles/SideBar.module.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      damping: 30,
    },
  }),
  closed: {
    clipPath: "circle(30px at 250px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function useOutsideClicker(ref, open) {
  let outside = false;
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        outside = true;
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, open]);

  return outside;
}

function SideBar() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  // console.log(useOutsideClicker(containerRef, isOpen));
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        if (isOpen) toggleOpen();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <motion.nav
      className={styles.sideBarNav}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={styles.background} variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}

export default SideBar;
