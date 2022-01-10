import {FC} from "react";
import {CookieGet, CookieSet} from "../../utility/cookie/cookieHelper";
export const HomeComponent:FC<{}>=()=>{
    CookieSet("abc","123",120);
    console.log("cookie - " +CookieGet("abc") );
    return(<>
        <p>Home Component</p>
    </>)
};
