import {FC} from "react";
import * as React from "react";


export const Layout1:FC<{}> = (props) => {
    return (<>
            <h1>Layout-1</h1>
        <main>{props.children}</main>
    </>)
};
