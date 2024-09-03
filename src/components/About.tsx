import risat from "../assets/img/risat (2).svg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("global");

  return (
    <main className="grid w-full place-content-center place-items-center gap-12 px-4 text-center dark:bg-black-500 dark:text-white">
      <section className="mx-auto grid place-items-center gap-4 lg:w-[700px]">
        <img
          className="h-20 w-20 lg:h-[120px] lg:w-[120px]"
          src={risat}
          alt="risat-logo"
        />
        <div className="grid gap-2">
          <h1 className="text-lg font-bold underline">
            {t("about.title")} <span className="font-edu">risat</span>
          </h1>
          <p className="font-IBM text-justify">{t("about.description")}</p>
        </div>
      </section>
    </main>
  );
};

export default About;
