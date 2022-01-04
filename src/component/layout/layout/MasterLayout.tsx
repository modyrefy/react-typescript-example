import * as React from "react";
import {FC} from "react";
import {ILayoutConfigurationBase} from "../../../models/interfaces/layout/iLayoutBase";
import * as enums from "../../../models/enums/enum";
import {LayoutEnum} from "../../../models/enums/enum";
import {LocalStorageGet} from "../../../utility/localStorage/localStorageHelper";
import {AppConfiguration} from "read-appsettings-json";
import {PublicLayout} from "./publicLayout";
import {AdminLayout} from "./adminLayout";
import {Layout1} from "./layout1";


export const MasterLayout: FC<{
    //iLayoutConfiguration?: ILayoutConfigurationBase,
    // elements?: React.ReactNode[] ,
    // children?: React.ReactNode[],
    //rest?:any
}> = ( props) => {

    const generateLayout = (): any => {
        // if (iLayoutConfiguration === null || iLayoutConfiguration === undefined) {
        //     iLayoutConfiguration = {layoutEnum: LayoutEnum.PublicLayout}
        //     const layoutFromStorage = LocalStorageGet(AppConfiguration.Setting().defaultLayoutStorageKey);
        //     iLayoutConfiguration.layoutEnum = layoutFromStorage !== null && layoutFromStorage !== undefined ? Number(layoutFromStorage) : iLayoutConfiguration.layoutEnum;
        // }
        // switch (iLayoutConfiguration.layoutEnum) {
        //     case enums.LayoutEnum.None:
        //     case enums.LayoutEnum.PublicLayout:
        //         return <PublicLayout> {props}</PublicLayout>
        //         break;
        //     case enums.LayoutEnum.AdminLayout:
        //         return <AdminLayout> {props}</AdminLayout>
        //         break;
        //     default:
        //         return <Layout1> {props}</Layout1>
        //         break
        //
        // }
        return <PublicLayout> {props.children}</PublicLayout>
    }
    return (<>
        {generateLayout()}
    </>)
}
