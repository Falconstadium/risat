import { useState } from "react";
import { useTranslation } from "react-i18next";

const TodoForm = ({ addTodo }: any) => {
  const { t } = useTranslation("global");

  const [todo, setTodo] = useState("");

  const formSubmit = (e: any) => {
    e.preventDefault();
    addTodo({
      name: todo,
      checked: false,
      id: crypto.randomUUID(),
      time: Date.now(),
    });
    setTodo("");
  };

  return (
    <form
      onSubmit={formSubmit}
      className="mx-auto flex flex-1 items-center justify-center gap-2 lg:max-w-md"
    >
      <input
        type="text"
        placeholder={t("TODO.todo_btn")}
        className="w-3/4 rounded bg-light px-2 py-1 text-sm font-medium shadow-[0_0_2px] shadow-slate-400 transition-all duration-200 ease-in focus:shadow-[0_0_8px] focus:outline-none dark:bg-black-100 dark:text-light"
        value={todo}
        onInput={(e: any) => setTodo(e.target.value)}
        autoFocus
        required
      />
      <button
        className="rounded bg-blue-700 p-1 text-light transition-colors duration-200 ease-in-out hover:bg-blue-600"
        type="submit"
        aria-label="add todo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </form>
  );
};

export default TodoForm;
