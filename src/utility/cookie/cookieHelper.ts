import * as Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import {AppConfiguration} from "read-appsettings-json";

const CookieSet=(name:string,
                 value:string,
                 expiryMinutes:number=AppConfiguration.Setting().CookieExpiryMinutes)=> {
    Cookies.set(name, value,
        {expires: new Date(new Date().getTime() + expiryMinutes * 60  * 1000)});
};
const CookieEncryptedSet=(name:string,
                          value:string,
                          expiryMinutes:number=AppConfiguration.Setting().CookieExpiryMinutes,
                          encryptKey:string=AppConfiguration.Setting().CookieEncryptKey)=> {
    Cookies.set(name,
        CryptoJS.AES.encrypt(value, encryptKey).toString(),
        {expires: new Date(new Date().getTime() + expiryMinutes * 60 * 1000)});
};

const CookieGet=(name:string):string|undefined=>{
    return  Cookies.get(name);
};
const CookieEncryptedGet=(name:string,
                          encryptKey:string=AppConfiguration.Setting().CookieEncryptKey
):string|undefined=> {
    const cookieValue:string|undefined=  Cookies.get(name)
    return  cookieValue!=undefined && cookieValue!=null?CryptoJS.AES.decrypt(cookieValue.toString(), encryptKey).toString(CryptoJS.enc.Utf8):undefined;
};

export {CookieSet,CookieEncryptedSet,CookieGet,CookieEncryptedGet};
