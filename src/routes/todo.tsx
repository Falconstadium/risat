import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";
import NavbarDash from "../components/NavbarDash";

export const Route = createFileRoute("/todo")({
  component: () => {
    const { t } = useTranslation("global");

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

    //animation
    const [load, setLoad] = useState(false);
    useEffect(() => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
      }, 1500);
    }, []);

    return (
      <article
        className={`${dark && "dark"} grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto]`}
      >
        {/* header */}
        <NavbarDash toggleMode={toggleMode} />

        {/* main */}
        {load ? (
          <div className="grid w-full place-content-center bg-white dark:bg-black-500">
            <div className="flex flex-row gap-2">
              <div className="h-4 w-4 animate-bounce rounded-full bg-indigo-700"></div>
              <div className="h-4 w-4 animate-bounce rounded-full bg-indigo-700 [animation-delay:-.3s]"></div>
              <div className="h-4 w-4 animate-bounce rounded-full bg-indigo-700 [animation-delay:-.5s]"></div>
            </div>
          </div>
        ) : (
          <main className="place-content-center bg-white dark:bg-black-500 dark:text-light lg:grid">
            <section className="w-full animate-fadeIn break-words px-4 lg:w-[500px]">
              <div className="flex flex-col items-center justify-center gap-2 lg:flex-row">
                <input
                  ref={inputRef}
                  type="text"
                  className="w-full flex-1 rounded border border-solid border-black-500 bg-light px-2 py-1 text-sm font-medium focus:outline-none dark:border-light dark:bg-black-500 dark:text-light lg:text-base"
                  required
                />
                <button
                  type="submit"
                  className="transistion-colors min-w-auto rounded-md bg-blue-700 px-4 py-1 text-sm font-medium tracking-wide text-light duration-300 ease-in-out hover:bg-blue-600"
                  onClick={addTask}
                >
                  {t("TODO.todo_btn")}
                </button>
              </div>
              <ul className="mx-auto grid w-full gap-2 pt-6 md:gap-3 lg:place-content-center">
                {todo &&
                  todo.map &&
                  todo.map(({ text, completed }, index) => {
                    return (
                      <div
                        key={index}
                        className="flex cursor-pointer items-center justify-between break-words rounded px-2 py-2 font-medium shadow-sm shadow-black-500 dark:shadow-light lg:w-[450px] lg:text-sm"
                      >
                        <li
                          id={text.id}
                          className={completed ? "line-through" : ""}
                          onClick={() => completTask(index)}
                        >
                          {text}
                        </li>
                        <button
                          className="rounded bg-red-700 px-2 py-[0.1rem] text-sm font-medium text-light transition-colors duration-300 ease-in-out hover:bg-red-600"
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
          </main>
        )}
      </article>
    );
  },
});
