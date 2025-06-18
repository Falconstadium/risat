import { useContext } from "react";
import NoteItem from "./NoteItem";
import { Note } from "../../context/Note";

export type noteProps = {
  id: string;
  key: string;
  name: string;
};

const NoteList = () => {
  const { note } = useContext(Note);

  return (
    <ul className="grid gap-4 dark:text-light lg:gap-5">
      {note
        .sort((a: any, b: any) => b.time - a.time)
        .map((takeNote: noteProps) => (
          <NoteItem key={takeNote.id} takeNote={takeNote} />
        ))}
    </ul>
  );
};

export default NoteList;
