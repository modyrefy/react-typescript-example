import {FC} from "react";
import * as React from "react";
import {LayoutHeader} from "../header/layoutHeader";
import {LayoutFooter} from "../footer/layoutFooter";



export const PublicLayout:FC<{elements?:React.ReactNode[]}> = ({elements}) => {
    return (<>
        <h1>Public-Layout</h1>
        <header>{<LayoutHeader/>}</header>
        <main>{elements}</main>
        <footer>{<LayoutFooter/>}</footer>
    </>)

}
