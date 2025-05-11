import { createFileRoute, Link } from "@tanstack/react-router";
import { useContext, useEffect, useState } from "react";

import AnimationLoading from "../components/AnimationLoading";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";
import EditForm from "../components/todo/EditForm";
import { themeContext } from "../context/theme";
import { todoNote } from "../context/TodoNote";
import { Sun } from "../components/Sun";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/todo")({
  component: () => {
    const { text, isEdited } = useContext(todoNote);

    // darkMode
    const { theme } = useContext(themeContext);

    //animation
    const [load, setLoad] = useState(false);
    useEffect(() => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
      }, 1000);
    }, []);

    const { t } = useTranslation("global");

    return (
      <main className={`${theme && "dark"}`}>
        {load ? (
          <AnimationLoading theme={theme} />
        ) : (
          <article className="grid min-h-dvh w-full grid-rows-[auto_1fr]">
            {/* Navbar */}
            <header className="bg-gradient-to-br from-indigo-700 to-indigo-500 px-6 py-5 text-light">
              <nav className="container mx-auto flex items-center justify-between">
                <Link to="/dashboard" className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-6"
                  >
                    <g clipPath="url(#a)">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.25-7.25a.75.75 0 0 0 0-1.5H8.66l2.1-1.95a.75.75 0 1 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 0 0 1.02-1.1l-2.1-1.95h4.59Z"
                        clipRule="evenodd"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path d="M0 0h20v20H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="relative">
                    <h3 className="font-Fancy text-lg font-semibold tracking-wide transition-all duration-200 ease-in-out after:absolute after:-bottom-1 after:left-0 after:right-0 after:mx-auto after:h-1 after:w-0 after:rounded-md after:bg-white hover:after:w-16 md:tracking-wider">
                      {t("dashboard.list")}
                    </h3>
                  </div>
                </Link>
                <Sun />
              </nav>
            </header>

            <main className="bg-white dark:bg-black-500">
              <section className="container mx-auto w-full px-4 pt-10">
                {isEdited && <EditForm />}

                <TodoForm />
                {text && <TodoList />}
              </section>
            </main>
          </article>
        )}
      </main>
    );
  },
});
