import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import SignUp from "../authentication/signup.component";
import {LoginForm} from "../authentication/loginForm";
import ProductList from "../product/productList.component";
import {PrivateRoute} from "./authenticatedRoute";
import {AuthenticatedComponent} from "../test/authenticatedComponent";
import {ReactI18TranslatorSample} from "../translatorExample/react-i18/reactI18TranslatorSample";
import {ReactI18TranslatorSample1} from "../translatorExample/react-i18/ReactI18TranslatorSample1";
import {ProductDetail} from "../product/productDetail.component";
import {MasterLayout} from "../layout/layout/MasterLayout";

interface IComponent{
    component:React.ReactNode,
    name:string
}
export const RoutesComponent: FC<{}> = () => {
    // let iLayoutConfigurationBase: ILayoutConfigurationBase = {layoutEnum: LayoutEnum.PublicLayout};
    // const iServerMenuBase: IMenuBase[] = [
    //     {key: "login", text: "LoginForm", path: "/login", isAuthenticationRequired: true},
    //     {key: "sign-in", text: "LoginForm", path: "/sign-in", isAuthenticationRequired: true},
    //     {key: "SignUp", text: "SignUp", path: "/sign-up", isAuthenticationRequired: true},
    //      {key: "commonproduct", text: "ProductList", path: "/commonproduct", isAuthenticationRequired: true},
    //     // {key: "product", text: "ProductList", path: "/product", isAuthenticationRequired: true},
    //     {key: "guest", text: "ReactI18TranslatorSample", path: "/guest", isAuthenticationRequired: true},
    //
    //
    // ];
    // const comp:IComponent[]=[
    //     {component:LoginForm ,name:"login"},
    //     {component:LoginForm ,name:"sign-in"},
    //     {component:SignUp ,name:"SignUp"},
    //     {component:ProductList ,name:"commonproduct"},
    //     {component:ReactI18TranslatorSample ,name:"guest"}
    // ];


    // const v=React.createElement("SignUp");
    // console.log("vvvvvvvvvvvvvvvv-" +v);
    // const vv=iServerMenuBase.filter((row, index) => {
    //     var record= comp.filter(x => x.name === row.key)[0];
    //     return  record!=null && record!=undefined?record.component:null;
    // });
    // const vv=comp[0].component;
    // console.log("dddddddddddddddddd"+ JSON.stringify(vv.));
    return (
        <>
            <Routes>
                {/*{*/}
                {/*    iServerMenuBase.map((row, index) => (*/}
                {/*        <Route path={row.path} element={<MasterComponent elements={[*/}
                {/*            comp.filter(x=>x.name===row.key)[0].component*/}
                {/*        ]} />}/>*/}
                {/*    ))*/}
                {/*}*/}
                {/*<Route path='/login' element={<MasterLayout> <LoginForm/> </MasterLayout>}/>*/}
                {/*<Route path="/sign-in"  element={<MasterLayout> <LoginForm/> </MasterLayout>}/>*/}
                {/*<Route path="/sign-up"  element={<MasterLayout> <SignUp/> </MasterLayout>}/>*/}
                <Route path="/common-products"  element={<MasterLayout> <ProductList/> </MasterLayout>}/>
                <Route path="/product-detail/:id"  element={<MasterLayout><ProductDetail/></MasterLayout>}/>
                {/*<Route path="/products" element=*/}
                {/*    {<PrivateRoute>*/}
                {/*        {<MasterLayout> <ProductList/> </MasterLayout>}*/}
                {/*    </PrivateRoute>*/}
                {/*    }/>*/}
                {/*/!*<Route path="/guest" element=*!/*/}
                {/*/!*    {<MasterLayout>*!/*/}
                {/*/!*        <ReactI18TranslatorSample/>*!/*/}
                {/*/!*        <ReactI18TranslatorSample1/>*!/*/}
                {/*/!*        <ReactI18TranslatorSample1/>,*!/*/}
                {/*/!*        <ReactI18TranslatorSample1/>,*!/*/}
                {/*/!*        <ReactI18TranslatorSample1/>,*!/*/}
                {/*/!*        <ReactI18TranslatorSample1/>*!/*/}
                {/*/!*    </MasterLayout>} />*!/*/}
                <Route path="/" element=
                    {<PrivateRoute>
                        {<MasterLayout><AuthenticatedComponent/> </MasterLayout>}
                    </PrivateRoute>
                    }/>

                {/*<Route path="/private" element=*/}
                {/*    {<PrivateRoute>*/}
                {/*        {<MasterLayout><AuthenticatedComponent/> </MasterLayout>}*/}
                {/*    </PrivateRoute>*/}
                {/*    }/>*/}

            </Routes>
        </>
    )
};
