import { createFileRoute } from "@tanstack/react-router";
import { useContext, useEffect, useState } from "react";

import AnimationLoading from "../components/AnimationLoading";
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";
import EditForm from "../components/todo/EditForm";
import Button from "../components/Button";
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
            <header className="bg-gradient-to-br from-indigo-700 to-indigo-500 px-6 py-3 text-light">
              <nav className="container mx-auto flex items-center justify-between">
                <h3 className="text-sm font-semibold tracking-wide md:text-base">
                  {t("dashboard.list")}
                </h3>
                <Sun />
              </nav>
            </header>

            <main className="bg-white dark:bg-black-500">
              <section className="container mx-auto w-full px-4 pt-20">
                {isEdited && <EditForm />}

                <TodoForm />
                {text && <TodoList />}
              </section>
              <Button />
            </main>
          </article>
        )}
      </main>
    );
  },
});
