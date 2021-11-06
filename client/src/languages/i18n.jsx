import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './english/translationEN'
import translationVN from './vietnames/translationVN'
// the translations
const resources = {
  en: {
    translation:translationEN
  },
  vn:{
    translation:translationVN
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vn", 

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;