import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation("global");

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <footer className="grid place-content-center place-items-center gap-2 bg-indigo-700 py-2 lg:grid-cols-2 lg:gap-0 lg:py-4">
      <p className="text-sm font-medium capitalize text-light">
        {t("footer.right")} &copy; 2024
        <span className="pl-2 font-edu font-semibold">risat</span>
      </p>
      <div className="flex items-center gap-2">
        <button
          className="rounded-sm bg-light px-3 py-1 text-xs font-medium text-black-500 transition-colors duration-300 ease-in-out hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light lg:text-sm"
          onClick={() => handleChangeLang("en")}
        >
          EN
        </button>
        <button
          className="rounded-sm bg-light px-3 py-1 text-xs font-medium text-black-500 transition-colors duration-300 ease-in-out hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light lg:text-sm"
          onClick={() => handleChangeLang("fr")}
        >
          FR
        </button>
      </div>
    </footer>
  );
};

export default Footer;
