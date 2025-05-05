import { createFileRoute } from "@tanstack/react-router";
import { useContext, useEffect, useState } from "react";

import Dashbord from "../components/Dashboard";
import { themeContext } from "../context/theme";
import { Sun } from "../components/Sun";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/dashboard")({
  component: () => {
    const { theme } = useContext(themeContext);

    //animation
    const [load, setLoad] = useState(false);
    useEffect(() => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
      }, 1000);
    }, []);

    const { t } = useTranslation("global");

    return (
      <main className={`${theme && "dark"}`}>
        {load ? (
          <div className="flex min-h-dvh items-center justify-center dark:bg-black-500">
            <div className="h-20 w-20 animate-spin place-content-center rounded-full border-4 border-gray-300 border-t-blue-500"></div>
          </div>
        ) : (
          <article className="grid min-h-[100dvh] w-full grid-rows-[auto_1fr]">
            {/* Navbar */}
            <header className="bg-gradient-to-br from-indigo-700 to-indigo-500 px-6 py-3 text-light">
              <nav className="container mx-auto flex items-center justify-between">
                <h3 className="text-sm font-semibold tracking-wide md:text-base md:tracking-wider">
                  {t("dashboard.title")}
                </h3>
                <Sun />
              </nav>
            </header>

            {/* hero */}
            <Dashbord />
          </article>
        )}
      </main>
    );
  },
});
