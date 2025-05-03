import { useState } from "react";
import { useTranslation } from "react-i18next";

const NoteForm = ({ note, addNote, deleteAll }: any) => {
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
      {note != 0 ? (
        <button
          type="button"
          onClick={deleteAll}
          title={t("dashbord.deleteAll")}
          className="flex items-center gap-1 rounded bg-red-700 p-1 text-xs text-light transition-colors duration-200 ease-in-out hover:bg-red-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trash-icon lucide-trash"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
          <span>({note.length})</span>
        </button>
      ) : null}
    </form>
  );
};

export default NoteForm;
