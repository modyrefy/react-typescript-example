//https://pramodmaali.medium.com/dynamic-routing-with-json-config-react-typescript-284e562390b6
//https://github.com/malipramod/dynamic-routing-with-json-react
//https:reactrouter.com/docs/en/v6/examples/auth
import React, {FC, lazy,Suspense} from "react";
import {Route, Routes,Navigate} from "react-router-dom";
import {DynamicRouteItems, RouteItems} from "../../resources/data/Routes/RouteData";
import {PublicLayout} from "../layout/layout/publicLayout";
import Signup from "../authentication/signup.component";
import {CustomLayout} from "../layout/layout/CustomLayout";
import {MasterLayout} from "../layout/layout/MasterLayout";
import {LayoutFooter} from "../layout/footer/layoutFooter";
import {IDynamicRouteBase, IRouteBase} from "../../models/interfaces/menu/IRouteBase";


export const Container: FC<{}> = (props) => {
    return (
        <>
            {props.children}
        </>
    );
}
export const RoutesComponent: FC<{}> = () => {
    const OtherComponent = React.lazy(() => import('../authentication/signup.component'));

    const Calendar = React.lazy(() => {
        return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
            () =>
                Math.floor(Math.random() * 10) >= 4
                    ? import("../authentication/signup.component")
                    : Promise.reject(new Error())
        );
    });


    const Calendar1 = React.lazy(() =>
        import("../authentication/signup.component")
    );
    //const t1=DynamicRouteItems;
    // const dynamicRouteList:IDynamicRouteBase[]=[];
    // DynamicRouteItems.map(item=>{
    //     dynamicRouteList.push({
    //         key:item.key,
    //         title:item.title,
    //         path:item.path,
    //         isAuthenticationRequired:item.isAuthenticationRequired,
    //         jsxContent:  <Container> {(  lazy(() => import(item.componentName||""))} </Container>
    //     });
    // });
    return (
        <>
            <Routes>
                {/*{dynamicRouteList.map(item => (*/}
                {/*    <Route*/}
                {/*         element={<Container>{item.jsxContent} </Container>}*/}
                {/*        //element={item.jsxContent}*/}
                {/*        path={item.path}/>*/}
                {/*))}*/}


                {RouteItems.map(item => (
                    <Route
                        element={<Container>{item.content} </Container>}
                        path={item.path}/>
                ))}
                <Route path="/test" element={<Navigate to="/home-test" />} />
                <Route path="/" element={<CustomLayout />}>
                    <Route   path="sign-up1"  element={
                        <React.Suspense fallback={<>...</>}>
                        <Signup/>
                        </React.Suspense>
                    }/>
                </Route>
                <Route path="sign-up2" element={<Signup/>}/>
                <Route path="/sign-up4" element={OtherComponent}/>
                <Route path="/sign-up3" element={
                    <Suspense fallback={<>loading...</>}>
                        {lazy(() => import('../authentication/signup.component'))}
                    </Suspense>
                }/>
                <Route path="/sign-up5" element={
                    <Suspense fallback={<>loading...</>}>
                        <Calendar1/>
                    </Suspense>
                }/>
            </Routes>
            {/*<Routes>*/}
            {/*    /!*{*!/*/}
            {/*    /!*    iServerMenuBase.map((row, index) => (*!/*/}
            {/*    /!*        <Route path={row.path} element={<MasterComponent elements={[*!/*/}
            {/*    /!*            comp.filter(x=>x.name===row.key)[0].component*!/*/}
            {/*    /!*        ]} />}/>*!/*/}
            {/*    /!*    ))*!/*/}
            {/*    /!*}*!/*/}
            {/*    <Route path='/login' element={<MasterLayout> <LoginForm/> </MasterLayout>}/>*/}
            {/*    <Route path="/sign-in"  element={<MasterLayout> <LoginForm/> </MasterLayout>}/>*/}
            {/*    <Route path="/sign-up"  element={<MasterLayout> <SignUp/> </MasterLayout>}/>*/}
            {/*    <Route path="/sign-up1"  element={<MasterLayout>*/}
            {/*        {<MasterLayout> <ReactI18TranslatorSample/> </MasterLayout>}*/}
            {/*    </MasterLayout>}/>*/}
            {/*    <Route path="/common-products"  element={<MasterLayout> <ProductList/> </MasterLayout>}/>*/}
            {/*    <Route path="/product-detail/:id"  element={<MasterLayout><ProductDetail/></MasterLayout>}/>*/}
            {/*    <Route path="/products" element=*/}
            {/*        {<PrivateRoute>*/}
            {/*            {<MasterLayout> <ProductList/> </MasterLayout>}*/}
            {/*        </PrivateRoute>*/}
            {/*        }/>*/}
            {/*    <Route path="/guest" element=*/}
            {/*        {<MasterLayout>*/}
            {/*            <ReactI18TranslatorSample/>*/}
            {/*            <ReactI18TranslatorSample1/>*/}
            {/*            <ReactI18TranslatorSample1/>,*/}
            {/*            <ReactI18TranslatorSample1/>,*/}
            {/*            <ReactI18TranslatorSample1/>,*/}
            {/*            <ReactI18TranslatorSample1/>*/}
            {/*        </MasterLayout>} />*/}
            {/*    <Route path="/" element=*/}
            {/*        {<PrivateRoute>*/}
            {/*            {<MasterLayout>*/}
            {/*                <AuthenticatedComponent/>*/}
            {/*                <AuthenticatedComponent/>*/}
            {/*                <AuthenticatedComponent/>*/}
            {/*                <AuthenticatedComponent/>*/}
            {/*                <AuthenticatedComponent/>*/}
            {/*            </MasterLayout>}*/}
            {/*        </PrivateRoute>*/}
            {/*        }/>*/}

            {/*    /!*<Route path="/private" element=*!/*/}
            {/*    /!*    {<PrivateRoute>*!/*/}
            {/*    /!*        {<MasterLayout><AuthenticatedComponent/> </MasterLayout>}*!/*/}
            {/*    /!*    </PrivateRoute>*!/*/}
            {/*    /!*    }/>*!/*/}

            {/*</Routes>*/}
        </>
    )
};
