import NoteItem from "./NoteItem";

const NoteList = ({ note, deleteNote, showEditForm }: any) => {
  return (
    <ul className="grid gap-3 pt-6 dark:text-light lg:gap-4">
      {note
        .sort((a: any, b: any) => b.time - a.time)
        .map((takeNote: any) => (
          <NoteItem
            key={takeNote.id}
            takeNote={takeNote}
            deleteNote={deleteNote}
            showEditForm={showEditForm}
          />
        ))}
    </ul>
  );
};

export default NoteList;
