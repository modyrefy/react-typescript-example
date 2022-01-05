//https://pramodmaali.medium.com/dynamic-routing-with-json-config-react-typescript-284e562390b6
//https://github.com/malipramod/dynamic-routing-with-json-react
import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {RouteItems} from "../../resources/data/Routes/RouteData";


export const Container: FC<{}> = (props) => {
    return (
        <>
            {props.children}
        </>
    );
}
export const RoutesComponent: FC<{}> = () => {
    return (
        <>
            *<Routes>
            {RouteItems.map(item => (
                <Route
                    element={<Container>{item.content} </Container>}
                    path={item.path}/>
            ))}
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
