import {FC, ReactNode} from "react";
import {Link, Route, Routes, useNavigate,Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {IuserState} from "../../models/interfaces/user/userState";

export const PrivateRoute:FC<{children:any }>=({ children })=> {
    // @ts-ignore
           const User = useSelector((state: IuserState) => ({...state.User}));
    return User && User.isAuthenticated ? children : <Navigate to="/login" />;
}

// export const  AuthenticatedRoute:FC<{component:ReactNode,rest:any}>=({component,...rest})=> {
//     // @ts-ignore
//     const User = useSelector((state: IuserState) => ({...state.User}));
//     const navigate = useNavigate();
// return(<>
//     <Route
//         {...rest}
//         render={(props) =>
//             User && User.isAuthenticated ? (
//                 <component {...props}></component>
//             ) : (
//                 navigate("/")
//             )
//         }
//     </Route>
// </>)
// };
