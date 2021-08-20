import "../styles/globals.css";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Router from "next/router";

function MyApp({ Component, pageProps, router }) {
  const [pageLoading, setPageLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    Router.onRouteChangeComplete = () => {
      console.log("onRouteChnageStart Triggered");
    };

    // set a timeout function after we verify that it is initial load
    if (initialLoad) {
      const timer = setTimeout(() => {
        setInitialLoad(false);
      }, 3000);
      return () => clearTimeout(timer);
    }

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <AnimateSharedLayout>
        {pageLoading || initialLoad ? (
          <div className="loading"><div className="loader"></div></div>
        ) : (
          <Component {...pageProps} key={router.route} />
        )}
      </AnimateSharedLayout>
    </AnimatePresence>
  );
}

export default MyApp;
