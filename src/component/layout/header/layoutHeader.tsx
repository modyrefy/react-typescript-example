import React, { FC} from "react";
import { LangSwitcherReactI18} from "../../languageSwitcher/react-i18/langSwitcher";
import {PublicMenu} from "../../menu/publicMenu";
export const LayoutHeader: FC<any> = () => {
    return (
        <>
        <p>header</p>
            {/*<PublicMenu/>*/}
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
