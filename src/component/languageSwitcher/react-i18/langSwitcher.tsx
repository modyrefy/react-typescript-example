import React, {FC, useState} from "react";
import {useTranslation} from 'react-i18next';
import {LocalStorageGet, LocalStorageSet} from "../../../utility/localStorage/localStorageHelper";
import "./i18n";
import {AppConfiguration} from "read-appsettings-json";

const languageLocalStorageName1 = 'react_i18_lang';
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
    return (
        <div className="select">
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
                            <option value='en-US'>English</option>
                            <option value='es-ES'>Spanish</option>
                            <option value='fr-FR'>French</option>
                            <option value='de-DE'>German</option>
                            <option value='ja-JB'>Japanese</option>
                            <option value='ar-AE'>العربية</option>
                        </select>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}

export {LangSwitcherReactI18, getDefaultlanguage}
