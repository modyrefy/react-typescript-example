import CryptoJS from "crypto-js";
import {AppConfiguration} from "read-appsettings-json";
const LocalStorageSet=(name :string,value:string)=>{
    localStorage.setItem(name,value);
};

const LocalStorageEncryptedSet=(name :string,
                                value:string,
                                encryptKey:string=AppConfiguration.Setting().LocalStorageEncryptKey)=>{
    const encryptedValue:string=CryptoJS.AES.encrypt(value,encryptKey).toString();
    localStorage.setItem(name,encryptedValue);
};

const LocalStorageEncryptedWithReturnValueSet=(name :string,
                                value:string,
                                encryptKey:string=AppConfiguration.Setting().LocalStorageEncryptKey):string=>{
    const encryptedValue:string=CryptoJS.AES.encrypt(value,encryptKey).toString();
    localStorage.setItem(name,encryptedValue);
    return  encryptedValue;
};

const LocalStorageGet=(name:string):string|null=>{
    return  localStorage.getItem(name);
};
const LocalStorageEncryptedGet=(name:string ,
                                encryptKey:string=AppConfiguration.Setting().LocalStorageEncryptKey):string|null=> {

    const value = localStorage.getItem(name);
//    console.log("name---" +name + "value---" +value)
    if (value !== null && value !== undefined) {
        return CryptoJS.AES.decrypt(value, encryptKey).toString(CryptoJS.enc.Utf8);
        // console.log("value111111111111111-----" );
        // console.log("value-----" +finalValue);
    }
    return null;
};
const LocalStorageClear=(name:string)=>{
    if(name===null|| name===undefined|| name==='')
    {localStorage.clear();}
    else
    {localStorage.removeItem(name);}
};

export {
    LocalStorageSet,
    LocalStorageEncryptedSet,
    LocalStorageGet,
    LocalStorageEncryptedGet,
    LocalStorageClear,
    LocalStorageEncryptedWithReturnValueSet
};
