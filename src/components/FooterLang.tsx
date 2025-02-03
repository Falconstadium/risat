import { useState } from "react";
import { useTranslation } from "react-i18next";

import english from "../assets/img/british.png";
import french from "../assets/img/france.png";

const FooterLang = () => {
  const { t, i18n } = useTranslation("global");

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const [hide, setHide] = useState(true);
  const hideFooter = () => {
    setHide(false);
  };

  const langBtns = [
    { id: 1, lang: "English", value: "en", img: english },
    { id: 2, lang: "Français", value: "fr", img: french },
  ];

  return (
    <>
      {hide && (
        <div className="absolute bottom-0 left-0 grid h-28 w-full place-content-center place-items-center gap-4 backdrop-blur lg:h-44">
          <button
            type="button"
            className="absolute right-4 top-2 rounded-full bg-neutral-400 p-1 transition-colors duration-300 ease-in-out hover:bg-neutral-600 lg:right-4 lg:top-3"
            onClick={hideFooter}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-4 lg:size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <p className="text-sm font-medium dark:text-light lg:text-base">
            {t("footer.lang")}
          </p>
          <div className="flex items-center gap-2">
            {langBtns.map((btn) => (
              <button
                key={btn.id}
                className="flex items-center gap-2 text-nowrap rounded bg-neutral-200 px-3 py-1 text-xs font-medium text-black-500 transition-colors duration-300 ease-in-out hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light"
                onClick={() => changeLang(btn.value)}
              >
                {btn.lang}
                <img src={btn.img} alt={btn.img} className="w-6 object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FooterLang;
