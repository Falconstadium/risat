import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import NavTodoNote from "../components/NavTodoNote";
import FooterTodoNote from "../components/FooterTodoNote";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/pass-generate")({
  component: () => {
    // darkMode
    const darkMode = JSON.parse(localStorage.getItem("mode") || "[]");
    const [dark, setDark] = useState(darkMode);

    const toggleMode = () => {
      setDark(!dark);
    };

    useEffect(() => {
      localStorage.setItem("mode", JSON.stringify(dark));
    }, [dark]);

    const { t } = useTranslation("global");

    return (
      <article
        className={`${dark && "dark"} grid min-h-dvh w-full grid-rows-[auto_1fr_auto]`}
      >
        <NavTodoNote toggleMode={toggleMode} />
        <h1 className="grid place-content-center place-items-center text-3xl dark:bg-black-500 dark:text-light">
          {t("process.page")}
        </h1>
        <FooterTodoNote />
      </article>
    );
  },
});
