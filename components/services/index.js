import Head from "next/head";
import SideBar from "../sidebar/SideBar";
import { DesktopNavigation } from "../home/Navigation";
import { Hero } from "./hero";
import { Footer } from "../global/Footer";
import { motion } from "framer-motion";
import { Content } from "./content";

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

export const Services = () => {
  return (
    <div>
      <Head>
        <title>
          Services - Balance Regenerative Medicine
        </title>
        <meta
          name="description"
          content="Services provided by Balance Regenerative Medicine located in Twin Falls, Idaho"
        />
        <meta property="og:title" content="Services - Balance Regenerative Medicine in Twin Falls, Idaho" />
        <meta property="og:description" content="Functional and Integrative medical clinic dedicated to optimizing health, individualizing care and offering restorative treatments to help your body find it’s natural balance" />
        <meta property="og:url" content="https://www.balanceregenerativemedicine.org/services" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div variants={variants} initial="initial" animate="animate" className="font-maitree">
        {/* DESKTOP NAVIGATION - show at > 600px */}
        <div className="desktopNav">
          <DesktopNavigation position={"absolute"} />
        </div>

        {/* MOBILE NAVIGATION - show at < 600px */}
        <div className="mobileNav">
          <SideBar />
        </div>

        <div className="grid grid-cols-1">
          <Hero />
          <Content />
          <Footer />
        </div>
      </motion.div>
    </div>
  );
};
