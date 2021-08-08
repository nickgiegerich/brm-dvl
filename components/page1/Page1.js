import Head from "next/head";
import { motion } from "framer-motion";
import { DesktopNavigation } from "../home/Navigation";
import SideBar from "../sidebar/SideBar";
import { Footer } from "../global/Footer";
import { PageOneHero } from "./PageOneHero";

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

export const PageOne = () => {
  return (
    <>
      {/* HEAD */}
      <Head>
        <title>
          Balance Regenerative Medicine | Homepathic Practice in Twin Falls, ID
        </title>
        <meta
          name="description"
          content="Natural medicine and healing practice in Twin Falls Idaho"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HEAD */}

      <motion.div variants={variants} initial="initial" animate="animate">
        {/* DESKTOP NAVIGATION - show at > 600px */}
        <div className="desktopNav">
          <DesktopNavigation position={"relative"} />
        </div>
        {/* MOBILE NAVIGATION - show at < 600px */}
        <div className="mobileNav">
          <SideBar />
        </div>

        <PageOneHero />
        <Footer />
      </motion.div>
    </>
  );
};
