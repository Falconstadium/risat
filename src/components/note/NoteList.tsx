import { NoteProps } from "../../context/Note";
import { useNotes } from "../../hooks/useNotes";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const { notes } = useNotes();

  return (
    <ul className="grid gap-4 dark:text-light lg:gap-5">
      {notes
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        .map((takeNote: NoteProps) => (
          <NoteItem key={takeNote.id} takeNote={takeNote} />
        ))}
    </ul>
  );
};

export default NoteList;
