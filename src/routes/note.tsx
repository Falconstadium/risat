import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";
import NavbarDash from "../components/NavbarDash";

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
    };

    const deleteNote = (index: any) => {
      const newNote = [...desc];
      newNote.splice(index, 1);
      setDesc(newNote);
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
                        onClick={() => deleteNote(index)}
                      >
                        {t("TODO.delete_btn")}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>

            <Button />
          </main>
        )}
      </article>
    );
  },
});
