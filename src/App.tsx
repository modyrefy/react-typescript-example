//npm install --save @types/react-bootstrap
//npm i @types/bootstrap
//https:reactrouter.com/docs/en/v6/examples/auth

import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import {RoutesComponent} from "./component/routes/routesComponent";
import {useTranslation} from "react-i18next";
import './App.css';
import {LocalStorageGet} from "./utility/localStorage/localStorageHelper";
const getlanguageDirection=():string=>{
    let languageDirection: string="rtl";
    languageDirection=LocalStorageGet("react_inti_lang")=== "ar-AE" ? "rtl" : "ltr";
    return  languageDirection;
};
function App() {
    // console.log("subObject.option1 " + AppConfiguration.Setting().subObject.option1);
    // const defaultUiLanguage = AppConfiguration.Setting().defaultUiLanguage;
    let [theme,setTheme]=useState("defaultTheme");
    const themeLocalStorageName='current-theme';
    const {t} = useTranslation();
    //const languageDirection: string = language === "ar-AE" ? "rtl" : "ltr";
    //  const defaultThemeObject = createTheme(defaultTheme as ThemeOptions);
    //  const darkThemeObject = createTheme(darkTheme as ThemeOptions);

    return (
        <div dir={getlanguageDirection()}>
            {/*<ThemeProvider theme={defaultThemeObject}>*/}
            {/*    <CssBaseline/>*/}

                <BrowserRouter>
                    <RoutesComponent/>
                </BrowserRouter>
            {/*</ThemeProvider>*/}
        </div>
    );
}

export default App;
