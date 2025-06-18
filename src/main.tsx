import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import enTranslation from "../src/translations/en/local.json";
import frTranslation from "../src/translations/fr/local.json";
import { Toaster } from "sonner";
import { ThemeProvider } from "./context/theme.tsx";
import { TodoNoteProvider } from "./context/Todo.tsx";
import { NoteProvider } from "./context/Note.tsx";
import { LangProvider } from "./context/LangSwitcher.tsx";

const resources = {
  en: {
    global: enTranslation,
  },
  fr: {
    global: frTranslation,
  },
};

i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",

    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: [
        "cookie",
        "localStorage",
        "sessionStorage",
        "htmlTag",
        "querystring",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "../src/translations/{{lng}}/local.json",
    },
  });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <ThemeProvider>
        <LangProvider>
          <TodoNoteProvider>
            <NoteProvider>
              <App />
            </NoteProvider>
            <Toaster richColors />
          </TodoNoteProvider>
        </LangProvider>
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>,
);
