import { useTranslation } from "react-i18next";
import FooterLang from "./FooterLang";

const Footer = () => {
  const { t } = useTranslation("global");

  return (
    <footer className="bg-[#30475e] px-6 py-3">
      <div className="container mx-auto flex items-center justify-between gap-2">
        <p className="text-xs font-medium capitalize tracking-wide text-light">
          {t("footer.right")}
          {""} &copy; {new Date().getFullYear()}
        </p>
        <FooterLang />
      </div>
    </footer>
  );
};

export default Footer;
