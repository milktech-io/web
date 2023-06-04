import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import es from "./lang/es.json";
import en from "./lang/en.json";

const languageDetector = new LanguageDetector();

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    // lng: "en",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    // react i18next special options (optional)
    react: {
      wait: false,
      bindI18n: "languageChanged loaded",
      bindStore: "added removed",
      nsMode: "default",
    },
    resources: {
      en: en,
      es: es,
    }
  });

export default i18n;
