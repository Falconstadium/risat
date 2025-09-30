import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";
import Theme from "../../components/Theme";
import { themeContext } from "../../context/theme";

export const Route = createFileRoute("/notes/$id")({
  component: NoteContent,
  loader: async ({ params }) => {
    return {
      id: params.id,
    };
  },
  pendingComponent: () => Theme,
});

function NoteContent() {
  const { id } = Route.useParams();
  const { name, desc }: { name: string; desc: string } = Route.useSearch();

  const { theme } = useContext(themeContext);

  return (
    <main className={`${theme && "dark"}`}>
      <article className="min-h-dvh w-full dark:bg-black-100 dark:text-light">
        <section className="mx-auto grid max-w-xl gap-2 px-4 pt-20" key={id}>
          <h4 className="animate-fadeIn break-words rounded bg-slate-100 px-1 py-1 text-lg font-semibold xl:text-xl">
            {name}
          </h4>
          <textarea className="animate-fadeIn break-words rounded bg-slate-50 px-1 py-1 text-sm">
            {desc}
          </textarea>
        </section>
      </article>
    </main>
  );
}
