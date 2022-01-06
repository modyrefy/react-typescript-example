
import {IRouteBase} from "../../../models/interfaces/menu/IRouteBase";

export const PublicMenuData:IRouteBase[]=[
    {key: "home",title: "Routes.Home",path: '/',isAuthenticationRequired: true, content:""},
    { key:"signup", title:"Routes.Login",path: '/login',isAuthenticationRequired:false,content:""},
    { key:"products",title:"Routes.Products",path: '/products',isAuthenticationRequired:true,content:""}
];
