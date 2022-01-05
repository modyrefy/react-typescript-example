import React from "react";

export interface IRouteBase {
    key: string,
    title: string,
    path: string,
    isAuthenticationRequired: boolean
    content: string | React.ReactNode;
}
