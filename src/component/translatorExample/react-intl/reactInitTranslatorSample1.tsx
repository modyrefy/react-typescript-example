import {FC} from "react";
import {translate} from "../../languageSwitcher/react-intl/langSwitcher";
import { FormattedMessage} from "react-intl";
export const ReactInitTranslatorSample1 :FC<{}> = () => {
    return(<>
        <p>************************</p>
            <p>BACK_BUTTON: { <FormattedMessage id="AUTH.GENERAL.BACK_BUTTON"/>}</p>
            <p>MIN_LENGTH_FIELD: { <FormattedMessage id="AUTH.VALIDATION.MIN_LENGTH_FIELD"/>}</p>
            <p>TITLE: { <FormattedMessage id="AUTH.LOGIN.TITLE"/>}</p>
            <p>BY_STATUS: { <FormattedMessage id="ECOMMERCE.COMMON.BY_STATUS"/>}</p>
            <p>Custom BACK_BUTTON: { translate("AUTH.GENERAL.BACK_BUTTON")}</p>
            <p>Custom MIN_LENGTH_FIELD: { translate("AUTH.VALIDATION.MIN_LENGTH_FIELD")}</p>
            <p>Custom TITLE: { translate("AUTH.LOGIN.TITLE")}</p>
            <p>Custom  BY_STATUS: { translate("ECOMMERCE.COMMON.BY_STATUS")}</p>
    </>)
};

