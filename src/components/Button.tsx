import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

const Button = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <button className="fixed left-2 top-12">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 rounded-md bg-black-500 px-4 py-2 text-[12px] font-medium text-light transition-colors duration-300 ease-in-out hover:bg-gray-700 dark:bg-light dark:text-black-500 dark:hover:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          {t("dashbord.btn")}
        </Link>
      </button>
    </>
  );
};

export default Button;
