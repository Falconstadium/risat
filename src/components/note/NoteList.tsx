import { useContext } from "react";
import NoteItem from "./NoteItem";
import { todoNote } from "../../context/TodoNote";

const NoteList = () => {
  const { text } = useContext(todoNote);

  return (
    <ul className="grid gap-4 pt-6 dark:text-light lg:gap-5">
      {text
        .sort((a: any, b: any) => b.time - a.time)
        .map((takeNote: any) => (
          <NoteItem key={takeNote.id} takeNote={takeNote} />
        ))}
    </ul>
  );
};

export default NoteList;
