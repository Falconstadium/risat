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

    useEffect(() => {
      localStorage.setItem("mode", JSON.stringify(dark));
    }, [dark]);

    return (
      <main
        className={`${dark && "dark"} grid min-h-[100dvh] w-full grid-rows-[auto_1fr]`}
      >
        <NavbarDash toggleMode={toggleMode} />

        {/* hero */}
        <Dashbord />
      </main>
    );
  },
});
