import { useState } from "react";
import { useTranslation } from "react-i18next";

const NoteForm = ({ addNote }: any) => {
  const { t } = useTranslation("global");

  const [memo, setMemo] = useState("");

  const formSubmit = (e: any) => {
    e.preventDefault();
    addNote({
      name: memo,
      id: crypto.randomUUID(),
      time: Date.now(),
    });
    setMemo("");
  };

  return (
    <form
      onSubmit={formSubmit}
      className="mx-auto flex flex-1 items-center justify-center gap-2 lg:max-w-md"
    >
      <input
        type="text"
        placeholder={t("Note.note_btn")}
        className="w-3/4 rounded bg-light px-2 py-1 text-sm font-medium shadow-[0_0_2px] shadow-slate-400 transition-all duration-200 ease-in first-letter:capitalize focus:shadow-[0_0_8px] focus:outline-none dark:bg-black-100 dark:text-light"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
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

export default NoteForm;
