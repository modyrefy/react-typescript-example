import {IRouteBase} from "../../../models/interfaces/menu/IRouteBase";
import {MasterLayout} from "../../../component/layout/layout/MasterLayout";
import {LoginForm} from "../../../component/authentication/loginForm";
import React from "react";
import {AuthenticatedComponent} from "../../../component/test/authenticatedComponent";
import {HomeComponent} from "../../../component/Home/HomeComponent";
import Signup from "../../../component/authentication/signup.component";
import ProductList from "../../../component/product/productList.component";
import {PrivateRoute} from "../../../component/routes/authenticatedRoute";
import {FileUploader} from "../../../component/FileUploader/FileUploader";
import {MeasureValueComponent} from "../../../component/measureSample/MeasureValueSample";
import {FileUploaderDropZone} from "../../../component/FileUploader/FileUploaderDropZone";


// Lazy load component

export const RouteItems: IRouteBase[] =[
    {

        key: "home-test",
        title: "Routes.Home",
        path: '/test',
        isAuthenticationRequired: true,
        content: (<MasterLayout>
            <HomeComponent/>
        </MasterLayout>)
    },
    {

        key: "lodash-test",
        title: "lodash",
        path: '/lodash',
        isAuthenticationRequired: true,
        content: (<MasterLayout>
            <MeasureValueComponent/>

        </MasterLayout>)
    },
    {
        key: "home",
        title: "Routes.Home",
        path: '/',
        isAuthenticationRequired: true,
        content: (<MasterLayout>
            <HomeComponent/>
         <FileUploader/>

        </MasterLayout>)
    },
    {
        key:"login",
        title:"Routes.Login",
        path: '/login',
        isAuthenticationRequired:false,
        content: (<MasterLayout><LoginForm/></MasterLayout>)
    },
    {
        key:"signup",
        title:"Routes.Signup",
        path: '/sign-up',
        isAuthenticationRequired:true,
        content: (<MasterLayout><Signup/></MasterLayout>)
    },
    {
        key:"products",
        title:"Routes.Products",
        path: '/products',
        isAuthenticationRequired:true,
        content: (<PrivateRoute>
            <MasterLayout>
                <ProductList/>
            </MasterLayout>
        </PrivateRoute> )
    },
    {
        key:"common_products",
        title:"Routes.Common.Products",
        path: '/common_products',
        isAuthenticationRequired:false,
        content: (<MasterLayout><ProductList/></MasterLayout>)
    },
    {
        key:"private",
        title:"Routes.Private",
        path: '/private',
        isAuthenticationRequired:false,
        content: (<PrivateRoute><MasterLayout><AuthenticatedComponent/></MasterLayout></PrivateRoute>)
    },
    {
        key:"public",
        title:"Routes.Public",
        path: '/public',
        isAuthenticationRequired:false,
        content: (<MasterLayout>
            <AuthenticatedComponent/>
            <AuthenticatedComponent/>
            <AuthenticatedComponent/>
            <AuthenticatedComponent/>
            <AuthenticatedComponent/>
            <AuthenticatedComponent/>
            <AuthenticatedComponent/>
        </MasterLayout>)
    },
];

export const DynamicRouteItems: IRouteBase[]=[
    {

        key: "home-test",
        title: "Routes.Home",
        path: '/test55',
        isAuthenticationRequired: true,
        content: (<MasterLayout>
            <LoginForm/>
        </MasterLayout>),
        componentName:"../../../component/Home/HomeComponent"
    },
];
