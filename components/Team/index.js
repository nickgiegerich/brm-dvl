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
        <title>Balance Regenerative Medicine</title>
        <meta
          name="description"
          content="Balance Regenerative Medicine Providers | Team "
        />
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
