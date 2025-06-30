import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Note } from "../../context/Note";

const NoteForm = ({ showForm }: any) => {
  const { t } = useTranslation("global");

  const { addNote } = useContext(Note);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNote({
      title: title,
      desc: desc,
      id: crypto.randomUUID(),
      time: Date.now(),
    });
    setTitle("");
    setDesc("");
    showForm();
  };

  return (
    <main className="absolute left-0 top-0 z-50 flex min-h-dvh w-full items-center justify-center px-8 backdrop-blur-sm">
      <button
        type="button"
        className="absolute right-6 top-52 animate-fadeIn rounded-full bg-slate-900 p-1 transition duration-200 ease-in-out hover:bg-slate-800 lg:right-72 lg:p-2"
        onClick={showForm}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-6 text-white lg:size-7"
        >
          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </svg>
      </button>
      <form
        onSubmit={formSubmit}
        className="mx-auto grid w-full max-w-lg gap-2 backdrop-blur-xl"
      >
        <input
          type="text"
          placeholder={t("Note.note_title")}
          className="w-full rounded bg-slate-950 px-2 py-1 text-sm font-medium text-white shadow-[0_0_2px] shadow-slate-400 transition-all duration-200 ease-in focus:shadow-[0_0_8px] focus:outline-none lg:px-3 lg:py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          required
        />
        <textarea
          placeholder={t("Note.note_desc")}
          className="w-full rounded bg-slate-950 px-2 py-1 text-sm font-medium text-white shadow-[0_0_2px] shadow-slate-400 transition-all duration-200 ease-in focus:shadow-[0_0_8px] focus:outline-none lg:px-3 lg:py-2"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        ></textarea>
        <button
          className="mx-auto rounded bg-blue-700 p-1 text-light transition-colors duration-200 ease-in-out hover:bg-blue-600"
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
    </main>
  );
};

export default NoteForm;
