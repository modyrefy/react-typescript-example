import {ChangeEvent, FC} from "react";
import {MeasureValueModel} from "./MeasureValueSample";

export const MeasureRadioButtonListTemplate:FC<{
    requestMeasureId:number,
    isLanguageArabic:boolean,
    values:MeasureValueModel[],
    onStatusChange:any}>=
    ({requestMeasureId,
         isLanguageArabic=false,
         values,
         onStatusChange})=> {
    return(<>
        {values.sort(p=>p.orderId).map((val)=>{
            return(<>
                <input
                    type="radio"
                    value={val.requestMeasureValueId}
                    name={requestMeasureId.toString()}
                    checked={val.isSelected}
                    onChange={onStatusChange}
                /> {isLanguageArabic?val.nameAr:val.nameEn}</>)

        })}
    </>)
}
