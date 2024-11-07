import { useTranslation } from "react-i18next";
import english from "../assets/img/british.png";
import french from "../assets/img/france.png";

const Footer = () => {
  const { t, i18n } = useTranslation("global");

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <footer className="flex flex-col items-center justify-center gap-3 bg-indigo-700 py-2 lg:flex-row lg:justify-around">
      <p className="text-sm font-medium capitalize tracking-wide text-light md:text-base">
        {t("footer.right")}
        <span className="pl-4 font-semibold">risat</span> &copy; 2024
      </p>
      <div className="flex items-center gap-2">
        <button
          className="flex items-center gap-2 rounded-sm bg-light px-3 py-1 text-xs font-medium text-black-500 transition-colors duration-300 ease-in-out hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light lg:text-sm"
          onClick={() => handleChangeLang("en")}
        >
          EN
          <img src={english} alt="flag" className="w-8 object-cover" />
        </button>
        <button
          className="flex items-center gap-2 rounded-sm bg-light px-3 py-1 text-xs font-semibold text-black-500 transition-colors duration-300 ease-in-out hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light lg:text-sm"
          onClick={() => handleChangeLang("fr")}
        >
          FR
          <img src={french} alt="flag" className="w-8 object-cover" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
