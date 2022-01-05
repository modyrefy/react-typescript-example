import {FC} from "react";
export const AuthenticatedComponent:FC<{}>=()=>{
    return(<>
        <p>Authorized Component</p>
        <button onClick={()=>{alert('ttttttttttttttt')}}>test</button>
    </>)
};
