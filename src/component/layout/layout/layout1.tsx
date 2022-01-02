import {FC} from "react";
import * as React from "react";


export const Layout1:FC<{elements?:React.ReactNode[]}> = ({elements}) => {
    return (<>
            <h1>Layout-1</h1>
        <main>{elements}</main>
    </>)
};
