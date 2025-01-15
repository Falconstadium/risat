import { useTranslation } from "react-i18next";
import FooterLang from "./FooterLang";

const Footer = () => {
  const { t } = useTranslation("global");

  return (
    <footer className="flex flex-col items-center justify-center gap-3 bg-[#30475e] py-4 lg:flex-row lg:justify-around lg:py-5">
      <p className="text-xs font-medium capitalize tracking-wide text-light lg:text-sm">
        {t("footer.right")}
        <span className="text-sm font-semibold lowercase lg:text-base">
          {" "}
          risat
        </span>{" "}
        &copy; 2024
      </p>
      <FooterLang />
    </footer>
  );
};

export default Footer;
