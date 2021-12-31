import {FC} from "react";
import { useTranslation } from 'react-i18next';
export const ReactI18TranslatorSample1 :FC<{}> = () => {
    const {t} = useTranslation();
    return(<>
        <p>BACK_BUTTON: {t("AUTH.GENERAL.BACK_BUTTON")}</p>
        <p>MIN_LENGTH_FIELD: {t("AUTH.VALIDATION.MIN_LENGTH_FIELD")}</p>
        <p>TITLE: { t("AUTH.LOGIN.TITLE")}</p>
        <p>BY_STATUS: { t("ECOMMERCE.COMMON.BY_STATUS")}</p>
    </>)
};

