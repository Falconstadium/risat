import {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

export type NoteProps = {
  id: string;
  title: string;
  desc: string;
  time: number;
};
interface NoteTypes {
  note: NoteProps[];
  editedNote: NoteProps | null;
  isEditedNote: boolean;
  addNote(task: NoteProps): void;
  deleteNote(id: string): void;
  deleteAll(): void;
  modifyEdit(task: {
    title: string | undefined;
    desc: string | undefined;
  }): void;
  closeEditForm(): void;
  showEditForm(task: SetStateAction<NoteProps | null>): void;
}

export const Note = createContext<NoteTypes>({
  note: [],
  editedNote: null,
  isEditedNote: false,
  addNote() {},
  deleteNote() {},
  deleteAll() {},
  modifyEdit() {},
  closeEditForm() {},
  showEditForm() {},
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
  const [editedNote, setEditedNote] = useState<NoteProps | null>(null);

  const addNote = (task: NoteProps) => {
    setNote((prevTask) => [...prevTask, task]);
    toast.success(t("Note.toast"));
  };

  const deleteNote = (id: string) => {
    setNote((prevTask) => prevTask.filter((t: { id: string }) => t.id !== id));
    toast.success(t("Note.toast_delete"));
  };

  const deleteAll = () => {
    setNote([]);
    toast.success(t("Note.allNotes"));
  };

  const modifyEdit = (task: {
    id: string;
    title: string | undefined;
    desc: string | undefined;
  }) => {
    setNote((prevTask) =>
      prevTask.map((t) =>
        t.id === task.id
          ? { ...t, title: task.title ?? "", desc: task.desc ?? "" }
          : t,
      ),
    );
    closeEditForm();
    toast.success(t("Note.toast_edit"));
  };

  const closeEditForm = () => {
    setIsEditedNote(false);
  };

  const showEditForm = (task: SetStateAction<NoteProps | null>) => {
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
