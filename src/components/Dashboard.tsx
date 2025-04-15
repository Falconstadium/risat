import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import todoImg from "../assets/img/todo.jpg";
import noteImg from "../assets/img/notes.jpg";
import expenseImg from "../assets/img/expense.png";
import passImg from "../assets/img/pass.jpg";

const Dashbord = () => {
  const { t } = useTranslation("global");

  const tools = [
    {
      id: 1,
      title: `${t("dashbord.list")}`,
      href: "/todo",
      img: todoImg,
    },
    {
      id: 2,
      title: `${t("dashbord.note")}`,
      href: "/note",
      img: noteImg,
    },
    {
      id: 3,
      title: `${t("dashbord.expense")}`,
      href: "/expense",
      img: expenseImg,
    },
    {
      id: 4,
      title: `${t("dashbord.pass")}`,
      href: "/pass-generate",
      img: passImg,
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
    <main className="grid place-content-center bg-white dark:bg-black-500">
      {load ? (
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"></div>
      ) : (
        <section className="container mx-auto grid w-full animate-fadeIn place-content-center place-items-center gap-8 px-6 py-4 dark:text-light lg:grid-cols-2 lg:gap-12">
          {tools.map((tool) => {
            return (
              <div
                className="animate-fadeLeft flex w-full items-center gap-4 overflow-hidden rounded-xl shadow-dark dark:shadow-lightWhite"
                key={tool.id}
              >
                <img
                  src={tool.img}
                  alt={tool.img}
                  className="w-1/2 object-cover"
                />
                <div className="grid w-1/2 place-items-center gap-2">
                  <h2 className="animate-fadeUp bg-gradient-to-b from-neutral-700 to-neutral-900 bg-clip-text text-center text-2xl font-semibold text-transparent dark:from-neutral-200 dark:to-neutral-400 md:text-3xl">
                    {tool.title}
                  </h2>

                  <Link
                    className="flex items-center gap-2 text-sm font-medium text-blue-700 transition-colors duration-200 ease-in-out hover:text-blue-600 lg:text-base"
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
                </div>
              </div>
            );
          })}
        </section>
      )}
    </main>
  );
};

export default Dashbord;
