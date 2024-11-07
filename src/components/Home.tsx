import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("global");

  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  }, []);

  return (
    <>
      {load ? (
        <section className="flex w-full flex-col items-center justify-center bg-light dark:bg-black-500">
          <div className="flex w-full animate-pulse flex-col items-center gap-4 px-8 md:w-1/3 lg:w-1/2">
            <div className="h-7 w-full rounded-md bg-slate-400"></div>
            <div className="h-7 w-1/2 rounded-md bg-slate-400"></div>
            <div className="mx-auto mt-3 h-4 w-28 rounded-md bg-slate-400"></div>
          </div>
        </section>
      ) : (
        <div className="relative flex w-full items-center justify-center bg-light bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
          <section className="container z-20 grid animate-fadeIn gap-6 px-8 lg:place-items-center lg:gap-8">
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.1, ease: "easeInOut" }}
            >
              <h1 className="bg-gradient-to-br from-neutral-700 to-neutral-500 bg-clip-text text-center font-Serif text-4xl font-extrabold text-transparent dark:from-neutral-500 dark:to-neutral-600 md:text-6xl lg:py-2">
                {t("hero.title")}
                <span className="text-blue-700">.</span>
              </h1>
              <p className="z-30 text-center text-sm font-medium text-neutral-700 dark:text-neutral-400 lg:text-base">
                {t("hero.parag")}
              </p>
            </motion.div>
            <button className="rounded-md bg-blue-700 px-6 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-300 ease-in-out hover:bg-blue-600 lg:text-base">
              <Link to="/dashboard">{t("hero.btn")}</Link>
            </button>
          </section>
        </div>
      )}
    </>
  );
};

export default Home;
