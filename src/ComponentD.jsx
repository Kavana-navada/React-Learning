import React,{useContext} from "react";
import { userContext } from "./ComponentA";
function ComponentD(){
    const user=useContext(userContext);
    return(

       
        <div className="Box">
            <h1>ComponentD</h1>
            <h3>hi {user} </h3>
        </div>

    );
}
export default ComponentD;