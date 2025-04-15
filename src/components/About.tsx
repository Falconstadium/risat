import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("global");

  return (
    <main className="flex w-full items-center justify-center dark:bg-black-500 dark:text-white">
      <section className="container animate-fadeIn px-5 md:max-w-lg">
        <div className="grid gap-2">
          <h1 className="text-center text-lg font-bold lg:text-xl">
            {t("about.title")} <span className="italic">risat :</span>
          </h1>
          <p className="text-balance text-justify text-sm leading-5">
            {t("about.description")}
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
