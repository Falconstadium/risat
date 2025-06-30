import { createContext, ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

type NoteProps = {
  id: string;
  title: string;
  desc: string;
  time: number;
};

interface noteFcts {
  addNote({}): void;
  deleteNote(id: string): void;
  deleteAll(): void;
  modifyEdit({}): void;
  closeEditForm(): void;
  showEditForm(takeNote: NoteProps): void;
  editedNote: { title: string; desc: string };
  note: NoteProps[];
  isEditedNote: boolean;
}

export const Note = createContext<noteFcts>({
  addNote({}) {},
  deleteNote() {},
  deleteAll() {},
  modifyEdit() {},
  closeEditForm() {},
  showEditForm() {},
  editedNote: { title: "", desc: "" },
  note: [],
  isEditedNote: false,
});

export const NoteProvider = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation("global");

  const storedNote = localStorage.getItem("note");
  const [note, setNote] = useState<NoteProps[]>(
    storedNote ? JSON.parse(storedNote) : [],
  );
  //Open Editing Form:
  const [isEditedNote, setIsEditedNote] = useState(false);
  //Edit Note:
  const [editedNote, setEditedNote] = useState<any>(null);

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

  const deleteAll = () => {
    setNote([]);
    toast.success(t("Note.allNotes"));
  };

  const modifyEdit = (task: string | any) => {
    setNote((prevTask: any[]) =>
      prevTask.map((t) =>
        t.id === task.id ? { ...t, title: task.title, desc: task.desc } : t,
      ),
    );
    closeEditForm();
    toast.success(t("Note.toast_edit"));
  };

  const closeEditForm = () => {
    setIsEditedNote(false);
  };

  const showEditForm = (task: NoteProps) => {
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
