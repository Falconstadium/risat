import { useTranslation } from "react-i18next";
import english from "../assets/img/british.png";
import french from "../assets/img/france.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
        className={`flex animate-fadeIn items-center gap-1 rounded bg-light px-1 py-1 text-xs font-medium italic transition-all duration-300 ease-in-out hover:bg-slate-200`}
        title={t("footer.lang")}
        onClick={hoverBtn}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-languages"
        >
          <path d="m5 8 6 6" />
          <path d="m4 14 6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="m22 22-5-10-5 10" />
          <path d="M14 18h6" />
        </svg>
        {hover ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-3 transition-all duration-300 ease-in"
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
            strokeWidth={2}
            stroke="currentColor"
            className="size-3 transition-all duration-300 ease-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </button>

      <AnimatePresence>
        {hover && (
          <motion.div
            className="absolute bottom-8 right-0 grid origin-bottom-right place-content-center gap-2 rounded-sm bg-white/95 px-4 py-2 text-black"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            {langBtns.map((btn) => (
              <button
                key={btn.id}
                className="flex w-24 items-center gap-1 text-nowrap rounded bg-neutral-200 px-3 py-1 text-xs font-medium text-black-500 transition-colors duration-300 ease-in-out hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light lg:gap-2"
                onClick={() => changeLang(btn.value)}
              >
                {btn.lang}
                <img src={btn.img} alt={btn.img} className="w-6 object-cover" />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FooterLang;
