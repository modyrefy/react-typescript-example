import {FC} from "react";
import {Section} from "./LodashComponent";
import {Config} from "../../resources/data/SystemConfiguration/Config";

export const MeasureSection:FC<{item:Section}>=({item})=> {

    return(<>
        <p>{Config.apiEndpoint}</p>
        <p>----------------</p>
        <p>Section-ID {item.sectionId}</p>
        <p>Section-NamEn {item.measureList[0].sectionNameEn}</p>
        <p>Section-Name-Ar {item.measureList[0].sectionNameAr}</p>
        {item.measureList.map((row)=>(
            <>
            <p>++++++++++++</p>
            <p>Measure-ID {row.id}</p>
                <p>Measure-Name {row.name}</p>
            </>
        ))}
    </>)
}
