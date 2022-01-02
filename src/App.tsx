//npm install --save @types/react-bootstrap
//npm i @types/bootstrap


// "@material-ui/core": "^4.12.3",
//     "@material-ui/icons": "^4.11.2",
//     "@material-ui/lab": "^4.0.0-alpha.60",
//     "@material-ui/styles": "^4.11.4",
import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import {RoutesComponent} from "./component/routes/routesComponent";
import {useTranslation} from "react-i18next";
// import {darkTheme, defaultTheme} from "./style/theme/mui/default";
// import {createTheme, CssBaseline, ThemeOptions} from "@mui/material";
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
