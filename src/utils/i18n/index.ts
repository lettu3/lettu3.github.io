import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import enLang from "./locales/en/en.json";
import esLang from "./locales/es/es.json";
import jpLang from "./locales/jp/jp.json";

const getInitialLanguage = () => {
  const stored = localStorage.getItem("i18nextLng");
  if (stored) return stored;
  
  const prefers = window.navigator.language.slice(0, 2);
  return prefers === "es" || prefers === "en" ? prefers : "en";
}

const resources = {
  en: {
    translation: enLang,
  },
  jp: {
    translation: jpLang,
  },
  es: {
    translation: esLang,
  }
}
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    lng: getInitialLanguage(),
    fallbackLng: "en"
  });

