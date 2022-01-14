import {DocumentStatusEnum} from "../../enums/enum";

export interface DocumentModel {
    documentId: number | null;
    documentTypeServiceId: number;
    documentTypeNameAr: string;
    documentTypeNameEn: string;
    isRequired: boolean;
    maxFileSize: number;
    maxFileSizeFormatted: number;
    maxFileInputCount: number;
    allowedFileExtensions: string;
    allowedMimeTypes: string;
    detail: DocumentDetailModel[]|null;
}

export interface DocumentDetailModel {
    documentTypeServiceId: number | null;
    requestId: number | null;
    requestMeasureId: number | null;
    documentName: string;
    documentPath: string;
    documentUrl: string;
    status: DocumentStatusEnum | null;
}

export interface DocumentModelCompact {
    documentId: number | null;
    documentTypeServiceId: number;
    documentTypeNameAr: string;
    documentTypeNameEn: string;
    isRequired: boolean;
    maxFileSize: number;
    maxFileSizeFormatted: number;
    maxFileInputCount: number;
    allowedFileExtensions: string;
    allowedMimeTypes: string;
    requestMeasureId: number | null;
    documentName: string | null;
    documentPath: string | null;
    documentUrl: string | null;
    status: DocumentStatusEnum | null;
}
