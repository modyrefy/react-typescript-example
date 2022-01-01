import React, {FC} from "react";
import {Link} from "react-router-dom";

export const PublicMenu: FC<{}> = () => {
    return(<>
        <nav >
            <div >
                <Link to={"/product"}>Products   </Link>
                <Link  to={"/sign-in"}>Login   </Link>
                <Link  to={"/sign-up"}>Sign up</Link>
                </div >
        </nav>
    </>)
}
