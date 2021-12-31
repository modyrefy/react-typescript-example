import React, {FC, useState} from "react";
import {useTranslation} from 'react-i18next';
import {LocalStorageGet, LocalStorageSet} from "../../../utility/localStorage/localStorageHelper";
import "./i18n";
import {AppConfiguration} from "read-appsettings-json";
import {languageListData} from "../../../resources/data/languageList";

//const languageLocalStorageName1 = 'react_i18_lang';
const languageLocalStorageName='react_inti_lang';
const defaultUiLanguage=AppConfiguration.Setting().defaultUiLanguage;

const getDefaultlanguage = (): string => {
    const localeValueFomStorage = LocalStorageGet(languageLocalStorageName);
    if (localeValueFomStorage === null || localeValueFomStorage === undefined || localeValueFomStorage === '') {
        LocalStorageSet(languageLocalStorageName,defaultUiLanguage);
        return defaultUiLanguage;
    }
    return localeValueFomStorage
}
const LangSwitcherReactI18: FC<{}> = () => {
    const { i18n} = useTranslation();
    const [language, setLanguage] = useState(getDefaultlanguage);
    const handleLanguageSelect = (e: any) => {
        i18n.changeLanguage(e.target.value)
        setLanguage(e.target.value);
        LocalStorageSet(languageLocalStorageName, e.target.value);
    };
    let languageData = languageListData.filter(p => p.key === language)[0];
    languageData = languageData === null || languageData === undefined ? languageListData.filter(p => p.key === 'en-US')[0] : languageData;
    return (
        <>
            <table>
                <tbody>
                <tr>
                    <td>React-I18</td>
                </tr>
                <tr>
                    <td>
                        <select
                            value={i18n.language}
                            onChange={handleLanguageSelect}
                            defaultValue={language}
                        >
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
        </>
    );
}

export {LangSwitcherReactI18, getDefaultlanguage}
