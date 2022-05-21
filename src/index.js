import { createRoot } from "react-dom/client";
import React from "react";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import "flag-icon-css";

import App from "./App";
import "./index.css";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar", "fr"],
    fallbackLng: "en",
    debug: false,
    ns: ["Home", "About", "Contact", "Footer", "Projects", "Skills"],
    // Options for language detector
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: "/assets/locales/{{ns}}/{{lng}}.json",
    },
  });

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
