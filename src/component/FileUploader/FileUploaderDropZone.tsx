import React, {DragEvent, FC,useState} from "react";
import Dropzone, {IFileWithMeta, ILayoutProps, IPreviewProps, StatusValue} from 'react-dropzone-uploader'
import {DocumentModelCompact} from "../../models/interfaces/document/DocumentModel";
import {Link} from "react-router-dom";
import {DocumentStatusEnum} from "../../models/enums/enum";
//import "react-dropzone-uploader/dist/styles.css";
import {LoadingBox} from "../box/loadingBox";
import defaultAxiosApiInstance from "../../axios/defaultAxiosApiInstance";
import * as http from "http";
//https://www.youtube.com/watch?v=MAw0lQKqjRA
const getDocumentData = (): DocumentModelCompact[] => {
    return [
        // {
        //     documentId: null,
        //     documentTypeServiceId: 1,
        //     documentTypeNameAr: "type-1",
        //     documentTypeNameEn: "type-1",
        //     isRequired: true,
        //     maxFileSize: 1024,
        //     maxFileSizeFormatted: 1024,
        //     maxFileInputCount: 2,
        //     allowedFileExtensions: "*.jpg",
        //     allowedMimeTypes: "*.jpg",
        //     requestMeasureId: null,
        //     documentName: null,
        //     documentPath: null,
        //     documentUrl: null,
        //     status: DocumentStatusEnum.Add,
        // },
        // {
        //     documentId: null,
        //     documentTypeServiceId: 1,
        //     documentTypeNameAr: "type-2",
        //     documentTypeNameEn: "type-2",
        //     isRequired: true,
        //     maxFileSize: 1024,
        //     maxFileSizeFormatted: 1024,
        //     maxFileInputCount: 2,
        //     allowedFileExtensions: "*.jpg",
        //     allowedMimeTypes: "*.jpg",
        //     requestMeasureId: null,
        //     documentName: null,
        //     documentPath: null,
        //     documentUrl: null,
        //     status: DocumentStatusEnum.Add,
        // }
    ];
}
// add type defs to custom LayoutComponent prop to easily inspect props passed to injected components
const Layout = ({input, previews, submitButton, dropzoneProps, files, extra: {maxFiles}}: ILayoutProps) => {
    return (
        <div>
            {previews}
            <div {...dropzoneProps}>{files.length < maxFiles && input}</div>
            {/*{files.length > 0 && submitButton}*/}
        </div>
    )
}

const sleep = (milliseconds:number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const Preview = ({meta}: IPreviewProps) => {
    const {name, percent, status} = meta
    const formattedPercent: number = Math.round((percent + Number.EPSILON) * 100) / 100;
    if (status !== "done") {
        return (
            <div className="mb-2">
                <span>{name}</span>
                <div className="progress">
                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={formattedPercent}
                         aria-valuemin={0} aria-valuemax={100} style={{width: formattedPercent + "%"}}>
                        {formattedPercent}%
                    </div>
                </div>
            </div>
        )
    }
    return <></>
}

export const FileUploaderDropZone: FC<{}> = () => {
    const [documents,setDocuments]=useState<DocumentModelCompact[]>([]);
    const [loading, setLoading] = useState(false);


    // specify upload params and url for your files
    const getUploadParams = ({file,meta}: IFileWithMeta) => {
        // console.log("file --" +JSON.stringify(file))
        // let formData = new FormData();
        // formData.append("file", file);
        // const body = new FormData()
        // body.append('fileName', file)
        // body.append('filePath', "FilePath")
        //   return {url: 'https://localhost:5001/api/user/upload',body}
        const url = 'https://httpbin.org/post'
         return {url, meta: {fileUrl: `${url}/${encodeURIComponent(meta.name)}`}}
    }
    // called every time a file's `status` changes
    const handleChangeStatus =   (file: IFileWithMeta, status: StatusValue) => {
        console.log(status +" "+ JSON.stringify(file))
        if (status == "done") {
            console.log("file data" + JSON.stringify(file))
        }
        // if (status == "done") {
        //     setLoading(true);
        //    // alert('done');
        //     setTimeout(()=>{
        //         console.log("done" + file.meta.size)
        //         let documentList: DocumentModelCompact[] = {...documents} as DocumentModelCompact[];
        //         const documentFile: DocumentModelCompact = {
        //             documentTypeServiceId: 11,
        //             requestMeasureId: 12,
        //             documentName: file.meta.name,
        //             documentPath: file.meta.name,
        //             documentUrl: file.meta.name,
        //             documentSize: Number(file.meta.size),
        //             status: DocumentStatusEnum.Add,
        //         };
        //         documents.push(documentFile);
        //         const formData = new FormData();
        //          formData.append('file', file.file);
        //
        //
        //         //
        //         // fetch(
        //         //     'https://localhost:5001/api/user/upload',
        //         //     {
        //         //         method: 'POST',
        //         //         body: formData,
        //         //     }
        //         // )
        //         //     .then((response) => response.json())
        //         //     .then((result) => {
        //         //         console.log('Success:', result);
        //         //     })
        //         //     .catch((error) => {
        //         //         console.error('Error:', error);
        //         //     });
        //         setLoading(false);
        //
        //     },5000);
        //
        // }
    }
    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        console.log(event);
    };
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = async (files: IFileWithMeta[]) => {
        console.log(files.map(f => f.meta))
        const obj: any = {fileName: "fileName", filePath: "filePath", date: new Date()};
        const params = {...obj};
        const file :IFileWithMeta=files[0];
        defaultAxiosApiInstance.defaults.headers.post["Content-Type"]="multipart/form-data";
        const fileObj={file:file.file,fileName:"file-name"};
        console.log("files "+ JSON.stringify(files));
        console.log("fileObj " +JSON.stringify(fileObj));
        const apiRespopnse = await defaultAxiosApiInstance.post("user/upload", {...fileObj})
        console.log('apiRespopnse' + JSON.stringify(apiRespopnse))
        // if (apiRespopnse != null && apiRespopnse.response != null && apiRespopnse.response != undefined) {
        //     alert('suceess');
        // }
        // else{alert('failed')}
    }
    const  handleFileReject = (files: File[]) => {
        alert('handleFileReject');
    };
    const handleFileDrop = (files: File[]) => {
       alert('handleFileDrop')
    };
    return (
        <>
            {loading && <LoadingBox/>}
            <table>
                <tbody>
                <tr>
                    <td  style={{verticalAlign:"top"}}>
                        <div>document name</div>
                    </td>
                    <td style={{verticalAlign:"top"}}>
                        <Dropzone
                            getUploadParams={getUploadParams}
                            onChangeStatus={handleChangeStatus}
                            //multiple={false}
                            //onDrop ={handleDrop}
                            onSubmit={handleSubmit}
                            //inputContent='upload or drop files'
                            accept="image/*,audio/*,video/*,.pdf"
                            maxSizeBytes={1000000} //1 mb
                            minSizeBytes={0} //0.1 mb
                            inputContent={(files, extra) => (extra.reject ? 'Image, audio and video files only' : 'Drag Files')}
                            maxFiles={7}
                            disabled={files => files.some(f => ['preparing', 'getting_upload_params', 'uploading'].includes(f.meta.status))}
                            LayoutComponent={Layout}
                            PreviewComponent={Preview}

                            styles={{
                                dropzoneReject: {borderColor: 'red', backgroundColor: '#DAA'},
                                inputLabel: (files, extra) => (extra.reject ? {color: 'red'} : {}),
                                dropzone: {minHeight: 200, maxHeight: 250},
                                dropzoneActive: {borderColor: 'green'}
                            }}
                        />

                    </td>
                    <td  style={{verticalAlign:"top"}}>
                        {documents && documents.map((doc)=>{
                            return( <>
                                <Link to={String( doc.documentUrl)} target="_blank" download>
                                    <li key={doc.documentName}>{doc.documentName}</li>
                                </Link>
                                <button >(xxx)</button>
                            </>)
                        })}
                    </td>
                </tr>
                </tbody>
            </table>



        </>)
}
