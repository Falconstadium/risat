import { Link } from "@tanstack/react-router";
import todoImg from "../assets/img/todo img.jpg";
import noteImg from "../assets/img/note img.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <section className="grid min-h-[100dvh] place-content-center gap-3 px-4 dark:bg-black-500 dark:text-light lg:place-items-center lg:gap-5">
        <div className="grid place-content-center gap-2">
          <h1 className="text-center text-3xl font-bold leading-normal lg:text-5xl lg:leading-normal">
            {t("hero.title")}
          </h1>
          <p className="text-center text-xs font-medium lg:text-sm">
            {t("hero.parag")}
          </p>
        </div>
        <button className="rounded-md bg-blue-700 px-6 py-2 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-blue-600">
          <Link to="/dashboard">{t("hero.btn")}</Link>
        </button>
      </section>

      <section className="grid gap-12 px-12 pb-20 dark:bg-black-500 dark:text-light lg:grid-cols-2 lg:gap-5">
        <div className="grid place-items-center gap-3">
          <img
            className="mx-auto h-[250px] w-[250px] object-cover lg:h-[350px] lg:w-[350px]"
            src={todoImg}
            alt="todo-img"
          />
          <p className="text-center text-sm">{t("hero.text_todo")}</p>
          <Link
            to="/todo"
            className="rounded bg-blue-700 px-6 py-1 text-xs text-white transition-colors duration-300 ease-in-out hover:bg-blue-500"
          >
            {t("hero.explore")}
          </Link>
        </div>

        <div className="grid place-items-center gap-3">
          <img
            className="mx-auto h-[250px] w-[250px] object-cover lg:h-[350px] lg:w-[350px]"
            src={noteImg}
            alt="note-img"
          />
          <p className="text-center text-sm">{t("hero.text_note")}</p>
          <Link
            to="/note"
            className="rounded bg-blue-700 px-6 py-1 text-xs text-white transition-colors duration-300 ease-in-out hover:bg-blue-500"
          >
            {t("hero.explore")}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
