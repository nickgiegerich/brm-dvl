import { motion } from "framer-motion";
import { Hero } from "../home/Hero";
import { Parallax } from "react-parallax";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/ComingSoon.module.css";

const bgImage = "/images/home/bgImg.png";
const logo = "/images/home/logo.svg";
const svgLogo = "/images/home/svg_logo.svg";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const logoVariants = {
  initial: {
    y: -1000,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const ComingSoon = () => {
  return (
    <div>
      {/* HEAD */}
      <Head>
        <title>Balance Regenerative Medicine</title>
        <meta
          name="description"
          content="Natural medicine and healing practice in Twin Falls Idaho"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HEAD */}

      <motion.div variants={variants} initial="initial" animate="animate">
        <Parallax
          bgImage={bgImage}
          strength={100}
          blur={{ min: -15, max: 10 }}
          bgImageStyle={{ objectFit: "cover" }}
        >
          <div className={styles.bgOverlay}>
            <div className="mx-auto flex flex-col justify-center justify-items-center text-center">
                <motion.img
                  variants={logoVariants}
                  src={svgLogo}
                  alt="Balance Regenerative Medicine"
                  height="400px"
                  width="400px "
                  className=" bg-gray-200 bg-opacity-75 mx-auto rounded-full mt-10"
                />
              <div>
                  <div className=" text-green-100">
                  <h1 className=" lg:text-7xl md:text-6xl text-4xl pt-10">Website Coming Soon!</h1>
                  <h3 className=" lg:text-5xl md:text-4xl text-2xl pt-3">Visit us at our temporary location:</h3>
                  <h4 className="pt-5">
                    <strong>
                      <a
                        target="_blank"
                        href="http://maps.google.com/?q=621+North+College+Rd,+Suite+103,+Twin+Falls,+Idaho+83301"
                        rel="noopener noreferrer"
                        className="text-green-400 lg:text-2xl md:text-2xl text-xl hover:underline"
                      >
                        621 North College Rd, Suite 103, Twin Falls, Idaho 83301
                      </a>
                    </strong>
                  </h4>

                  <h4 className="lg:text-2xl md:text-2xl text-xl pt-5">
                    {" "}
                    Phone:{" "}
                    <strong className="text-green-400 hover:underline">
                      <Link href="tel:2085393155">(208) 539-3155</Link>
                    </strong>
                  </h4>
                  <h4 className="lg:text-2xl md:text-2xl text-xl pt-5">
                    {" "}
                    Fax:{" "}
                    <strong className="text-green-400 hover:underline">
                      <Link href="tel:18665072545">1(866) 507-2545</Link>
                    </strong>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </motion.div>
    </div>
  );
};
