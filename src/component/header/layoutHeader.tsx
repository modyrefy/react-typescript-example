import React, { ReactElement, FC } from "react";
import {BrowserRouter} from "react-router-dom";
import {RoutesComponent} from "../routes/routesComponent";
import {LangSwitcherReactI18} from "../languageSwitcher/react-i18/langSwitcher";
import {LangSwitcherReactInt} from "../languageSwitcher/react-intl/langSwitcher";
import {IntlProvider} from "react-intl";
import {PublicMenu} from "../menu/publicMenu";
export const LayoutHeader: FC<any> = () => {
    return (
        <>
        <p>header</p>
            <PublicMenu/>
            {/*<RoutesComponent/>*/}
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
