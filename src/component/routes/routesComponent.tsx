import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import SignUp from "../authentication/signup.component";
import {LoginForm} from "../authentication/loginForm";
import ProductList from "../product/productList.component";
import {PrivateRoute} from "./authenticatedRoute";
import {AuthenticatedComponent} from "../test/authenticatedComponent";
import {MasterComponent} from "../layout/masterComponenet";
import {ReactI18TranslatorSample} from "../translatorExample/react-i18/reactI18TranslatorSample";
import {ReactI18TranslatorSample1} from "../translatorExample/react-i18/ReactI18TranslatorSample1";
import {ILayoutConfigurationBase} from "../../models/interfaces/layout/iLayoutBase";
import {LayoutEnum} from "../../models/enums/enum";

export const RoutesComponent: FC<{}> = () => {
    let iLayoutConfigurationBase: ILayoutConfigurationBase = {layoutEnum: LayoutEnum.PublicLayout};
    return (
        <>
            <Routes>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path="/sign-in" element={<LoginForm/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/product" element={<ProductList/>}/>
                <Route path="/guest" element=
                    {<MasterComponent
                        elements={[
                            <ReactI18TranslatorSample/>,
                            <ReactI18TranslatorSample1/>,
                            <ReactI18TranslatorSample1/>,
                            <ReactI18TranslatorSample1/>,
                            <ReactI18TranslatorSample1/>
                            ]}
                        children={[
                            <ReactI18TranslatorSample1/>,
                            <ReactI18TranslatorSample1/>,
                            <ReactI18TranslatorSample1/>
                        ]}
                    ></MasterComponent>}
                />
                {/*<Route path="/guest1" element=*/}
                {/*    {(props:any) => <MasterComponent {...props} layoutEnum={LayoutEnum.GuestLayout}  />}*/}
                {/*/>*/}
                <Route path="/" element=
                    {<PrivateRoute>
                        {<AuthenticatedComponent/>}
                    </PrivateRoute>
                    }/>
                <Route path="/private" element=
                    {<PrivateRoute>
                        {<AuthenticatedComponent/>}
                    </PrivateRoute>
                    }/>

            </Routes>
        </>
    )
};
