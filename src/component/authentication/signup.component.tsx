import React, { Component } from "react";
import {AuthenticatedComponent} from "../test/authenticatedComponent";
import {LodashComponent} from "../LodashSample/LodashComponent";
export default function Signup (props:any){
    return (
        <React.Fragment>
            <h3>React Signup Component</h3>
            <button>bbbbbbbbbbbbbbb</button>
            <AuthenticatedComponent/>
            <LodashComponent/>
        </React.Fragment>
    );
}
