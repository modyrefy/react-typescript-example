//npm install --save @types/react-bootstrap
//npm i @types/bootstrap
//https://www.positronx.io/build-react-login-sign-up-ui-template-with-bootstrap-4/
//https://codepen.io/lynellf/pen/oNvGZYy
import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import ProductList from "./component/product/productList.component";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {RoutesComponent} from "./component/routes/routesComponent";
import './App.css';
import { AppConfiguration } from "read-appsettings-json";
function App() {
    console.log("apiendpoint " + AppConfiguration.Setting().apiendpoint);
    console.log("subObject.option1 " + AppConfiguration.Setting().subObject.option1);
    return (
        <BrowserRouter>
            <div className="App">
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
