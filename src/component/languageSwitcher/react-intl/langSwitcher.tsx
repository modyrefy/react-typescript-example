import React, {FC, useState} from "react";
import deMessages from '../../../resources/react-intl/de.json';
import enMessages from '../../../resources/react-intl/en.json';
import esMessages from '../../../resources/react-intl/es.json';
import frMessages from '../../../resources/react-intl/fr.json';
import jaMessages from '../../../resources/react-intl/ja.json';
import zhMessages from '../../../resources/react-intl/zh.json';
import arMessages from '../../../resources/react-intl/ar.json';
import {LocalStorageGet, LocalStorageSet} from "../../../utility/localStorage/localStorageHelper";
import { createIntl, createIntlCache } from "react-intl";
import {AppConfiguration} from "read-appsettings-json";
import {languageListData} from "../../../resources/data/languageList";
//#region variable
const   AllLocalizationResourcesReactInt:any = {
    "de-DE": deMessages,
    "en-US": enMessages,
    "es-ES": esMessages,
    "fr-FR": frMessages,
    "ja-JB": jaMessages,
    "zh-ZH": zhMessages,
    "ar-AE": arMessages
};
const languageLocalStorageName='react_inti_lang';
const defaultUiLanguage=AppConfiguration.Setting().defaultUiLanguage;
// const [language, setLanguage] = useState(defaultUiLanguage);
//#endregion

const getDefaultlanguage=():string=> {
    const localeValueFomStorage = LocalStorageGet(languageLocalStorageName);
    if (localeValueFomStorage === null || localeValueFomStorage === undefined || localeValueFomStorage === '') {
        LocalStorageSet(languageLocalStorageName,defaultUiLanguage);
        return defaultUiLanguage;
    }
    return localeValueFomStorage
}
const cache = createIntlCache();
let int = createIntl(
    {
        locale: defaultUiLanguage,
        messages: AllLocalizationResourcesReactInt[defaultUiLanguage]
    },
    cache
);
const translate = (id: string, values?: {}) => {
    return int.formatMessage({ id }, values);
};

const LangSwitcherReactInt: FC<{language:string,setLanguage:any }> = ({language=defaultUiLanguage,setLanguage})=>{
    const handleLanguageSelect = (e: any) => {
        //console.log("GetLanguagesTitle" +JSON.stringify( GetLanguagesTitle("en-US")));
        //alert(e.target.value)

        const newIntl = createIntl(
            {
                locale: e.target.value,
                messages: AllLocalizationResourcesReactInt[e.target.value]
            },
            cache
        );
        int = newIntl;
        setLanguage(e.target.value);
        LocalStorageSet(languageLocalStorageName, e.target.value);
    };


    let languageData = languageListData.filter(p => p.key === language)[0];
    languageData = languageData === null || languageData === undefined ? languageListData.filter(p => p.key === 'en-US')[0] : languageData;
    return (<>
        <table>
            <tbody>
            <tr>
                <td>React-Intl</td>
            </tr>
            <tr>
                <td>
                    <select onChange={handleLanguageSelect} defaultValue={language}>
                        <option value='en-US'>{languageData.englishLanguage}</option>
                        <option value='es-ES'>{languageData.spanishLanguage}</option>
                        <option value='fr-FR'>{languageData.frenchLanguage}</option>
                        <option value='de-DE'>{languageData.germanLanguage}</option>
                        <option value='ja-JB'>{languageData.japaneseLanguage}</option>
                        <option value='ar-AE'>{languageData.arabicLanguage}</option>
                    </select>
                </td>
            </tr>
            </tbody>
        </table>

    </>)

}
export { LangSwitcherReactInt,AllLocalizationResourcesReactInt,translate,getDefaultlanguage};
