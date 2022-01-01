import * as React from "react";
import {FC} from "react";
import {PublicLayout} from "./publicLayout";
import {Layout1} from "./layout1";
import * as enums from "../../models/enums/enum";
import {LayoutEnum} from "../../models/enums/enum";
import {ILayoutConfigurationBase} from "../../models/interfaces/layout/iLayoutBase";
import {LocalStorageGet} from "../../utility/localStorage/localStorageHelper";
import {AppConfiguration} from "read-appsettings-json";
import {AdminLayout} from "./adminLayout";
import {TestLayout} from "./testLayout";

export const MasterLayout: FC<{
    iLayoutConfiguration?: ILayoutConfigurationBase,
    elements?: React.ReactNode[] ,
   // layoutChildren?: React.ReactNode
}> =
    ({
         iLayoutConfiguration,
        elements,
         //layoutChildren
     }) => {
        const generateLayout = (): any => {
            if (iLayoutConfiguration === null || iLayoutConfiguration === undefined) {
                iLayoutConfiguration = {layoutEnum: LayoutEnum.PublicLayout}
                const layoutFromStorage = LocalStorageGet(AppConfiguration.Setting().defaultLayoutStorageKey);
                iLayoutConfiguration.layoutEnum = layoutFromStorage !== null && layoutFromStorage !== undefined ? Number(layoutFromStorage) : iLayoutConfiguration.layoutEnum;

                // let userKey: string | null = LocalStorageEncryptedGet(AppConfiguration.Setting().authenticatedUserStorageKey);
                // if (userKey !== null && userKey !== undefined) {
                //     let user: UserResponse = JSON.parse(userKey.toString()) as UserResponse;
                //     if (user !== null && user !== undefined) {
                //         switch (user.RoleId) {
                //             case UserRoleEnum.Online:
                //                 iLayoutConfiguration.layoutEnum = LayoutEnum.OnlineLayout;
                //                 break;
                //             case UserRoleEnum.Admin:
                //                 iLayoutConfiguration.layoutEnum = LayoutEnum.AdminLayout;
                //                 break;
                //             case UserRoleEnum.SeniorAdmin:
                //                 iLayoutConfiguration.layoutEnum = LayoutEnum.Layout2;
                //                 break;
                //             case UserRoleEnum.Guest:
                //             default:
                //                 iLayoutConfiguration.layoutEnum = LayoutEnum.PublicLayout;
                //                 break;
                //         }
                //
                //     }
                // }
            }
            switch (iLayoutConfiguration.layoutEnum) {
                case enums.LayoutEnum.None:
                case enums.LayoutEnum.PublicLayout:
                    return <PublicLayout elements={elements}/>
                    break;
                case enums.LayoutEnum.AdminLayout:
                    return <AdminLayout elements={elements}/>
                    break;
                default:
                    return <Layout1 elements={elements}/>
                    break

            }
            return <PublicLayout elements={elements}/>
        }
        return (<>
            {
                generateLayout()
            }</>)
    }
