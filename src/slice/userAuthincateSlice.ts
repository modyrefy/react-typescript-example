import {createSlice} from "@reduxjs/toolkit";
import {LocalStorageSet} from "../common/localStorage/localStorageHelper";
import {AuthenticateUserRequest} from "../models/interfaces/user/authenticateUserRequest";
import defaultAxiosApiInstance from "../axios/defaultAxiosApiInstance";
import {AuthenticateUserResponse} from "../models/interfaces/user/AuthenticateUserResponse";
import {IuserState} from "../models/interfaces/user/userState";
import {AppConfiguration} from "read-appsettings-json";

const initialState: IuserState = {
    userAccount: null,
    userToken:null,
    isLoading: false,
    isAuthenticated: false,
    errors: []
};

const slice = createSlice({
    name: "UserAuthenticate",
    initialState : initialState,
    reducers: {
        setLoading: (state, action) => {
           // alert('state ' +JSON.stringify(state));
            return {
                ...state,
                isLoading: action.payload,
            }
        },
        setAuthenticateSuccess: (state, action) => {
            const {response, token, remember} = action.payload;
            if (remember === true) {
                LocalStorageSet(AppConfiguration.Setting().authenticationTokenStorageKey,JSON.stringify( token));
            }
            return {
                ...state,
                userAccount: response,//action.payload,
                userToken: token,
                isLoading: false,
                isAuthenticated: true,
                errors: [],
            };
        },
        setAuthenticateFailed: (state, action) => {
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                errors: action.payload,
            };
        },
        setAuthenticationReset: (state, action) => {
            return {
                ...state,
                userAccount: null,
                isLoading: false,
                isAuthenticated: false,
                errors: [],
            };
        },
    }
});

export default slice.reducer;
const {setLoading, setAuthenticateSuccess, setAuthenticateFailed, setAuthenticationReset} = slice.actions;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
export const authincateUser = (obj: AuthenticateUserRequest) => {
    return async (dispatch: any, getState: any) => {
        try {
            dispatch(setLoading(true));
            await sleep(2000);
            const params = {...obj};
           // alert('alert ' + JSON.stringify(params))
            let apiRespopnse: AuthenticateUserResponse;
            if (!AppConfiguration.Setting().isAuthenticationMockEnabled) {
                apiRespopnse = await defaultAxiosApiInstance.post("user/authenticate", params);
            } else {
                apiRespopnse = {
                    response:{
                        SsoAccountId:123,
                        UserName:"mody",
                        Email:"m@M.com",
                        Mobile:"000000000",
                        ParticipantNameAr:"ParticipantNameAr",
                        ParticipantNameEn:"ParticipantNameEn",
                        RoleId:123,
                        IsUserVerified:true
                    }  ,
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ",
                    errors:undefined
                    //     [
                    //     {message: "error-no-1"},
                    //     {message: "error-no-2"},
                    //     {message: "error-no-3"},
                    //     {message: "error-no-4"},
                    //     {message: "error-no-5"},
                    // ],

                };
            }
            console.log('authincate ' + JSON.stringify(apiRespopnse));
            if (apiRespopnse != null && apiRespopnse.response != null && apiRespopnse.response != undefined) {
                //alert("apiRespopnse" + JSON.stringify(apiRespopnse));
                dispatch(setAuthenticateSuccess(
                    {
                        response: apiRespopnse.response,
                        remember: obj.remember,
                        token: apiRespopnse.token
                    }));
            } else {
                //alert('setAuthenticateFailed 11'+ JSON.stringify(apiRespopnse.errors));
                dispatch(setAuthenticateFailed(apiRespopnse.errors));
            }
        } catch (err: any) {
            // alert('setAuthenticateFailed '+ err);
            dispatch(setAuthenticateFailed([
                {
                    message: err.message,
                },
            ]));
        } finally {
            // dispatch(setLoading(false));
        }
    };
};
export const resetAuthenticateUser = () => async (dispatch: any, getstate: any) => {
    dispatch(setAuthenticationReset(null));
};
