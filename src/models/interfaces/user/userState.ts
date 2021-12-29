import {ValidationError} from "../../validation/validationError";
import {UserResponse} from "./AuthenticateUserResponse";

export interface IuserState {
    userAccount?: UserResponse |null
    userToken?:string|null,
    isLoading:boolean,
    isAuthenticated:boolean,
    errors?:ValidationError[]
}
