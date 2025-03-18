import { useTranslation } from "react-i18next";
import FooterLang from "./FooterLang";

const Footer = () => {
  const { t } = useTranslation("global");

  return (
    <footer className="flex items-center justify-between gap-2 bg-[#30475e] px-6 py-3 lg:justify-around lg:px-0">
      <p className="text-xs font-medium capitalize tracking-wide text-light lg:text-sm">
        {t("footer.right")}
        <span className="text-sm font-semibold lowercase lg:text-base">
          {" "}
          risat
        </span>{" "}
        &copy; {new Date().getFullYear()}
      </p>
      <FooterLang />
    </footer>
  );
};

export default Footer;
