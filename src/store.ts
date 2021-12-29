//https://redux-toolkit.js.org/api/configureStore#full-example
//https://blog.logrocket.com/using-typescript-with-redux-toolkit/
import {configureStore, Store} from "@reduxjs/toolkit";
import logger from 'redux-logger';
import { reduxBatch } from '@manaflair/redux-batch';
import UserAuthenticate from "./slice/userAuthincateSlice";
import {LocalStorageEncryptedGet, LocalStorageGet} from "./common/localStorage/localStorageHelper";
import {AppConfiguration} from "read-appsettings-json";
const reducer = {
    User: UserAuthenticate
}
const authenticatedTokenStorageKey :string=AppConfiguration.Setting().authenticatedTokenStorageKey;
const authenticatedUserStorageKey :string=AppConfiguration.Setting().authenticatedUserStorageKey;
const preloadedState = {
    User: {
        userAccount: localStorage.getItem(authenticatedUserStorageKey)? JSON.parse(<string>LocalStorageEncryptedGet(authenticatedUserStorageKey)): null,
        userToken:localStorage.getItem(authenticatedTokenStorageKey)? JSON.parse(<string>LocalStorageGet(authenticatedTokenStorageKey)): null,
        //userAccount: localStorage.getItem(USER_INFO_LOCAL_STORAGE_KEY)?LocalStorageGet(USER_INFO_LOCAL_STORAGE_KEY): null,
        isLoading: false,
        isAuthenticated: localStorage.getItem(authenticatedTokenStorageKey)?true:false,
        vv:"xxxxxxxx",
        errors: []
    },
};

//
// const store1: Store<ArticleState, ArticleAction> & {
//     dispatch: DispatchType
// } = createStore(reducer, applyMiddleware(thunk))

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    //middleware: [logger],
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
   enhancers: [reduxBatch],
})

export default store;
