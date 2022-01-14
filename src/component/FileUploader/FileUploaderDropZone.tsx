import {FC} from "react";
import Dropzone, {IFileWithMeta, StatusValue} from 'react-dropzone-uploader'
import {DocumentModelCompact} from "../../models/interfaces/document/DocumentModel";
import {DocumentStatusEnum} from "../../models/enums/enum";
//https://github.com/fortana-co/react-dropzone-uploader/blob/master/examples/src/index.tsx
//https://react-dropzone-uploader.js.org/docs/typescript
const getDocumentData = (): DocumentModelCompact[] => {
    return [
        {
            documentId: null,
            documentTypeServiceId: 1,
            documentTypeNameAr: "type-1",
            documentTypeNameEn: "type-1",
            isRequired: true,
            maxFileSize: 1024,
            maxFileSizeFormatted: 1024,
            maxFileInputCount: 2,
            allowedFileExtensions: "*.jpg",
            allowedMimeTypes: "*.jpg",
            requestMeasureId: null,
            documentName: null,
            documentPath: null,
            documentUrl: null,
            status: DocumentStatusEnum.Add,
        },
        {
            documentId: null,
            documentTypeServiceId: 1,
            documentTypeNameAr: "type-2",
            documentTypeNameEn: "type-2",
            isRequired: true,
            maxFileSize: 1024,
            maxFileSizeFormatted: 1024,
            maxFileInputCount: 2,
            allowedFileExtensions: "*.jpg",
            allowedMimeTypes: "*.jpg",
            requestMeasureId: null,
            documentName: null,
            documentPath: null,
            documentUrl: null,
            status: DocumentStatusEnum.Add,
        }
    ];
}

export const FileUploaderDropZone: FC<{}> = () => {
    // specify upload params and url for your files
    const getUploadParams = () => {
        return {url: 'https://httpbin.org/post'}
    }

    // called every time a file's `status` changes
    // @ts-ignore
    const handleChangeStatus = (file: IFileWithMeta, status: StatusValue) => {
        if(status=="done") {
            console.log(file.meta.size)
        }
    }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files: IFileWithMeta[]) => {
        console.log(files.map(f => f.meta))
    }

    return (
        <>
            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                inputContent='upload or drop files'
                accept="image/*,audio/*,video/*"
            />
        </>)
}
