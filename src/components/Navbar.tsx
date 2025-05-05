import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Sun } from "./Sun";

const Navbar = () => {
  const { t } = useTranslation("global");

  //bg-sticky
  const [color, setColor] = useState(false);
  const changeBg = () => {
    window.scrollY >= 10 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeBg);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white px-6 py-4 text-black-100 dark:bg-black-500 dark:text-light lg:py-5 ${color ? "bg-white/75 shadow-dark backdrop-blur dark:bg-black-500/75 dark:shadow-lightWhite" : ""}`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <div>
          <Link
            to="/"
            className="font-Fancy text-lg font-bold tracking-wide md:text-xl"
          >
            Risat.
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <Link
            to="/about"
            className="rounded-2xl px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-300 ease-in-out hover:bg-black-500 hover:text-light dark:hover:bg-light dark:hover:text-black-500 md:text-sm [&.active]:bg-black-500 [&.active]:text-light"
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/contact"
            className="mr-7 rounded-2xl px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-300 ease-in-out hover:bg-black-500 hover:text-light dark:hover:bg-light dark:hover:text-black-500 md:text-sm [&.active]:bg-black-500 [&.active]:text-light"
          >
            {t("nav.contact")}
          </Link>
          <Sun />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
