import {FC} from "react";
import _ from "lodash";
import {MeasureSection} from "./MeasureSection";
export interface Measure {
    id: number;
    name: string;
    sectionId:number,
    sectionNameAr:string,
    sectionNameEn:string
}


export  interface  Section
{
    sectionId:string,
    measureList:Measure[]
}
export const LodashComponent:FC<{}>=()=> {
    var measureList: Measure[] = [
        {id: 1, name: "name-1", sectionId: 1, sectionNameAr: "sectio-1", sectionNameEn: "section-1"},
        {id: 2, name: "name-2", sectionId: 1, sectionNameAr: "sectio-1", sectionNameEn: "section-1"},
        {id: 3, name: "name-3", sectionId: 2, sectionNameAr: "sectio-2", sectionNameEn: "section-2"},
        {id: 4, name: "name-4", sectionId: 1, sectionNameAr: "sectio-1", sectionNameEn: "section-1"},
        {id: 5, name: "name-5", sectionId: 1, sectionNameAr: "sectio-1", sectionNameEn: "section-1"},
        {id: 6, name: "name-6", sectionId: 2, sectionNameAr: "sectio-2", sectionNameEn: "section-2"},
        {id: 7, name: "name-7", sectionId: 1, sectionNameAr: "sectio-1", sectionNameEn: "section-1"},
        {id: 8, name: "name-8", sectionId: 3, sectionNameAr: "sectio-3", sectionNameEn: "section-3"},
        {id: 9, name: "name-9", sectionId: 3, sectionNameAr: "sectio-3", sectionNameEn: "section-3"},
        {id: 10, name: "name-10", sectionId: 3, sectionNameAr: "sectio-3", sectionNameEn: "section-3"},
    ];

    const items = [
        {key1: "el200", key2: "id001", value: "bulb tumeric hell of hot chicken"},
        {key1: "el200", key2: "id001", value: "iceland shaman fashion axe squid vice"},
        {key1: "el200", key2: "id001", value: "pin venmo letterpress cloud bread"},
        {key1: "el400", key2: "id002", value: "YOLO flexitarian, swag sriracha"},
        {key1: "el500", key2: "id002", value: "health goth chillwave"}
    ];

    //const grouped = _.groupBy(items, item => `"${item.key1}+${item.key2}"`);
    //console.log(grouped);

    //  const result=_.map(_.groupBy(measureList,"sectionId"), (measureList,sectionId)=>({measureList,sectionId}));
    //const result=_.groupBy(measureList,row=>row.sectionId);
    const result = _.chain(measureList).groupBy("sectionId").map((value, key) => ({
        sectionId: key,
        measureList: value
    })).value();


    const result1 = _.chain(measureList).groupBy("sectionId").map((value, key) => ({
        sectionId: key,
        measureList: value
    })).value();

    console.log(result);
    return (<>
        <p>Lodash Component</p>
        {
            result.map((row, index) =>(
                    // <p>section-Id {row.measureList[0].sectionId}</p>
                <MeasureSection key={row.sectionId}  item={row}/>
            ))}

    </>)
}
