import * as React from "react";
import {FC} from "react";
import {MasterLayout} from "./masterLayout";
import {ILayoutConfigurationBase} from "../../../models/interfaces/layout/iLayoutBase";

//export const MasterComponent: FC<{layoutEnum: enums.LayoutEnum}> = ({layoutEnum}) => {
export const MasterComponent: FC<{
    iLayoutConfiguration?: ILayoutConfigurationBase,
    elements?: React.ReactNode[] ,
    children?: React.ReactNode[],
    //rest?:any
}> = ({
          iLayoutConfiguration,
          elements,children,
    //rest
      }) => {
    return (<>
        <MasterLayout
            iLayoutConfiguration={iLayoutConfiguration}
            elements={elements}
        >
        </MasterLayout>
        <p>vvvvvvvvvvvvvv</p>
        {children}
    </>)
}
