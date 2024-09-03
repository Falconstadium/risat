import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/todo")({
  component: () => {
    const { t, i18n } = useTranslation("global");
    const handleChangeLang = (lang: string) => {
      i18n.changeLanguage(lang);
    };

    const storedTasks = JSON.parse(localStorage.getItem("task") || "[]");

    const [todo, setTodo] = useState<any[]>(storedTasks);

    const inputRef: any = useRef();

    const addTask = () => {
      const text = inputRef.current.value.trim();
      const newItem = { completed: false, text, id: Date.now() };
      text === "" ? alert("enter a Task") : setTodo([...todo, newItem]);
      inputRef.current.value = "";
    };

    useEffect(() => {
      localStorage.setItem("task", JSON.stringify(todo));
    }, [todo]);

    const completTask = (index: any) => {
      const newTodo = [...todo];
      newTodo[index].completed = !newTodo[index].completed;
      setTodo(newTodo);
    };

    const deleteTask = (index: any) => {
      const newTodo = [...todo];
      newTodo.splice(index, 1);
      setTodo(newTodo);
    };

    // darkMode
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
        {/* header */}
        <header className="flex items-center justify-around bg-indigo-700 px-4 py-2 text-white lg:px-3 lg:py-2">
          <div className="cursor-pointer">
            <Link to="/" className="font-edu tracking-wide">
              risat.
            </Link>
          </div>

          <button onClick={toggleMode}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-3 h-[18px] w-[18px] text-black-500 transition-colors duration-300 ease-in-out dark:text-light"
            >
              <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
            </svg>
          </button>
        </header>

        {/* main */}
        <main className="place-content-center dark:bg-black-500 dark:text-light lg:grid">
          <section className="w-full break-words px-4 lg:w-[500px]">
            <div className="flex items-center justify-center gap-2">
              <input
                ref={inputRef}
                type="text"
                className="flex-1 rounded border border-solid border-black-500 bg-light px-2 py-1 font-medium focus:outline-none dark:border-light dark:bg-black-500 dark:text-light lg:text-sm"
                required
              />
              <button
                type="submit"
                className="transs rounded-md bg-blue-700 px-4 py-1 text-sm font-medium tracking-wide text-light duration-300 ease-in-out hover:bg-blue-600"
                onClick={addTask}
              >
                {t("TODO.todo_btn")}
              </button>
            </div>
            <ul className="grid place-content-center gap-2 pt-6">
              {todo &&
                todo.map &&
                todo.map(({ text, completed }, index) => {
                  return (
                    <div className="flex cursor-pointer items-center justify-between break-words rounded bg-black-500 px-2 py-2 font-medium text-light dark:bg-light dark:text-black-500 lg:w-[450px] lg:text-sm">
                      <li
                        key={text.id}
                        id={text.id}
                        className={completed ? "line-through" : ""}
                        onClick={() => completTask(index)}
                      >
                        {text}
                      </li>
                      <button
                        className="rounded bg-red-500 px-2 py-[0.1rem] text-sm font-medium text-light transition-colors duration-300 ease-in-out hover:bg-red-700"
                        onClick={() => deleteTask(index)}
                      >
                        {t("TODO.delete_btn")}
                      </button>
                    </div>
                  );
                })}
            </ul>
          </section>
          <Button />
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <button
              className="&.active rounded-sm bg-light px-3 py-1 text-xs font-medium text-black-500 hover:bg-black-100 hover:text-light focus:bg-black-100 focus:text-light lg:text-sm"
              onClick={() => handleChangeLang("en")}
            >
              EN
            </button>
            <button
              className="rounded-sm bg-light px-3 py-1 text-xs font-medium text-black-500 hover:bg-black-100 hover:text-light focus:bg-black-100 focus:text-light lg:text-sm"
              onClick={() => handleChangeLang("fr")}
            >
              FR
            </button>
          </div>
        </main>
      </main>
    );
  },
});
