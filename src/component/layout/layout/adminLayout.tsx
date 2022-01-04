import {FC} from "react";
import * as React from "react";


export const AdminLayout:FC<{}> = (props) => {
    return (<>
            <h1>AdminLayout-Layout</h1>
        <main>{props.children}</main>
    </>)
};
