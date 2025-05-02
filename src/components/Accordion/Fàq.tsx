import { useTranslation } from "react-i18next";
import { Accordion, AccordionItem } from "./Accordion";

export type elements = {
  title: string;
  content: string;
};

export const Fàq = () => {
  const { t } = useTranslation("global");

  return (
    <>
      <Accordion className="max-w-lg" value={null}>
        <AccordionItem value="1" trigger={t("accordion.first")}>
          {t("accordion.answer1")}
        </AccordionItem>
        <AccordionItem value="2" trigger={t("accordion.second")}>
          {t("accordion.answer2")}
        </AccordionItem>
        <AccordionItem value="3" trigger={t("accordion.third")}>
          {t("accordion.answer3")}
        </AccordionItem>
        <AccordionItem value="4" trigger={t("accordion.fourth")}>
          {t("accordion.answer4")}
        </AccordionItem>
      </Accordion>
    </>
  );
};
