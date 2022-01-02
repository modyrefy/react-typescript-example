import React, {ReactElement, FC, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {RoutesComponent} from "../../routes/routesComponent";
import {getDefaultlanguage, LangSwitcherReactI18} from "../../languageSwitcher/react-i18/langSwitcher";
import {AllLocalizationResourcesReactInt, LangSwitcherReactInt} from "../../languageSwitcher/react-intl/langSwitcher";
import {IntlProvider} from "react-intl";
import {PublicMenu} from "../../menu/publicMenu";
import {ThemeProvider} from "@material-ui/core/styles";
export const LayoutHeader: FC<any> = () => {
    const [language, setLanguage] = useState(getDefaultlanguage);
    return (
        <>
        <p>header</p>
            <PublicMenu/>
            <LangSwitcherReactI18/>
            {/*<LangSwitcherReactInt language={language} setLanguage={setLanguage}/>*/}
            {/*<IntlProvider locale={language} messages={AllLocalizationResourcesReactInt[language]}>*/}
            {/*</IntlProvider>*/}

        </>
    );
};


// export default Header;
//
//
// const App:React.FC = ()=> (
//     <> </>
// )
