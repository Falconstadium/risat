import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import EditNote from "../../components/note/EditNote";
import { useNotes } from "../../hooks/useNotes";

export const Route = createFileRoute("/notes/$id")({
  component: NoteContent,
  loader: async ({ params }) => {
    return {
      id: params.id,
    };
  },
});

function NoteContent() {
  const { id } = Route.useParams();

  const { getNoteById, showEditForm, deleteNote, isEditedNote } = useNotes();

  const note = getNoteById(id);
  const navigate = useNavigate();

  if (!note) {
    return <div>Note not found</div>;
  }

  const removeNote = () => {
    setTimeout(() => {
      deleteNote(note.id);
      navigate({ to: "/notes" });
    }, 1000);
  };

  return (
    <article className="min-h-dvh w-full dark:bg-zinc-950">
      {/* Navbar */}
      <header className="px-2 py-4 dark:text-neutral-100">
        <nav className="mx-auto flex max-w-3xl items-center justify-between">
          <Link to="/notes" className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <g clipPath="url(#a)">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.25-7.25a.75.75 0 0 0 0-1.5H8.66l2.1-1.95a.75.75 0 1 0-1.02-1.1l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 0 0 1.02-1.1l-2.1-1.95h4.59Z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path d="M0 0h20v20H0z" />
                </clipPath>
              </defs>
            </svg>

            <h3 className="font-Fancy font-semibold tracking-wide md:tracking-wider">
              {note.title}
            </h3>
          </Link>

          {/* Buttons */}
          <div className="flex items-center gap-2 px-4 text-neutral-100">
            <button
              type="button"
              className="flex items-center gap-2 rounded bg-lime-800 px-2 py-1 text-zinc-100 transition-colors duration-200 ease-in-out hover:bg-lime-700 active:bg-lime-700"
              title="Edit"
              aria-label={`edit ${note.title}`}
              onClick={() => showEditForm(note)}
            >
              <span className="hidden text-sm font-medium md:block">Edit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded bg-red-700 px-2 py-1 transition-colors duration-200 ease-in-out hover:bg-red-600"
              title="Delete"
              aria-label={`delete ${note.title}`}
              onClick={removeNote}
            >
              <span className="hidden text-sm font-medium md:block">
                Delete
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-xl gap-4 px-4 pt-8" key={id}>
        <div className="flex items-center justify-center">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-500">
            {note.updatedAt
              ? new Date(note.updatedAt).toLocaleTimeString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : new Date(note.createdAt).toLocaleTimeString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="animate-fadeIn break-words rounded text-lg font-semibold dark:text-neutral-100 xl:text-xl">
            {note.title}
          </h3>
          <p
            className="animate-fadeIn break-all text-sm dark:text-neutral-300 xl:text-base"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {note.desc}
          </p>
        </div>
      </section>

      {/* show edit */}
      {isEditedNote && <EditNote />}
    </article>
  );
}
