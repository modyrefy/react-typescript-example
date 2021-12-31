import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend  from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// import Cache from 'i18next-localstorage-cache';
// import postProcessor from 'i18next-sprintf-postprocessor';

import {TRANSLATIONS_AR} from "../../../resources/react-i18/ar";
import {TRANSLATIONS_DE} from "../../../resources/react-i18/de";
import {TRANSLATIONS_EN} from "../../../resources/react-i18/en";
import {TRANSLATIONS_ES} from "../../../resources/react-i18/es";
import {TRANSLATIONS_FR} from "../../../resources/react-i18/fr";
import {TRANSLATIONS_JA} from "../../../resources/react-i18/ja";
import {TRANSLATIONS_ZH} from "../../../resources/react-i18/zh";

i18next
    .use(initReactI18next)
    .use(Backend )
    .use(LanguageDetector) // Registering the detection plugin
    // .use(Cache)
    // .use(postProcessor)
    .init({
        // Standard language used
        fallbackLng: 'en-US',
        debug: true,
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        },
        resources: {
            "en-US": {translation: TRANSLATIONS_EN},
            "de-DE": {translation: TRANSLATIONS_DE},
            "ar-AE": {translation: TRANSLATIONS_AR},
            "es-ES": {translation: TRANSLATIONS_ES},
            "fr-FR": {translation: TRANSLATIONS_FR},
            "ja-JB": {translation: TRANSLATIONS_JA},
            "zh-ZH": {translation: TRANSLATIONS_ZH},
        }
    });
export default i18next;
