import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";

export const Route = createFileRoute("/note")({
  component: () => {
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

    return (
      <main
        className={`${dark && "dark"} grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto]`}
      >
        <header className="flex items-center justify-around bg-indigo-700 px-4 py-1 text-white lg:px-3 lg:py-2">
          <div className="cursor-pointer">
            <Link to="/" className="font-edu tracking-wider">
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

        {/* hero */}
        <main className="place-content-center place-items-center pt-4 dark:bg-black-500 dark:text-light lg:grid">
          <section className="w-full gap-4 break-words px-4 lg:w-[500px]">
            <div className="grid gap-2">
              <div className="grid gap-1">
                <label
                  htmlFor="input-desc"
                  className="font-medium tracking-wide"
                >
                  Description
                </label>
                <textarea
                  className="rounded border border-black-500 bg-light px-2 py-1 placeholder:text-sm focus:outline-none dark:border-light dark:bg-black-500"
                  name=""
                  ref={descRef}
                  id="input-desc"
                  placeholder="Start typing.."
                ></textarea>
              </div>
              <button
                className="mt-2 rounded-md bg-blue-700 px-4 py-1 text-sm font-medium tracking-wide text-light transition-colors duration-300 ease-in-out hover:bg-blue-600 lg:mx-auto"
                onClick={addNote}
              >
                Add Note
              </button>
            </div>

            <div className="grid gap-2 pt-6">
              {desc.map(({ description }: any, index: any) => {
                return (
                  <div
                    key={desc.id}
                    className="flex items-center justify-between rounded border border-solid border-black-500 p-2 dark:border-light"
                  >
                    <p key={desc.id} className="text-sm">
                      {description}
                    </p>

                    <button
                      className="rounded bg-red-700 px-2 py-[0.1rem] text-sm font-medium text-light transition-colors duration-300 ease-in-out hover:bg-red-500"
                      onClick={() => deleteNote(index)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          <Button />
        </main>
      </main>
    );
  },
});
