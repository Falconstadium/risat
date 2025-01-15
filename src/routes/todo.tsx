import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";
import NavbarDash from "../components/NavbarDash";
import { toast, Toaster } from "sonner";

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
      toast.success(t("TODO.toast"));
    };

    const completTask = (index: number) => {
      const newTodo = [...todo];
      newTodo[index].completed = !newTodo[index].completed;
      setTodo(newTodo);
    };

    const deleteTask = (index: number) => {
      const newTodo = [...todo];
      newTodo.splice(index, 1);
      setTodo(newTodo);
      toast.success(t("TODO.toast_delete"));
    };

    // TODO: add an update button

    // darkMode
    const darkMode = JSON.parse(localStorage.getItem("mode") || "[]");
    const [dark, setDark] = useState(darkMode);

    const toggleMode = () => {
      setDark(!dark);
    };

    useEffect(() => {
      localStorage.setItem("task", JSON.stringify(todo));
      localStorage.setItem("mode", JSON.stringify(dark));
    }, [todo, dark]);

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
        className={`${dark && "dark"} grid min-h-dvh w-full grid-rows-[auto_1fr]`}
      >
        {/* header */}
        <NavbarDash toggleMode={toggleMode} />

        {/* main */}
        {load ? (
          <div className="grid w-full place-content-center bg-white dark:bg-black-500">
            <div className="flex flex-row gap-2">
              <div className="h-3 w-3 animate-bounce rounded-full bg-indigo-700"></div>
              <div className="h-3 w-3 animate-bounce rounded-full bg-indigo-700 [animation-delay:-.3s]"></div>
              <div className="h-3 w-3 animate-bounce rounded-full bg-indigo-700 [animation-delay:-.5s]"></div>
            </div>
          </div>
        ) : (
          <main className="place-content-center place-items-center bg-white dark:bg-black-500 dark:text-light lg:grid">
            <section className="container w-full animate-fadeIn break-words px-4 lg:w-[500px]">
              <div className="grid gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  className="w-full flex-1 rounded border border-solid border-black-500 bg-light px-2 py-1 text-sm font-medium focus:outline-none dark:border-light dark:bg-black-500 dark:text-light lg:text-base"
                  required
                />
                <button
                  type="submit"
                  className="transistion-colors min-w-auto rounded-md bg-blue-700 px-4 py-1 text-xs font-medium tracking-wide text-light duration-300 ease-in-out hover:bg-blue-600 lg:mx-auto"
                  aria-label="Add Todo"
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
                        className="flex cursor-pointer items-center justify-between break-words rounded px-2 py-1 font-medium shadow-sm shadow-black-500 dark:shadow-light lg:w-[450px]"
                      >
                        <li
                          id={text.id}
                          className={`text-xs md:text-sm ${completed ? "text-neutral-600 line-through dark:text-neutral-400" : ""}`}
                          onClick={() => completTask(index)}
                        >
                          {text}
                        </li>

                        <button
                          type="button"
                          className="rounded bg-red-700 p-1 text-light transition-colors duration-300 ease-in-out hover:bg-red-600"
                          aria-label="Delete Todo"
                          title={t("TODO.delete_btn")}
                          onClick={() => deleteTask(index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    );
                  })}
              </ul>
            </section>
            <Button />
            <Toaster richColors />
          </main>
        )}
      </article>
    );
  },
});
