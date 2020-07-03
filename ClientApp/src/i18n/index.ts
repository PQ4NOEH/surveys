import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import english from './en-translations';
import spanish from './es-translations'

i18n.use(LanguageDetector).init({
    resources: {
      en: english,
      es: spanish
    },
    fallbackLng: "es",
    debug: true,
  
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      formatSeparator: ","
    },
  
    react: {
      wait: true
    }
  });

  export default i18n;