import { Link } from "@tanstack/react-router";
import { NoteProps } from "../../context/Note";

const NoteItem = ({ takeNote }: { takeNote: NoteProps }) => {
  return (
    <Link
      className="mx-auto flex w-full max-w-lg animate-fadeIn items-center justify-between border-b pb-2"
      key={takeNote.id}
      to="/notes/$id"
      params={{ id: takeNote.id }}
    >
      <li className="grid gap-1">
        <h4 className="text-sm font-semibold first-letter:capitalize">
          {takeNote.title}
        </h4>
        <p className="text-xs font-medium text-gray-500 dark:text-gray-500">
          {takeNote.updatedAt
            ? new Date(takeNote.updatedAt).toLocaleDateString()
            : new Date(takeNote.createdAt).toLocaleDateString()}
          <span> </span>
          {takeNote.desc.length > 20
            ? `${takeNote.desc.slice(0, 20)}...`
            : takeNote.desc}
        </p>
      </li>
    </Link>
  );
};

export default NoteItem;
