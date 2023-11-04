import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsInAzerbaijani from '../public/locales/aze/translation.json'
import translationsInEng from '../public/locales/en/translation.json'

const resources = {
    aze: {
        translation: translationsInAzerbaijani
    },
    en: {
        translation: translationsInEng
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "aze",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        ns: "translation",
        defaultNS: "translation"
    });

export default i18n;
