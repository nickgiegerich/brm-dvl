import styles from "../../styles/Hero.module.css";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

const bgImage = "/images/home/bgImg.png";
const logoWhite = "/images/home/logo-white.svg";
const svgLogo = "/images/home/svg_logo.svg";


const logoVariants = {
  initial: {
    x: 1000,
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
        bgImageStyle={{ objectFit: "cover" }}
      >
        <div>
          <div className="flex flex-col justify-evenly text-center mx-auto h-screen w-screen">
            <motion.img
              variants={logoVariants}
              src={logoWhite}
              alt="Balance Regenerative Medicine"
              height="600px"
              width="600px"
              className="mx-auto"
            />

            <div>
              <h1 className="text-5xl text-white font-sansCondensed font-extralight">Get Answers. Feel Better.</h1>
              <div className="border-b-4 w-1/5 m-auto pt-5 text-white" />
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};
