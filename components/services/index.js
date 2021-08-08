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
        <title>Balance Regenerative Medicine</title>
        <meta
          name="description"
          content="Balance Regenerative Medicine New Patients"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div variants={variants} initial="initial" animate="animate">
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
