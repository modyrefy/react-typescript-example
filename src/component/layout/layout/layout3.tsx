import {FC} from "react";
import * as React from "react";


export const Layout3:FC<{elements?:React.ReactNode[]}> = ({elements}) => {
    return (<>
            <h1>Layout-3</h1>
        <main>{elements}</main>
    </>)
};
