import {FC} from "react";
import * as React from "react";


export const Layout2:FC<{elements?:React.ReactNode[]}> = ({elements}) => {
    return (<>
            <h1>Layout-2</h1>
        <main>{elements}</main>
    </>)
};
