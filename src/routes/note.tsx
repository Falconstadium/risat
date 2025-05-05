import { createFileRoute, Link } from "@tanstack/react-router";
import { useContext, useEffect, useState } from "react";

import AnimationLoading from "../components/AnimationLoading";
import NoteForm from "../components/note/NoteForm";
import NoteList from "../components/note/NoteList";
import EditNote from "../components/note/EditNote";
import { themeContext } from "../context/theme";
import { todoNote } from "../context/TodoNote";
import { useTranslation } from "react-i18next";
import { Sun } from "../components/Sun";

export const Route = createFileRoute("/note")({
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
                <Link to="/" className="flex items-center gap-3">
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
                  <h3 className="font-Fancy text-lg font-semibold tracking-wide md:tracking-wider">
                    {t("dashboard.note")}
                  </h3>
                </Link>
                <Sun />
              </nav>
            </header>

            <main className="bg-white dark:bg-black-500">
              <section className="w-full px-4 pt-10">
                {isEdited && <EditNote />}
                <NoteForm />
                {text && <NoteList />}
              </section>
            </main>
          </article>
        )}
      </main>
    );
  },
});
