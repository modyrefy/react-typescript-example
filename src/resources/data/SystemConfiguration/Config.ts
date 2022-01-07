import {AppConfiguration} from "read-appsettings-json";
export const Config={
    defaultUiLanguage:AppConfiguration.Setting().defaultUiLanguage,
    apiEndpoint:AppConfiguration.Setting().apiEndpoint,
    authenticatedTokenStorageKey:AppConfiguration.Setting().authenticatedTokenStorageKey,
    authenticatedUserStorageKey:AppConfiguration.Setting().authenticatedUserStorageKey,
    LocalStorageEncryptKey:AppConfiguration.Setting().LocalStorageEncryptKey,
};
