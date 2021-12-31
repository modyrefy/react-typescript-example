//npm install --save @types/react-bootstrap
//npm i @types/bootstrap
import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {RoutesComponent} from "./component/routes/routesComponent";
import {LangSwitcherReactI18} from "./component/languageSwitcher/react-i18/langSwitcher";
import {ReactI18TranslatorSample} from "./component/translatorExample/react-i18/reactI18TranslatorSample";
import {ReactI18TranslatorSample1} from "./component/translatorExample/react-i18/ReactI18TranslatorSample1";
import {useTranslation} from "react-i18next";
import './App.css';
import {
    AllLocalizationResourcesReactInt,
    getDefaultlanguage,
    LangSwitcherReactInt
} from "./component/languageSwitcher/react-intl/langSwitcher";
import {IntlProvider,useIntl, FormattedDate, FormattedMessage} from "react-intl";
import {ReactInitTranslatorSample} from "./component/translatorExample/react-intl/reactInitTranslatorSample";
import {ReactInitTranslatorSample1} from "./component/translatorExample/react-intl/reactInitTranslatorSample1";
function App() {
    // console.log("subObject.option1 " + AppConfiguration.Setting().subObject.option1);
    // const defaultUiLanguage = AppConfiguration.Setting().defaultUiLanguage;
     const [language, setLanguage] = useState(getDefaultlanguage);
    const {t} = useTranslation();
    return (
        <BrowserRouter>
            <div className="App">
                <RoutesComponent/>
                <br/>
                //#region react-i18 localization
                {/*<LangSwitcherReactI18/>*/}
                {/*<p>control-1</p>*/}
                {/*<ReactI18TranslatorSample/>*/}
                {/*<br/>*/}
                {/*<p>control-2</p>*/}
                {/*<ReactI18TranslatorSample1/>*/}
                {/*<br/>*/}
                {/*<p>control-3</p>*/}
                {/*<p>Single: {t("AUTH.LOGIN.TITLE")}</p>*/}
                //#endregion

                //#region react-intl localization
                <LangSwitcherReactInt language={language} setLanguage={setLanguage}/>
                <IntlProvider locale={language} messages={AllLocalizationResourcesReactInt[language]}>
                    <p>control-1</p>
                    <ReactInitTranslatorSample/>
                    <br/>
                    <p>control-2</p>
                    <ReactInitTranslatorSample1/>
                    <br/>
                </IntlProvider>
                //#endregion

            </div>
        </BrowserRouter>
    );
}

export default App;
