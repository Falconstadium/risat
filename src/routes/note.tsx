import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import { useTranslation } from "react-i18next";

import NavbarDash from "../components/NavbarDash";
import AnimationLoading from "../components/AnimationLoading";
import NoteForm from "../components/note/NoteForm";
import NoteList from "../components/note/NoteList";
import EditNote from "../components/note/EditNote";
import Button from "../components/Button";

export const Route = createFileRoute("/note")({
  component: () => {
    const { t } = useTranslation("global");
    document.title = `risat | ${t("dashbord.note")}`;

    const storedNote = JSON.parse(localStorage.getItem("note") || "[]");

    const [note, setNote] = useState<any>(storedNote);
    //Open Editing Form:
    const [isEdited, setIsEdited] = useState(false);
    //Edit Todo:
    const [editedNote, setEditedNote] = useState(null);

    const addNote = (takeNote: any) => {
      setNote((prevTask: any) => [...prevTask, takeNote]);
      toast.success(t("Note.toast"));
    };

    const deleteNote = (id: any) => {
      setNote((prevTask: any) => prevTask.filter((t: any) => t.id !== id));
      toast.success(t("Note.toast_delete"));
    };

    const modifyEdit = (takeNote: any) => {
      setNote((prevTask: any) =>
        prevTask.map((t: any) =>
          t.id === takeNote.id ? { ...t, name: takeNote.name } : t,
        ),
      );
      closeEditForm();
      toast.success(t("Note.toast_edit"));
    };

    const closeEditForm = () => {
      setIsEdited(false);
    };

    const showEditForm = (task: any) => {
      setEditedNote(task);
      setIsEdited(true);
    };

    // darkMode
    const darkMode = JSON.parse(localStorage.getItem("mode") || "[]");
    const [dark, setDark] = useState(darkMode);

    const toggleMode = () => {
      setDark(!dark);
    };

    const [load, setLoad] = useState(false);

    useEffect(() => {
      localStorage.setItem("note", JSON.stringify(note));
      localStorage.setItem("mode", JSON.stringify(dark));
      //animation
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
      }, 1500);
    }, [note, dark]);

    return (
      <>
        {load ? (
          <AnimationLoading />
        ) : (
          <article
            className={`${dark && "dark"} grid min-h-dvh w-full animate-fadeIn grid-rows-[auto_1fr]`}
          >
            <NavbarDash toggleMode={toggleMode} />

            <main className="bg-white dark:bg-black-500">
              <section className="w-full px-4 pt-20">
                {isEdited && (
                  <EditNote
                    modifyEdit={modifyEdit}
                    editedNote={editedNote}
                    closeEditForm={closeEditForm}
                  />
                )}
                <NoteForm addNote={addNote} />
                {note && (
                  <NoteList
                    note={note}
                    deleteNote={deleteNote}
                    showEditForm={showEditForm}
                  />
                )}
              </section>
              <Button />

              <Toaster richColors />
            </main>
          </article>
        )}
      </>
    );
  },
});
