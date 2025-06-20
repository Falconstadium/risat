import { useContext } from "react";
import NoteItem from "./NoteItem";
import { Note } from "../../context/Note";

const NoteList = () => {
  const { note } = useContext(Note);

  return (
    <ul className="grid gap-4 dark:text-light lg:gap-5">
      {note
        .sort((a: { time: number }, b: { time: number }) => b.time - a.time)
        .map((takeNote) => (
          <NoteItem key={takeNote.id} takeNote={takeNote} />
        ))}
    </ul>
  );
};

export default NoteList;
