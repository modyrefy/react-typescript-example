import React, {  FC } from "react";
import deMessages from '../../resources/de.json';
import enMessages from '../../resources/en.json';
import esMessages from '../../resources/es.json';
import frMessages from '../../resources/fr.json';
import jaMessages from '../../resources/ja.json';
import zhMessages from '../../resources/zh.json';
import arMessages from '../../resources/ar.json';
import {Item} from "../../models/interfaces/item/Item";
import {LocalStorageGet, LocalStorageSet} from "../../common/localStorage/localStorageHelper";


const AllLocalizationResources = {
    de: deMessages,
    en: enMessages,
    es: esMessages,
    fr: frMessages,
    ja: jaMessages,
    zh: zhMessages,
    ar: arMessages
};

 const LangSwitcher:FC<{locale:string,setlocale:any}>=({locale='de',setlocale})=>{
    const localeValueFomStorage=LocalStorageGet('lang');
    const defaultLanguage='en';
    if(localeValueFomStorage===null||localeValueFomStorage===undefined||localeValueFomStorage==='') {
        LocalStorageSet('lang',locale);
    };

    const handleLanguageSelect = (e:any) => {
        //alert(e.target.value)
        setlocale(e.target.value);
        LocalStorageSet('lang',e.target.value);
    };
    return(<>
        <select onChange={handleLanguageSelect} defaultValue={locale}>
            <option value='en'>English</option>
            <option value='es'>French</option>
            <option value='fr'>French</option>
            <option value='de'>German</option>
            <option value='ja'>Japanese</option>
            <option value='ar'>العربية</option>
        </select>
    </>)

}
export {AllLocalizationResources ,LangSwitcher};
