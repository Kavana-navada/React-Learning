import ComponentB from "./ComponentB";
import React,{useState, createContext} from "react";
export const userContext=createContext();

function ComponentA(){
    const [user,setUser]=useState("kavana");


    return(
        <div className="Box">
            <h1>ComponentA</h1>
            <h3>hi {user}</h3>
            <userContext.Provider value={user}>
                <ComponentB user={user}/>
            </userContext.Provider>
            
        </div>

    );
}
export default ComponentA;