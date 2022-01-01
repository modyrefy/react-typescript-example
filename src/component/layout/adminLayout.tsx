import {FC} from "react";
import * as React from "react";


export const AdminLayout:FC<{elements?:React.ReactNode[]}> = ({elements}) => {
    return (<>
            <h1>AdminLayout-Layout</h1>
        <main>{elements}</main>
    </>)
};
