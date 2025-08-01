import { createFileRoute } from "@tanstack/react-router";
import { useContext } from "react";
import { AnimationLoading } from "../../components/AnimationLoading";
import { themeContext } from "../../context/theme";

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
  const { name, desc }: any = Route.useSearch();

  const { theme } = useContext(themeContext);

  return (
    <main className={`${theme && "dark"}`}>
      <article className="min-h-dvh w-full dark:bg-black-100 dark:text-light">
        <section className="mx-auto grid max-w-2xl gap-4 px-4 pt-20" key={id}>
          <h4 className="animate-fadeIn break-words rounded border-2 border-slate-950 px-2 py-4 text-lg font-semibold dark:border-slate-600">
            {name}
          </h4>
          <p className="animate-fadeIn break-words rounded border-2 border-slate-950 px-2 py-1 text-sm dark:border-slate-600">
            {desc}
          </p>
        </section>
      </article>
    </main>
  );
}
