import {FC} from "react";
import * as React from "react";


export const TestLayout:FC<{elements?:React.ReactNode[]}> = ({elements}) => {
    return (<>
        <h1>Test-Layout</h1>
        <main>{elements}</main>
    </>)
};
