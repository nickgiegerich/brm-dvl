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
          Home - Balance Regenerative Medicine
        </title>
        <meta
          name="description"
          content="Functional and Integrative medical clinic dedicated to optimizing health, individualizing care and offering restorative treatments to help your body find it’s natural balance located in Twin Falls"
        />
        <meta property="og:title" content="Home - Balance Regenerative Medicine in Twin Falls, Idaho" />
        <meta property="og:description" content="Functional and Integrative medical clinic dedicated to optimizing health, individualizing care and offering restorative treatments to help your body find it’s natural balance" />
        <meta property="og:url" content="https://www.balanceregenerativemedicine.org/" />
        <meta property="og:type" content="website" />
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
