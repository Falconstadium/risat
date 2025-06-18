import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";
import { themeContext } from "../../context/theme";
import AnimationLoading from "../../components/AnimationLoading";

export const Route = createFileRoute("/notes/$id")({
  component: NoteContent,
  loader: async ({ params }) => {
    return {
      id: params.id,
    };
  },
  pendingComponent: () => {
    const { theme } = useContext(themeContext);
    return (
      <div className={`${theme && "dark"} w-full dark:bg-black-100`}>
        <AnimationLoading theme={theme} />
      </div>
    );
  },
});

function NoteContent() {
  const { id } = Route.useParams();
  const { name }: any = Route.useSearch();

  const { theme } = useContext(themeContext);

  return (
    <main className={`${theme && "dark"}`}>
      <article className="min-h-dvh w-full dark:bg-black-100 dark:text-light">
        <section className="container mx-auto max-w-2xl px-4 pt-20">
          <p
            key={id}
            className="animate-fadeIn break-words rounded-lg border-2 border-slate-950 px-4 py-1 text-sm dark:border-slate-400"
          >
            {name}
          </p>
        </section>
      </article>
    </main>
  );
}
