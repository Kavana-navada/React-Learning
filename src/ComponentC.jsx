import { userContext } from "./ComponentA";
import ComponentD from "./ComponentD";
import React,{useContext} from "react";
function ComponentC(){
    const user=useContext(userContext);
    return(
        <div className="Box">
            <h1>ComponentC</h1>
            <h3>are u there {user}</h3>
            <ComponentD />
        </div>

    );
}
export default ComponentC;