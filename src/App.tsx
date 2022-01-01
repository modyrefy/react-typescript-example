//npm install --save @types/react-bootstrap
//npm i @types/bootstrap
import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import {RoutesComponent} from "./component/routes/routesComponent";
import {useTranslation} from "react-i18next";
import {
    AllLocalizationResourcesReactInt,
    getDefaultlanguage,
    LangSwitcherReactInt
} from "./component/languageSwitcher/react-intl/langSwitcher";
import {createIntl, IntlProvider} from "react-intl";
import {createTheme, MuiThemeProvider, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import {darkTheme, defaultTheme} from "./style/theme/mui/default";
import {Theme, ThemeOptions} from "@material-ui/core/styles/createTheme";
import {LangSwitcherReactI18} from "./component/languageSwitcher/react-i18/langSwitcher";
import './App.css';
import {LocalStorageSet} from "./utility/localStorage/localStorageHelper";
function App() {
    // console.log("subObject.option1 " + AppConfiguration.Setting().subObject.option1);
    // const defaultUiLanguage = AppConfiguration.Setting().defaultUiLanguage;
    let [language, setLanguage] = useState(getDefaultlanguage);
    let [theme,setTheme]=useState("defaultTheme");
    const themeLocalStorageName='current-theme';
    const {t} = useTranslation();
    const languageDirection: string = language === "ar-AE" ? "rtl" : "ltr";
     const defaultThemeObject = createTheme(defaultTheme as ThemeOptions);
     const darkThemeObject = createTheme(darkTheme as ThemeOptions);

    return (
        <div dir={languageDirection}>
            {/*<ThemeProvider theme={defaultThemeObject}>*/}
                {/*<CssBaseline/>*/}
                {/*<LangSwitcherReactI18/>*/}
                {/*<LangSwitcherReactInt language={language} setLanguage={setLanguage}/>*/}
                {/*<IntlProvider locale={language} messages={AllLocalizationResourcesReactInt[language]}>*/}
                {/*</IntlProvider>*/}
                <BrowserRouter>
                    <RoutesComponent/>
                </BrowserRouter>

            {/*</ThemeProvider>*/}
        </div>
    );
}

export default App;
