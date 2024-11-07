import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

const Navbar = ({ toggleMode }: any) => {
  const { t } = useTranslation("global");

  return (
    <header className="flex items-center justify-between bg-white px-4 py-2 text-black-100 dark:bg-black-100 dark:text-light lg:justify-around lg:px-0 lg:py-4">
      <div>
        <Link
          to="/"
          className="text-sm font-semibold tracking-wider md:text-base lg:text-lg lg:tracking-widest"
        >
          risat.
        </Link>
      </div>
      <div className="flex items-center gap-1 lg:gap-2">
        <Link
          to="/about"
          className="rounded-2xl px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-200 ease-in-out hover:bg-black-500 hover:text-light md:text-sm lg:text-base [&.active]:bg-black-500 [&.active]:text-light"
        >
          {t("nav.about")}
        </Link>
        <Link
          to="/contact"
          className="rounded-2xl px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-200 ease-in-out hover:bg-black-500 hover:text-light md:text-sm lg:text-base [&.active]:bg-black-500 [&.active]:text-light"
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
  );
};

export default Navbar;
