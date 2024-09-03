import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/contact")({
  component: () => {
    const { t, i18n } = useTranslation("global");

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
        <header className="flex items-center justify-between bg-light px-6 py-1 text-black-100 dark:bg-black-100 dark:text-light lg:px-16 lg:py-2">
          <div>
            <Link
              to="/"
              className="flex cursor-pointer items-center gap-2 font-edu text-sm tracking-wider"
            >
              risat.
            </Link>
          </div>
          <div className="flex items-center gap-0 lg:gap-2">
            <Link
              to="/about"
              className="rounded-2xl px-4 py-1 text-sm font-medium tracking-wide transition-colors duration-200 ease-in-out hover:bg-black-500 hover:text-light [&.active]:bg-black-500 [&.active]:text-light"
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              className="rounded-2xl px-4 py-1 text-sm font-medium tracking-wide transition-colors duration-200 ease-in-out hover:bg-black-500 hover:text-light [&.active]:bg-black-500 [&.active]:text-light"
            >
              {t("nav.contact")}
            </Link>
            <button onClick={toggleMode}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-3 h-[18px] w-[18px] text-black-500 transition-colors duration-200 ease-in-out dark:text-light lg:ml-5"
              >
                <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
              </svg>
            </button>
          </div>
        </header>

        {/* hero */}
        <Contact />

        {/* footer */}
        <footer className="flex select-none items-center justify-between bg-indigo-700 px-3 py-2 text-center text-sm font-medium tracking-wide text-white lg:justify-around">
          <p>
            2024 &copy; <span className="font-edu">risat</span>
          </p>

          <div className="flex items-center gap-2">
            <button
              className="&.active rounded-sm bg-light px-3 py-1 text-xs font-medium text-black-500 transition-colors duration-300 ease-in-out hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light lg:text-sm"
              onClick={() => handleChangeLang("en")}
            >
              EN
            </button>
            <button
              className="rounded-sm bg-light px-3 py-1 text-xs font-medium text-black-500 transition-colors duration-300 ease-in-out hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light lg:text-sm"
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
