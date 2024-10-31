import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export function DotBackgroundDemo() {
  const { t } = useTranslation("global");
  return (
    <div className="bg-dot-black/[0.2] dark:bg-dot-light/[0.2] relative grid h-[500px] w-full place-content-center bg-white dark:bg-black-500">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-500"></div>
      <section className="container relative z-50 mx-auto grid place-content-center gap-3 px-4 pt-12 dark:text-light lg:place-items-center lg:gap-5">
        <div className="grid place-content-center gap-2">
          <h1 className="text-center text-4xl font-bold leading-normal lg:text-5xl lg:leading-normal">
            {t("hero.title")}
          </h1>
          <p className="text-center text-sm font-medium">{t("hero.parag")}</p>
        </div>
        <button className="rounded-md bg-blue-700 px-6 py-2 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-blue-600">
          <Link to="/dashboard">{t("hero.btn")}</Link>
        </button>
      </section>
    </div>
  );
}
