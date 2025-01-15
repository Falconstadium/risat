import { useTranslation } from "react-i18next";
import english from "../assets/img/british.png";
import french from "../assets/img/france.png";
import { useState } from "react";

const FooterLang = () => {
  const { t, i18n } = useTranslation("global");

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const [hide, setHide] = useState(true);
  const hideFooter = () => {
    setHide(false);
  };

  return (
    <>
      {hide && (
        <div className="absolute bottom-0 left-0 grid h-28 w-full place-content-center place-items-center gap-4 bg-gradient-to-br from-black-500 to-neutral-800 dark:from-neutral-800 dark:to-black-500 lg:h-36">
          <button
            type="button"
            className="absolute right-2 top-2 rounded-full bg-neutral-400 p-1 transition-colors duration-300 ease-in-out hover:bg-neutral-600 lg:right-4 lg:top-3"
            onClick={hideFooter}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <p className="text-sm font-medium text-light">{t("footer.lang")}</p>
          <div className="flex items-center gap-2">
            <button
              className="flex items-center gap-2 text-nowrap rounded bg-neutral-200 px-3 py-1 text-xs font-medium text-black-500 transition-colors duration-300 ease-in-out hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light"
              onClick={() => handleChangeLang("en")}
            >
              ({t("footer.default")}) EN
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
        </div>
      )}
    </>
  );
};

export default FooterLang;
