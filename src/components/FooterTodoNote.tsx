import { useTranslation } from "react-i18next";

const FooterTodoNote = () => {
  const { i18n } = useTranslation("global");
  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-md px-4 py-2 shadow shadow-black-500 dark:shadow-light">
      <button
        className="&.active rounded-sm bg-light px-3 py-1 text-xs font-medium text-black-500 hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light lg:text-sm"
        onClick={() => handleChangeLang("en")}
      >
        EN
      </button>
      <button
        className="rounded-sm bg-light px-3 py-1 text-xs font-medium text-black-500 hover:bg-black-100 hover:text-light focus:bg-black-500 focus:text-light lg:text-sm"
        onClick={() => handleChangeLang("fr")}
      >
        FR
      </button>
    </div>
  );
};

export default FooterTodoNote;
