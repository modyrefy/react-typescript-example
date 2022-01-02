import {FC} from "react";
import {translate} from "../../languageSwitcher/react-intl/langSwitcher";
import { FormattedMessage} from "react-intl";
export const ReactInitTranslatorSample :FC<{}> = () => {
    return(<>
        <p>++++++++++++++++++++++++++</p>
            <p>Translate: { <FormattedMessage id="AUTH.LOGIN.TITLE"/>}</p>
            <p>Greeting: { <FormattedMessage id="AUTH.LOGIN.BUTTON"/>}</p>
            <p>Single: { <FormattedMessage id="AUTH.LOGIN.TITLE"/>}</p>
            <p>Plural: { <FormattedMessage id="AUTH.FORGOT.DESC"/>}</p>
            {/*<p>Custom Translate: { translate("AUTH.LOGIN.TITLE")}</p>*/}
            {/*<p>Custom Greeting: { translate("AUTH.LOGIN.BUTTON")}</p>*/}
            {/*<p>Custom Single: { translate("AUTH.LOGIN.TITLE")}</p>*/}
            {/*<p>Custom  Plural: { translate("AUTH.FORGOT.DESC")}</p>*/}
    </>)
};

