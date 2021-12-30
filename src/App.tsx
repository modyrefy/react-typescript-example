//npm install --save @types/react-bootstrap
//npm i @types/bootstrap

import React, {useState} from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import ProductList from "./component/product/productList.component";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {RoutesComponent} from "./component/routes/routesComponent";
import './App.css';
import { AppConfiguration } from "read-appsettings-json";
import {LangSwitcher} from "./component/languageSwitcher/langSwitcher";
function App() {
    // console.log("apiendpoint " + AppConfiguration.Setting().apiendpoint);
    // console.log("subObject.option1 " + AppConfiguration.Setting().subObject.option1);
    const [locale, setlocale] = useState<string>('de');
    return (
        <BrowserRouter>
            <div  className="App">
                <LangSwitcher setlocale={setlocale} locale={locale} />
                <RoutesComponent/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </BrowserRouter>
    );
}

export default App;
