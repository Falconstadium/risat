import { useTranslation } from "react-i18next";

const Footerabcnt = () => {
  const { i18n } = useTranslation("global");

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <footer className="flex select-none items-center justify-between bg-indigo-700 px-3 py-2 text-center text-sm font-medium tracking-wide text-white lg:justify-around">
        <p>
          2024 &copy; <span className="font-edu">risat</span>
        </p>

        <div className="flex items-center gap-2">
          <button
            className="&.active rounded-sm bg-light px-3 py-1 text-xs font-medium text-black-500 transition-colors duration-300 ease-in-out hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light lg:text-sm"
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
    </>
  );
};

export default Footerabcnt;
