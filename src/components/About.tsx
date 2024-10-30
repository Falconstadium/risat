import risat from "../assets/img/3d-rendering-letter-r.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("global");

  return (
    <main className="grid w-full place-content-center place-items-center gap-12 px-4 text-center dark:bg-black-500 dark:text-white">
      <section className="container mx-auto grid place-items-center gap-4 lg:w-[700px]">
        <img
          className="h-20 w-20 lg:h-[120px] lg:w-[120px]"
          src={risat}
          alt="risat-logo"
        />
        <div className="lg:text-md grid gap-2 text-sm">
          <h1 className="font-bold">
            {t("about.title")} <span className="">risat :</span>
          </h1>
          <p className="font-IBM text-justify leading-5">
            {t("about.description")}
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
