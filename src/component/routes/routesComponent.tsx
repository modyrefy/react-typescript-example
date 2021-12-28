import React, {  FC } from "react";
import {Link, Route, Routes} from "react-router-dom";
import SignUp from "../authentication/signup.component";
import {LoginForm} from "../authentication/loginForm";
export const RoutesComponent:FC<{}>=()=>{
    return  (

        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>Home</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-in"}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Routes>
                        <Route path='/login' element={<LoginForm/>}/>
                        <Route path="/sign-in" element={<LoginForm/>}/>
                        <Route path="/sign-up" element={<SignUp/>}/>
                    </Routes>
                </div>
            </div>
        </React.Fragment>
    )};
