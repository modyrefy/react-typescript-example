import {createSlice} from "@reduxjs/toolkit";
import {LocalStorageEncryptedSet, LocalStorageSet} from "../utility/localStorage/localStorageHelper";
import {AuthenticateUserRequest} from "../models/interfaces/user/authenticateUserRequest";
import defaultAxiosApiInstance from "../axios/defaultAxiosApiInstance";
import {AuthenticateUserResponse, UserResponse} from "../models/interfaces/user/AuthenticateUserResponse";
import {IuserState} from "../models/interfaces/user/userState";
import {AppConfiguration} from "read-appsettings-json";
import {LayoutEnum, UserRoleEnum} from "../models/enums/enum";

const initialState: IuserState = {
    userAccount: null,
    userToken: null,
    isLoading: false,
    isAuthenticated: false,
    errors: []
};

const slice = createSlice({
    name: "UserAuthenticate",
    initialState: initialState,
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
            generateUserDefaultLayoutStorage(response).then((r) => {
                console.log(r);
            });
            if (remember === true) {
               // console.log("response---- "+JSON.stringify(response))
                LocalStorageSet(AppConfiguration.Setting().authenticatedTokenStorageKey, JSON.stringify(token));
                LocalStorageEncryptedSet(AppConfiguration.Setting().authenticatedUserStorageKey, JSON.stringify(response));
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
const generateUserDefaultLayoutStorage = async (user: UserResponse): Promise<string | undefined> => {
    let defaultLayout: number = LayoutEnum.PublicLayout;
    if (user !== null && user != undefined) {
        switch (user.roleId) {
            case UserRoleEnum.Online:
                defaultLayout = LayoutEnum.OnlineLayout;
                break;
            case UserRoleEnum.Admin:
                defaultLayout = LayoutEnum.AdminLayout;
                break;
            case UserRoleEnum.SeniorAdmin:
                defaultLayout = LayoutEnum.Layout2;
                break;
            case UserRoleEnum.Guest:
            default:
                defaultLayout = LayoutEnum.PublicLayout;
                break;
        }
        //const result = LocalStorageEncryptedWithReturnValueSet(AppConfiguration.Setting().defaultLayoutStorageKey, defaultLayout.toString());
        const result = LocalStorageSet(AppConfiguration.Setting().defaultLayoutStorageKey, defaultLayout.toString());
        return result === null || result === undefined ? '' : result;

    }

};
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
                    response: {
                        ssoAccountId: 123,
                        userName: "mody",
                        email: "m@M.com",
                        mobile: "000000000",
                        participantNameAr: "ParticipantNameAr",
                        participantNameEn: "ParticipantNameEn",
                        roleId: 123,
                        isUserVerified: true
                    },
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ",
                    errors: undefined
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
