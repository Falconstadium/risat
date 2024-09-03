import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

const Dashbord = () => {
  const { t } = useTranslation("global");
  return (
    <>
      <section className="grid place-content-center place-items-center gap-6 dark:bg-black-500 dark:text-light lg:grid-cols-2 lg:gap-0 lg:gap-y-4 lg:px-32">
        <div className="grid w-[300px] place-items-center gap-4 rounded border border-solid border-black-500 py-4 text-center dark:border-light lg:w-[400px] lg:py-6">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            {t("dashbord.list")}
          </h2>
          <button className="font-medium text-blue-600 transition-colors duration-200 ease-in-out hover:text-blue-400">
            <Link className="flex items-center gap-2 text-lg" to="/todo">
              {t("dashbord.link")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </button>
        </div>

        <div className="grid w-[300px] place-items-center gap-4 rounded border border-solid border-black-500 py-4 text-center dark:border-light lg:w-[400px] lg:py-6">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            {t("dashbord.note")}
          </h2>
          <button className="font-medium text-blue-600 transition-colors duration-200 ease-in-out hover:text-blue-400">
            <Link className="flex items-center gap-2 text-lg" to="/note">
              {t("dashbord.link")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Dashbord;
