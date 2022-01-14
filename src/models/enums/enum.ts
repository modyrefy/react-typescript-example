import {publicDecrypt} from "crypto";

export enum LayoutEnum {
    None = 0,
    Layout1 = 1,
    Layout2=2,
    Layout3=3,
    LoginLayout=4,
    PublicLayout = 5,
    OnlineLayout=6,
    AdminLayout=7
}
export  enum UserRoleEnum {
    Guest = 1,
    Online=2,
    Admin=3,
    SeniorAdmin=11

}
export enum DocumentStatusEnum
{
    Add=1,
    Delete=2,
    View=3

}
