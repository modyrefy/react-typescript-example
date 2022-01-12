import {ChangeEvent, FC, useEffect, useState} from "react";
import {UploadFileInfo} from "@progress/kendo-react-upload/dist/npm/interfaces/UploadFileInfo";
import _ from "lodash";
import {MeasureSection} from "../LodashSample/MeasureSection";
import {isArabicCurrentLanguage} from "../../utility/localiztion/localization";
export interface MeasurevalueModel {
    requestMeasureValueId: number;
    nameAr: string;
    nameEn: string;
    value: number ;
    orderId: number;
    isSelected: boolean;
}
export interface RequestMeasureModel {
    requestMeasureId: number;
    inspectionMeasureId: number;
    inspectionTypeId: number;
    measureTypeId: number;
    isMandatory: boolean;
    inspectionSectionId: number;
    nameAr: string;
    nameEn: string;
    sectionOrderId: number;
    sectionNameAr: string;
    sectionNameEn: string;
    value: string| null;
    comment: string| null;
    measureValues: MeasurevalueModel[];
}
export interface LodashMeasure{
    requestMeasureModel:RequestMeasureModel[],
    sectionId:string

}
export const MeasureValueComponent:FC<{}>=()=> {
    const [data, setData] = useState<RequestMeasureModel[]>([]);
    const [result, setResult] = useState<LodashMeasure[]>([]);
    const getData = (): RequestMeasureModel[] => {
        return [] = [
            {
                requestMeasureId: 7641,
                inspectionMeasureId: 1,
                inspectionTypeId: 1,
                measureTypeId: 1,
                isMandatory: true,
                inspectionSectionId: 1,
                nameAr: "Measure-1",
                nameEn: "Measure-1",
                sectionOrderId: 1,
                sectionNameAr: "Section-1",
                sectionNameEn: "Section-1",
                value: null,
                comment: null,
                measureValues: [
                    {
                        requestMeasureValueId: 17271,
                        nameAr: "yes-ar",
                        nameEn: "yest-en",
                        value: 2,
                        orderId: 1,
                        isSelected: true
                    },
                    {
                        requestMeasureValueId: 17281,
                        nameAr: "no",
                        nameEn: "no",
                        value: 1,
                        orderId: 2,
                        isSelected: false
                    },
                    {
                        requestMeasureValueId: 17291,
                        nameAr: "UN-KNOW",
                        nameEn: "UN-KNOW",
                        value: 0,
                        orderId: 4,
                        isSelected: false
                    },
                    {
                        requestMeasureValueId: 17301,
                        nameAr: "UNDER PROCESS",
                        nameEn: "UNDER PROCESS",
                        value: 1,
                        orderId: 3,
                        isSelected: false
                    }
                ]
            },
            {
                requestMeasureId: 7651,
                inspectionMeasureId: 2,
                inspectionTypeId: 1,
                measureTypeId: 1,
                isMandatory: true,
                inspectionSectionId: 1,
                nameAr: "Measure-2",
                nameEn: "Measure-2",
                sectionOrderId: 1,
                sectionNameAr: "Section-1",
                sectionNameEn: "Section-1",
                value: null,
                comment: null,
                measureValues: [
                    {
                        requestMeasureValueId: 17311,
                        nameAr: "YES",
                        nameEn: "YES",
                        value: 1,
                        orderId: 1,
                        isSelected: false
                    },
                    {
                        requestMeasureValueId: 17321,
                        nameAr: "NO",
                        nameEn: "NO",
                        value: 0,
                        orderId: 2,
                        isSelected: false
                    }
                ]
            },
            {
                requestMeasureId: 7661,
                inspectionMeasureId: 3,
                inspectionTypeId: 1,
                measureTypeId: 1,
                isMandatory: true,
                inspectionSectionId: 2,
                nameAr: "Measure-3",
                nameEn: "Measure-3",
                sectionOrderId: 2,
                sectionNameAr: "Section-2",
                sectionNameEn: "Section-2",
                value: null,
                comment: null,
                measureValues: [
                    {
                        requestMeasureValueId: 17331,
                        nameAr: "AGREE",
                        nameEn: "AGREE",
                        value: 1,
                        orderId: 1,
                        isSelected: false
                    },
                    {
                        requestMeasureValueId: 17341,
                        nameAr: "NOT AGREE",
                        nameEn: "NOT AGREE",
                        value: 0,
                        orderId: 2,
                        isSelected: false
                    }
                ]
            },
            {
                requestMeasureId: 7671,
                inspectionMeasureId: 4,
                inspectionTypeId: 1,
                measureTypeId: 1,
                isMandatory: true,
                inspectionSectionId: 2,
                nameAr: "Measure-4",
                nameEn: "Measure-4",
                sectionOrderId: 2,
                sectionNameAr: "Section-2",
                sectionNameEn: "Section-2",
                value: null,
                comment: null,
                measureValues: [
                    {
                        requestMeasureValueId: 17351,
                        nameAr: "YES",
                        nameEn: "YES",
                        value: 1,
                        orderId: 1,
                        isSelected: false
                    },
                    {
                        requestMeasureValueId: 17361,
                        nameAr: "NO",
                        nameEn: "NO",
                        value: 0,
                        orderId: 1,
                        isSelected: false
                    }
                ]
            },
            {
                requestMeasureId: 7681,
                inspectionMeasureId: 5,
                inspectionTypeId: 1,
                measureTypeId: 1,
                isMandatory: true,
                inspectionSectionId: 3,
                nameAr: "Measure-5",
                nameEn: "Measure-5",
                sectionOrderId: 3,
                sectionNameAr: "Section-3",
                sectionNameEn: "Section-3",
                value: null,
                comment: null,
                measureValues: [
                    {
                        requestMeasureValueId: 17371,
                        nameAr: "OK",
                        nameEn: "OK",
                        value: 1,
                        orderId: 1,
                        isSelected: false
                    },
                    {
                        requestMeasureValueId: 17381,
                        nameAr: "NOT-OK",
                        nameEn: "NOT-OK",
                        value: 0,
                        orderId: 1,
                        isSelected: false
                    }
                ]
            }
        ];


    };
    useEffect(() => {
        const measureList: RequestMeasureModel[] = getData();
        const list: LodashMeasure[] = _.chain(measureList).groupBy("inspectionSectionId").map((value, key) => ({
            sectionId: key,
            requestMeasureModel: value
        })).value();
        setData(getData);
        setResult(list);
    }, []);
    const isLanguageArabic:boolean=isArabicCurrentLanguage();
   const  onChangeValue=(event:ChangeEvent<HTMLInputElement>)=> {
       //console.log(event)
        console.log(event.target.value);
        const measureObjet: LodashMeasure[] ={...result};
       //console.log('measureObjet  '+ JSON.stringify(measureObjet));
       //   let row=measureObjet.filter(p=>p.requestMeasureModel.filter(x=>x.requestMeasureId==Number(event.target.value)));
        //let row=_.filter(measureObjet.re)
       //   console.log('row '+ JSON.stringify(row));
    }
     return (<>
        <p>Measure -Values -Lodash Component</p>
         {
             result.map((row, index) => {
                 // console.log("inspectionSectionId "+JSON.stringify( row))
                 // return   (<p>section-Id-- {row.sectionId} </p>)
               return   row.requestMeasureModel.map((record, recordIndex) => {
                     return (<>
                             <div className="panel panel-default">
                                 <div className="panel-heading">{isLanguageArabic? record.sectionNameAr:record.sectionNameEn}</div>
                                 <div className="panel-body">
                                     <table>
                                         <thead>
                                         <td>Mandatory</td>
                                         <td>Measure</td>
                                         <td>Value</td>
                                         </thead>
                                         <tbody>
                                         <tr>
                                             <td>    {record.isMandatory?<div>*</div>:<div></div>}</td>
                                             <td> {isLanguageArabic?record.nameAr:record.nameEn}</td>
                                             <td>
                                                 {record.measureValues.sort(p=>p.orderId).map((val)=>{
                                                     return(<>
                                                         <input
                                                         type="radio"
                                                         value={val.requestMeasureValueId}
                                                         name={record.requestMeasureId.toString()}
                                                         //checked={val.isSelected}
                                                         onChange={onChangeValue}
                                                     /> {isLanguageArabic?val.nameAr:val.nameEn}</>)

                                                 })}
                                             </td>
                                         </tr>
                                         </tbody>
                                     </table>


                                     {/*{record.measureTypeId==1?<>radio-button</>:<></>}*/}
                                     {/*{record.measureTypeId==2?<>checkbox-button</>:<></>}*/}
                                     {/*{record.measureTypeId==3?<>droplist-button</>:<></>}*/}
                                     {/*{record.measureTypeId==4?<>text-button</>:<></>}*/}

                                 </div>
                             </div>

                         </>

                         )
                 })
             })
         }
    </>)
}
