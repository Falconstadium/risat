import { Link } from "@tanstack/react-router";
import todoImg from "../assets/img/todo img.jpg";
import noteImg from "../assets/img/note img.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("global");

  return (
    <main className="grid w-full place-content-center dark:bg-black-500">
      <section className="container mx-auto grid place-content-center gap-3 px-4 pt-12 dark:text-light lg:place-items-center lg:gap-5">
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
    </main>
  );
};

export default Home;
