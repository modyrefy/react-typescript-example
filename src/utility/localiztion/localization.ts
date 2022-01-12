import { ILanguageTypes} from "../../models/interfaces/languages/ILanguageBase";
import {languageData} from "../../resources/data/languages";
import {languageListData} from "../../resources/data/languageList";

export const getLanguageCode=(key:string):string=>{
    //alert(stockData.filter(p=>p.company=="Twitter Inc")[0].ticker)
    return  languageData.filter(p=>p.key.toLowerCase()===key.toLowerCase())[0].code;
};

export const getLanguageKey=(code:string):string=>{
    //alert(stockData.filter(p=>p.company=="Twitter Inc")[0].ticker)
    return  languageData.filter(p=>p.code.toLowerCase()===code.toLowerCase())[0].key;
};
export const GetLanguagesTitle=(key:string):any=>{
    return languageListData.filter(p => p.key == key.toLowerCase())[0];
}
export  const isArabicCurrentLanguage=():boolean=>{
    return  false;
};
