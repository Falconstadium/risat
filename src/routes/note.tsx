import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";
import NavbarDash from "../components/NavbarDash";
import { toast, Toaster } from "sonner";

export const Route = createFileRoute("/note")({
  component: () => {
    const { t } = useTranslation("global");

    const storedNote = JSON.parse(localStorage.getItem("note") || "[]");

    const [desc, setDesc] = useState<any>(storedNote);

    const descRef = useRef<any>();

    const addNote = () => {
      const description = descRef.current.value.trim();
      console.log(description);
      const newDesc = { description, id: `${desc}-${Date.now()}` };
      descRef.current.value = "";
      description === ""
        ? alert("enter a description")
        : setDesc([...desc, newDesc]);
      toast.success(t("Note.toast"));
    };

    const deleteNote = (index: any) => {
      const newNote = [...desc];
      newNote.splice(index, 1);
      setDesc(newNote);
      toast.success(t("Note.toast_delete"));
    };

    useEffect(() => {
      localStorage.setItem("note", JSON.stringify(desc));
    }, [desc]);

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
        className={`${dark && "dark"} grid min-h-dvh w-full grid-rows-[auto_1fr]`}
      >
        {/* header */}
        <NavbarDash toggleMode={toggleMode} />

        {/* hero */}
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
            <section className="w-full animate-fadeIn break-words px-4 lg:w-[500px]">
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <label
                    htmlFor="input-desc"
                    className="text-sm font-medium tracking-wide md:text-base"
                  >
                    {t("Note.label")}
                  </label>
                  <textarea
                    className="rounded border border-black-500 bg-light px-2 py-1 text-xs focus:outline-none dark:border-light dark:bg-black-500 md:text-sm"
                    name=""
                    ref={descRef}
                    id="input-desc"
                    placeholder={t("Note.placeholder")}
                  ></textarea>
                </div>
                <button
                  className="rounded-md bg-blue-700 px-4 py-1 text-xs font-medium capitalize tracking-wide text-light transition-colors duration-300 ease-in-out hover:bg-blue-600 lg:mx-auto"
                  aria-label="Add Note"
                  onClick={addNote}
                >
                  {t("Note.note_btn")}
                </button>
              </div>

              <div className="grid gap-2 pt-6">
                {desc.map(({ description }: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded px-3 py-1 shadow-sm shadow-black-500 dark:shadow-light"
                    >
                      <p
                        key={desc.id}
                        className="text-xs font-medium md:text-sm"
                      >
                        {description}
                      </p>

                      <button
                        className="rounded bg-red-700 px-2 py-1 text-xs font-medium text-light transition-colors duration-300 ease-in-out hover:bg-red-500"
                        aria-label="Delete Note"
                        title={t("TODO.delete_btn")}
                        onClick={() => deleteNote(index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
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
              </div>
            </section>

            <Button />
            <Toaster />
          </main>
        )}
      </article>
    );
  },
});
