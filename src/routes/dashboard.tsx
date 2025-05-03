import { createFileRoute } from "@tanstack/react-router";
import { useContext, useEffect, useState } from "react";

import NavbarDash from "../components/NavbarDash";
import Dashbord from "../components/Dashboard";
import { themeContext } from "../context/theme";

export const Route = createFileRoute("/dashboard")({
  component: () => {
    const { theme, toggleTheme } = useContext(themeContext);

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
            <div className="h-20 w-20 animate-spin place-content-center rounded-full border-4 border-gray-300 border-t-blue-500"></div>
          </div>
        ) : (
          <article className="grid min-h-[100dvh] w-full grid-rows-[auto_1fr]">
            <NavbarDash toggleTheme={toggleTheme} />

            {/* hero */}
            <Dashbord />
          </article>
        )}
      </main>
    );
  },
});
