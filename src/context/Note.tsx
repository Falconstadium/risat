import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

export const Note = createContext<unknown | any>(undefined);

export const NoteProvider = ({ children }: any) => {
  const { t } = useTranslation("global");

  const storedNote = JSON.parse(localStorage.getItem("note") || "[]");
  const [note, setNote] = useState(storedNote);
  //Open Editing Form:
  const [isEditedNote, setIsEditedNote] = useState(false);
  //Edit Note:
  const [editedNote, setEditedNote] = useState(null);

  const addNote = (task: string) => {
    setNote((prevTask: any) => [...prevTask, task]);
    toast.success(t("Note.toast"));
  };

  const deleteNote = (id: string) => {
    setNote((prevTask: string | any) =>
      prevTask.filter((t: { id: string }) => t.id !== id),
    );
    toast.success(t("Note.toast_delete"));
  };

  const deleteAll = (id: string) => {
    setNote((prevTask: string | any) =>
      prevTask.filter((t: { id: string }) => t.id === id),
    );
    toast.success(t("Note.allNotes"));
  };

  const updateNote = (id: string) => {
    setNote((prevTask: string | any) =>
      prevTask.map((t: { id: string; checked: unknown }) =>
        t.id === id ? { ...t, checked: !t.checked } : t,
      ),
    );
  };

  const modifyEdit = (task: string | any) => {
    setNote((prevTask: any[]) =>
      prevTask.map((t) => (t.id === task.id ? { ...t, name: task.name } : t)),
    );
    closeEditForm();
    toast.success(t("Note.toast_edit"));
  };

  const closeEditForm = () => {
    setIsEditedNote(false);
  };

  const showEditForm = (task: string | any) => {
    setEditedNote(task);
    setIsEditedNote(true);
  };

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  return (
    <Note.Provider
      value={{
        note,
        addNote,
        deleteNote,
        updateNote,
        deleteAll,
        modifyEdit,
        showEditForm,
        closeEditForm,
        isEditedNote,
        editedNote,
      }}
    >
      {children}
    </Note.Provider>
  );
};
