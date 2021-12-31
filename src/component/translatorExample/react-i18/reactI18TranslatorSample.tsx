import {FC} from "react";
import { useTranslation } from 'react-i18next';
export const ReactI18TranslatorSample :FC<{}> = () => {
    const {t} = useTranslation();
    return(<>
                <p>Translate: {t("AUTH.LOGIN.BUTTON")}</p>
                <p>Greeting: {t("AUTH.LOGIN.BUTTON")}</p>
                <p>Single: { t("AUTH.LOGIN.TITLE")}</p>
                <p>Plural: { t("AUTH.FORGOT.DESC")}</p>
    </>)
};

