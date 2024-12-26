import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Dashbord = () => {
  const { t } = useTranslation("global");

  const tools = [
    {
      id: 1,
      title: `${t("dashbord.list")}`,
      href: "/todo",
    },
    {
      id: 2,
      title: `${t("dashbord.note")}`,
      href: "/note",
    },
    {
      id: 3,
      title: `${t("dashbord.expense")}`,
      href: "/expense",
    },
    {
      id: 4,
      title: `${t("dashbord.pass")}`,
      href: "/pass-generate",
    },
  ];

  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 1500);
  }, []);

  return (
    <main className="grid place-content-center bg-gray-100 dark:bg-black-500">
      {load ? (
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"></div>
      ) : (
        <section className="container mx-auto grid w-full animate-fadeIn place-content-center place-items-center gap-6 px-2 py-4 dark:text-light lg:grid-cols-2 lg:gap-0 lg:gap-x-8 lg:gap-y-12">
          {tools.map((tool) => {
            return (
              <div
                className="animate-fadeLeft grid w-full place-items-center gap-4 rounded-xl bg-light px-4 py-3 text-center dark:bg-black-100 md:py-6 lg:px-6 lg:py-8"
                key={tool.id}
              >
                <h2 className="animate-fadeUp bg-gradient-to-b from-neutral-700 to-neutral-900 bg-clip-text text-center text-2xl font-semibold text-transparent dark:from-neutral-200 dark:to-neutral-400 md:text-3xl">
                  {tool.title}
                </h2>
                <button className="font-medium text-blue-600 transition-colors duration-200 ease-in-out hover:text-blue-400">
                  <Link
                    className="flex items-center gap-2 text-sm lg:text-base"
                    to={tool.href}
                  >
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
            );
          })}
        </section>
      )}
    </main>
  );
};

export default Dashbord;
