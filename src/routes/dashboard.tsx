import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Dashbord from "../components/Dashboard";
import { useTranslation } from "react-i18next";
import NavbarDash from "../components/NavbarDash";

export const Route = createFileRoute("/dashboard")({
  component: () => {
    const { i18n } = useTranslation("global");

    const handleChangeLang = (lang: string) => {
      i18n.changeLanguage(lang);
    };

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
        className={`${dark && "dark"} grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto]`}
      >
        <NavbarDash toggleMode={toggleMode} />

        {/* hero */}
        <Dashbord />

        {/* footer */}
        <footer className="flex select-none items-center justify-around bg-indigo-700 py-2 text-center text-sm font-medium tracking-wide text-white">
          <p>
            2024 &copy; <span className="font-edu font-semibold">risat</span>
          </p>

          <div className="flex items-center gap-2">
            <button
              className="&.active rounded-sm bg-light px-3 py-1 text-xs font-medium text-black-500 hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light lg:text-sm"
              onClick={() => handleChangeLang("en")}
            >
              EN
            </button>
            <button
              className="rounded-sm bg-light px-3 py-1 text-xs font-medium text-black-500 hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light lg:text-sm"
              onClick={() => handleChangeLang("fr")}
            >
              FR
            </button>
          </div>
        </footer>
      </main>
    );
  },
});
