import { useTranslation } from "react-i18next";
import english from "../assets/img/british.png";
import french from "../assets/img/france.png";

const Footer = () => {
  const { t, i18n } = useTranslation("global");

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <footer className="flex flex-col items-center justify-center gap-3 bg-[#30475e] py-2 lg:flex-row lg:justify-around lg:py-3">
      <p className="text-xs font-semibold capitalize tracking-wide text-light lg:text-sm">
        {t("footer.right")}
        <span className="pl-4 font-semibold">risat</span> &copy; 2024
      </p>
      <div className="flex items-center gap-2">
        <button
          className="flex items-center gap-2 rounded bg-neutral-200 px-3 py-1 text-xs font-medium text-black-500 transition-colors duration-300 ease-in-out hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light"
          onClick={() => handleChangeLang("en")}
        >
          EN
          <img src={english} alt="flag" className="w-6 object-cover" />
        </button>
        <button
          className="flex items-center gap-2 rounded bg-neutral-200 px-3 py-1 text-xs font-semibold text-black-500 transition-colors duration-300 ease-in-out hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light"
          onClick={() => handleChangeLang("fr")}
        >
          FR
          <img src={french} alt="flag" className="w-6 object-cover" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
