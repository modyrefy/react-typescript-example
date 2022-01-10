import {FC, useEffect} from "react";
import {CookieGet, CookieSet} from "../../utility/cookie/cookieHelper";
import {LocalStorageSet} from "../../utility/localStorage/localStorageHelper";
export const HomeComponent:FC<{}>=()=>{
    CookieSet("abc","123",120);
    //console.log("cookie - " +CookieGet("abc") );
     //window.addEventListener('message', function(e) {
    //
    //     var origin = e.origin || e.origin;
    //     //alert('origin ' + origin);
    //     if(origin !== 'http://localhost:3000')
    //         return;
    //       alert(JSON.stringify( e.data));
    //     console.log('received message:  ' + e.data, e);
    // }, false);
    const domains = [
        "https://localhost:5001",
        "http://localhost:24964"
    ]
    const messageReceiverDomain="http://localhost:24964";
    window.addEventListener("message", messageHandler, false);
    function messageHandler(event:MessageEvent) {
        var origin = event.origin;
        if(!domains.includes(origin)) {
            //alert('error' + origin);
            return;
        }
        //else{  alert('pass' + origin);}
        const { action, key, value } = event.data
        console.log('action '+JSON.stringify( event.data));
        if ( action == 'authorizationKey'){
            //alert(value);
            LocalStorageSet("authorizationKey",value);
        }
       else  if ( action == 'languageKey'){
            //alert(value);
            LocalStorageSet("languageKey",value);
        }
       else if ( action == 'othernKey'){
            //alert(value);
            LocalStorageSet("othernKey",value);
        }
    }
    useEffect(()=>{},[]);
    return(<>
        <p>Home Component</p>
        <button onClick={()=>{
            window.parent.postMessage({action:"childlessness",status:1,value :"abc"},messageReceiverDomain);

        }}>test-post-message</button>
    </>)
};
