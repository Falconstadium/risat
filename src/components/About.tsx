import risat from "../assets/img/3d-rendering-letter-r.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("global");

  return (
    <main className="container flex items-center justify-center bg-light dark:bg-black-500 dark:text-white">
      <section className="container flex animate-fadeIn flex-col items-center justify-center px-6 lg:w-2/4 lg:flex-row lg:gap-4">
        <img
          className="h-20 w-20 lg:h-36 lg:w-36"
          src={risat}
          alt="risat-logo"
        />
        <div className="grid gap-2">
          <h1 className="text-center text-lg font-bold lg:text-xl">
            {t("about.title")} <span>risat :</span>
          </h1>
          <p className="text-balance text-center text-sm leading-5 lg:text-justify lg:text-base">
            {t("about.description")}
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
