import {ValidationError} from "../../validation/validationError";

export  interface BaseResponse<T>{
    response?:T,
    token:string,
    errors?:ValidationError[]
}
