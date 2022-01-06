import React from "react";

export interface IRouteBase {
    key: string,
    title: string,
    path: string,
    isAuthenticationRequired: boolean
    content: string | React.ReactNode,
    jsxContent?:JSX.Element,
    componentName?:string
}

export interface IDynamicRouteBase {
    key: string,
    title: string,
    path: string,
    isAuthenticationRequired: boolean
    jsxContent:React.ReactNode|null,
    componentName?:string
}
