import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import NavbarDash from "../components/NavbarDash";
import Dashbord from "../components/Dashboard";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/dashboard")({
  component: () => {
    const { t } = useTranslation("global");
    document.title = `risat | ${t("dashbord.title")}`;

    const darkMode = JSON.parse(localStorage.getItem("mode") || "[]");
    const [dark, setDark] = useState(darkMode);

    const toggleMode = () => {
      setDark(!dark);
    };

    const [load, setLoad] = useState(false);

    useEffect(() => {
      localStorage.setItem("mode", JSON.stringify(dark));
      //animation
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
      }, 1500);
    }, [dark]);

    return (
      <>
        {load ? (
          <div className="min-h-dvh place-content-center place-items-center">
            <div className="h-20 w-20 animate-spin place-content-center rounded-full border-4 border-gray-300 border-t-blue-500"></div>
          </div>
        ) : (
          <main
            className={`${dark && "dark"} grid min-h-[100dvh] w-full grid-rows-[auto_1fr]`}
          >
            <NavbarDash toggleMode={toggleMode} />

            {/* hero */}
            <Dashbord />
          </main>
        )}
      </>
    );
  },
});
