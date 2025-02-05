import { useTranslation } from "react-i18next";
import english from "../assets/img/british.png";
import french from "../assets/img/france.png";
import { useState } from "react";

const FooterLang = () => {
  const { t, i18n } = useTranslation("global");

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setHover(false);
  };

  const langBtns = [
    { id: 1, lang: "English", value: "en", img: english },
    { id: 2, lang: "Français", value: "fr", img: french },
  ];

  const [hover, setHover] = useState(false);
  const hoverBtn = () => {
    setHover(!hover);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className={`flex animate-fadeIn items-center gap-1 rounded bg-light px-1 py-1 text-xs font-medium italic transition-all duration-300 ease-in-out hover:bg-slate-200 ${hover && "hidden"}`}
        title={t("footer.lang")}
        onClick={hoverBtn}
      >
        语A
        {hover ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 transition-all duration-300 ease-in"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 transition-all duration-300 ease-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </button>

      {hover && (
        <div className="flex animate-fadeIn items-center gap-2">
          {langBtns.map((btn) => (
            <button
              key={btn.id}
              className="flex items-center gap-1 text-nowrap rounded bg-neutral-200 px-2 py-1 text-xs font-medium text-black-500 transition-colors duration-300 ease-in-out hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light lg:gap-2 lg:px-3"
              onClick={() => changeLang(btn.value)}
            >
              {btn.lang}
              <img
                src={btn.img}
                alt={btn.img}
                className="hidden w-6 object-cover lg:block"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterLang;
