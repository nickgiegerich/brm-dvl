import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

const bgImage = "/images/providers/providers-hero.png";

const titleVariants = {
  initial: {
    x: -1000,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const Hero = () => {
  return (
    <>
      <Parallax
        bgImage={bgImage}
        strength={100}
        blur={{ min: -15, max: 10 }}
        bgImageStyle={{
          height: "50vh",
          width: "100vw",
          objectFit: "cover",
        }}
      >
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "50vh" }}
        >
          <div className="text-white text-5xl md:text-8xl  uppercase font-extralight font-mono">
            <motion.div className="font-rajdhani font-semibold" variants={titleVariants}>new patients</motion.div>
          </div>
        </div>
      </Parallax>
    </>
  );
};