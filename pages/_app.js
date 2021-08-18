import "../styles/globals.css";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps, router }) {
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <AnimateSharedLayout>
        {pageLoading ? (
          <div className="bg-black text-white">loading</div>
        ) : (
          <Component {...pageProps} key={router.route} />
        )}
      </AnimateSharedLayout>
    </AnimatePresence>
  );
}

export default MyApp;
