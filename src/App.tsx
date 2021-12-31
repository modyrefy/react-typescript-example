//npm install --save @types/react-bootstrap
//npm i @types/bootstrap
import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {RoutesComponent} from "./component/routes/routesComponent";
import {useTranslation} from "react-i18next";
import './App.css';
import {
    AllLocalizationResourcesReactInt,
    getDefaultlanguage,
    LangSwitcherReactInt
} from "./component/languageSwitcher/react-intl/langSwitcher";
import {IntlProvider} from "react-intl";
import {ReactInitTranslatorSample} from "./component/translatorExample/react-intl/reactInitTranslatorSample";
import {ReactInitTranslatorSample1} from "./component/translatorExample/react-intl/reactInitTranslatorSample1";
import {ThemeProvider} from "@material-ui/styles";
import CssBaseline from '@material-ui/core/CssBaseline'
import {Button} from '@material-ui/core';
import {darkTheme} from "./component/themeSwitcher/muiThemeSwitcher";

function App() {
    // console.log("subObject.option1 " + AppConfiguration.Setting().subObject.option1);
    // const defaultUiLanguage = AppConfiguration.Setting().defaultUiLanguage;
    let [language, setLanguage] = useState(getDefaultlanguage);
    const {t} = useTranslation();
    const languageDirection: string = language === "ar-AE" ? "rtl" : "ltr";

    return (
        <div className="App" dir={languageDirection}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <BrowserRouter>
                    <RoutesComponent/>
                    <br/>
                    {/*<LangSwitcherReactI18/>*/}
                    {/*<p>control-1</p>*/}
                    {/*<ReactI18TranslatorSample/>*/}
                    {/*<br/>*/}
                    {/*<p>control-2</p>*/}
                    {/*<ReactI18TranslatorSample1/>*/}
                    {/*<br/>*/}
                    {/*<p>control-3</p>*/}
                    {/*<p>Single: {t("AUTH.LOGIN.TITLE")}</p>*/}


                    <LangSwitcherReactInt language={language} setLanguage={setLanguage}/>
                    <IntlProvider locale={language} messages={AllLocalizationResourcesReactInt[language]}>
                        <Button>Primary</Button>
                        <Button color="secondary">Secondary</Button>
                        <p>control-1</p>
                        <ReactInitTranslatorSample/>
                        <br/>
                        <p>control-2</p>
                        <ReactInitTranslatorSample1/>
                        <br/>
                    </IntlProvider>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
