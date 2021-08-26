import Head from "next/head";
import SideBar from "../sidebar/SideBar";
import { DesktopNavigation } from "../home/Navigation";
import { Hero } from "./hero";
import { Profiles } from "./profiles";
import { Footer } from "../global/Footer";
import { motion } from "framer-motion";

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

export const Team = () => {
  return (
    <div>
      <Head>
        <title>
          Providers - Balance Regenerative Medicine
        </title>
        <meta
          name="description"
          content="Providers at Balance Regenerative Medicine located in Twin Falls, Idaho"
        />
        <meta property="og:title" content="Providers - Balance Regenerative Medicine in Twin Falls, Idaho" />
        <meta property="og:description" content="Functional and Integrative medical clinic dedicated to optimizing health, individualizing care and offering restorative treatments to help your body find it’s natural balance" />
        <meta property="og:url" content="https://www.balanceregenerativemedicine.org/providers" />
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

        <Hero />
        <Profiles />
        <Footer />
      </motion.div>
    </div>
  );
};
