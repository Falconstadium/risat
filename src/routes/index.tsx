import { createFileRoute } from "@tanstack/react-router";
import { useContext, useEffect, useState } from "react";

import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { themeContext } from "../context/theme";

export const Route = createFileRoute("/")({
  component: () => {
    document.title = "risat";
    //darkMode
    const { theme, toggleTheme } = useContext(themeContext);

    //animation
    const [load, setLoad] = useState(false);
    useEffect(() => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
      }, 1000);
    }, []);

    return (
      <main className={`${theme && "dark"}`}>
        {load ? (
          <div className="flex min-h-dvh items-center justify-center dark:bg-black-500">
            <div className="relative">
              <div className="relative h-32 w-32">
                <div
                  className="absolute h-full w-full animate-spin rounded-full border-[4px] border-gray-100/10 border-b-indigo-700 border-r-indigo-700"
                  style={{ animationDuration: "3s" }}
                ></div>

                <div
                  className="absolute h-full w-full animate-spin rounded-full border-[4px] border-gray-100/10 border-t-indigo-700"
                  style={{
                    animationDuration: "2s",
                    animationDirection: "reverse",
                  }}
                ></div>
              </div>

              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-indigo-700/10 via-transparent to-indigo-700/5 blur-sm"></div>
            </div>
          </div>
        ) : (
          <article className="grid min-h-dvh w-full grid-rows-[1fr_auto]">
            <Navbar toggleTheme={toggleTheme} />

            {/* hero */}
            <Home />

            {/* footer */}
            <Footer />
          </article>
        )}
      </main>
    );
  },
});
