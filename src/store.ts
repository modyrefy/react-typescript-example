//https://redux-toolkit.js.org/api/configureStore#full-example
//https://blog.logrocket.com/using-typescript-with-redux-toolkit/
import {configureStore, Store} from "@reduxjs/toolkit";
import logger from 'redux-logger';
import { reduxBatch } from '@manaflair/redux-batch';
import UserAuthenticate from "./slice/userAuthincateSlice";
import { LocalStorageGet} from "./common/localStorage/localStorageHelper";
const reducer = {
    User: UserAuthenticate
}
const USER_INFO_LOCAL_STORAGE_KEY :string='token';
const preloadedState = {
    User: {
        userAccount: localStorage.getItem(USER_INFO_LOCAL_STORAGE_KEY)? JSON.parse(<string>LocalStorageGet(USER_INFO_LOCAL_STORAGE_KEY)): null,
        isLoading: false,
        isAuthenticated: localStorage.getItem(USER_INFO_LOCAL_STORAGE_KEY)?true:false,
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
