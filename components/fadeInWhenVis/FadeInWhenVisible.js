import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function FadeInWhenVisible ({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity:  0, scale: 0.5 },
  };

  useEffect(() => {
    if (inView) {
        controls.stop("hidden")
      controls.start("visible");
    } else {
        controls.stop("visible")
        controls.start("hidden")
    }
  }, [controls, inView]);



  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
    //   hidden="{controls}"
      transition={{ duration: 0.6 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
