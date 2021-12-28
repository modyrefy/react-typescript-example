import {createSlice} from "@reduxjs/toolkit";
import {LocalStorageSet} from "../common/localStorage/localStorageHelper";
import {AuthenticateUserRequest} from "../models/interfaces/user/authenticateUserRequest";
import defaultAxiosApiInstance from "../axios/defaultAxiosApiInstance";
import {AuthenticateUserResponse} from "../models/interfaces/user/AuthenticateUserResponse";
import {IuserState} from "../models/interfaces/user/userState";

const initialState: IuserState = {
    userAccount: null,
    isLoading: false,
    isAuthenticated: false,
    errors: []
};

const slice = createSlice({
    name: "UserAuthenticate",
    initialState : initialState,
    reducers: {
        setLoading: (state, action) => {
            return {
                ...state,
                isLoading: action.payload,
            }
        },
        setAuthenticateSuccess: (state, action) => {
            const {response, token, remember} = action.payload;
            if (remember === true) {
                LocalStorageSet('thermostatToken', token);
            }
            return {
                ...state,
                userAccount: response,//action.payload,
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
export const authincateUser = (obj: AuthenticateUserRequest) => async (dispatch: any, getState: any) => {
    try {
        dispatch(setLoading(true));
        await sleep(2000);
        const params = {...obj};
        var apiRespopnse: AuthenticateUserResponse = await defaultAxiosApiInstance.post("user/authenticate", params);
        var apiRespopnse: AuthenticateUserResponse = {
            response: undefined,
            token: "abc",
            errors: [
                {message: "error-no-1"},
                {message: "error-no-2"},
                {message: "error-no-3"},
                {message: "error-no-4"},
                {message: "error-no-5"},
            ],

        };
        //console.log('authincate ' +JSON.stringify(apiRespopnse));
        if (apiRespopnse != null && apiRespopnse.response != null && apiRespopnse.response != undefined) {
            dispatch(setAuthenticateSuccess(
                {
                    response: apiRespopnse.response,
                    remember: obj.remember,
                    token: apiRespopnse.token
                }));
        } else {
            // alert( JSON.stringify(apiRespopnse));
            dispatch(setAuthenticateFailed(apiRespopnse.errors));
        }
    } catch (err: any) {
        dispatch(setAuthenticateFailed([
            {
                message: err.message,
            },
        ]));
    } finally {
        // dispatch(setLoading(false));
    }
};
export const resetAuthenticateUser = () => async (dispatch: any, getstate: any) => {
    dispatch(setAuthenticationReset(null));
};
