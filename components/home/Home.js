import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { DesktopNavigation } from "./Navigation";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import SideBar from "../sidebar/SideBar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Footer } from "../global/Footer";
import FadeInWhenVisible from "../fadeInWhenVis/FadeInWhenVisible";

const bgImage = "/images/home/bgImg.png";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const Home = () => {
  return (
    <>
      {/* HEAD */}
      <Head>
        <title>
          Balance Regenerative Medicine
        </title>
        <meta
          name="description"
          content="Natural medicine and healing practice in Twin Falls Idaho"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HEAD */}

      <motion.div variants={variants} initial="initial" animate="animate" className="font-maitree">
        {/* DESKTOP NAVIGATION - show at > 600px */}
        <div className="desktopNav">
          <DesktopNavigation position={"absolute"}/>
        </div>
        {/* MOBILE NAVIGATION - show at < 600px */}
        <div className="mobileNav">
          <SideBar />
        </div>

        <Hero />
        <About />
        <Footer/>
      </motion.div>
    </>
  );
};
