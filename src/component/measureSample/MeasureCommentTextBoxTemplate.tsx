import {FC} from "react";
import {useTranslation} from "react-i18next";

export const MeasureCommentTextBoxTemplate:FC<{
    requestMeasureId:number,
    value:string|null,
    onTextChange:any|null}>=
    ({requestMeasureId,
    value,
    onTextChange})=>{
        const {t} = useTranslation();
    return(<>
    <p>{t("Measure.Comment")}</p>
    <textarea  name={requestMeasureId.toString()}  value={value !=null?value:undefined} onBlur={onTextChange}/>
    </>
    )
}

