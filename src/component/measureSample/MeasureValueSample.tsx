import {ChangeEvent, FC, MouseEventHandler, useEffect, useState} from "react";
import _ from "lodash";
import {isArabicCurrentLanguage} from "../../utility/localiztion/localization";
import {MeasureRadioButtonListTemplate} from "./MeasureRadioButtonListTemplate";
import {MeasureCommentTextBoxTemplate} from "./MeasureCommentTextBoxTemplate";
import {LoadingBox} from "../box/loadingBox";
import {useTranslation} from "react-i18next";
import {FileUploader} from "../FileUploader/FileUploader";
export interface MeasureValueModel {
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
    measureValues: MeasureValueModel[];
}
export interface MeasureSectionModel{
    inspectionSectionId:number,
    sectionNameAr:string,
    sectionNameEn:string,
    sectionOrderId:number
}
export const MeasureValueComponent:FC<{}>=()=> {
    const [data, setData] = useState<RequestMeasureModel[]>([]);
    const [sectionData, setSectionData] = useState<MeasureSectionModel[]>([]);
    const [loading, setLoading] = useState(false);
    //const [result, setResult] = useState<LodashMeasure[]>([]);

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
        //// @ts-ignore
        const sectionList: MeasureSectionModel[] = _.sortBy(_.uniqBy(_.map(measureList, _.partialRight(_.pick, ['inspectionSectionId', 'sectionNameAr', 'sectionNameEn', 'sectionOrderId'])), 'inspectionSectionId'), ['sectionOrderId']) as MeasureSectionModel[];//|Partial<unknown>[]
        setSectionData(sectionList);
        // const list: LodashMeasure[] = _.chain(measureList).groupBy("inspectionSectionId").map((value, key) => ({
        //     sectionId: key,
        //     requestMeasureModel: value
        // })).value();
        setData(getData);
        //  setResult(list);
        //console.log('mapped '+ JSON.stringify(sectionList))
    }, []);
    const isLanguageArabic: boolean = isArabicCurrentLanguage();
    const {t} = useTranslation();
    const getRecord = (requestMeasureData: RequestMeasureModel[], id: number): RequestMeasureModel | null => {
        const record: RequestMeasureModel = _.find(requestMeasureData, (obj) => {
            return obj.requestMeasureId === id
        }) as RequestMeasureModel;
        return record
    }
    const updateRecords = (requestMeasureData: RequestMeasureModel[], record: RequestMeasureModel): RequestMeasureModel[] => {
        _.remove(requestMeasureData, (obj) => {
            return obj.requestMeasureId === record.requestMeasureId
        });
        _.chain(requestMeasureData).push(record);
        return requestMeasureData;
    }
    //#region events
    const sleep = (milliseconds: number) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    const handleTextBoxChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name + ' --- ' + event.target.value);
        const requestMeasureData: RequestMeasureModel[] = {...data} as RequestMeasureModel[]
        const record = getRecord(requestMeasureData, Number(event.target.name))
        if (record != null) {
            record.comment = event.target.value;
            setData(updateRecords(requestMeasureData, record));
        }
    }
    const handleRadioButtonChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.name + ' --- ' + event.target.value);
        const requestMeasureData: RequestMeasureModel[] = {...data} as RequestMeasureModel[]
        const record = getRecord(requestMeasureData, Number(event.target.name))
        if (record != null) {
            record.measureValues.forEach(r => r.isSelected = r.requestMeasureValueId === Number(event.target.value) ? true : false);
            setData(updateRecords(requestMeasureData, record));
        }
    }
    const handleSaveButton = async (event: any) => {
        setLoading(true);
        event.preventDefault();
        await sleep(1000) //wait 1 seconds
        const requestMeasureData: RequestMeasureModel[] = {...data} as RequestMeasureModel[]
        console.log('button ' + JSON.stringify(requestMeasureData));
        setLoading(false);
    }
    //#endregion
    return (<>
        <p>Measure -Values -Lodash Component</p>
        {loading && <LoadingBox/>}
        {
            sectionData.map((row, index) => {
                const requestMeasureModel: RequestMeasureModel[] = _.chain(data).filter(p => p.inspectionSectionId === row.inspectionSectionId).value() as RequestMeasureModel[];
                return requestMeasureModel.map((record, recordIndex) => {
                    return (<>
                            <div className="panel panel-default">
                                <div
                                    className="panel-heading">{isLanguageArabic ? record.sectionNameAr : record.sectionNameEn}</div>
                                <div className="panel-body">
                                    <table>
                                        <thead>
                                        <td>Mandatory</td>
                                        <td>Measure</td>
                                        <td>Value</td>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>    {record.isMandatory ? <div>*</div> : <div></div>}</td>
                                            <td> {isLanguageArabic ? record.nameAr : record.nameEn}</td>
                                            <td>
                                                {record.measureTypeId == 1 &&
                                                <MeasureRadioButtonListTemplate
                                                    requestMeasureId={record.requestMeasureId}
                                                    isLanguageArabic={isLanguageArabic}
                                                    values={record.measureValues}
                                                    onStatusChange={handleRadioButtonChangeValue}
                                                />}
                                            </td>
                                            <td>
                                                {<MeasureCommentTextBoxTemplate
                                                    requestMeasureId={record.requestMeasureId}
                                                    value={record.comment}
                                                    onTextChange={handleTextBoxChangeValue}
                                                />}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </>
                    )
                })
            })
        }
        <table>
            <tbody>
            <tr>
                <td>
                    <button onClick={handleSaveButton} className="primary block"
                            name="saveButton">{t("Measure.SaveButton.Text")}</button>
                </td>
            </tr>
            </tbody>
        </table>
        <table>
            <tbody>
            <tr>
                <td>
                    <FileUploader/>
                </td>
            </tr>
            </tbody>
        </table>
    </>)
}
