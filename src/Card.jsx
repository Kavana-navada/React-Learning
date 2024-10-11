import { useState } from "react";
import travelPic from "./assets/travel.jpg"
function Card(){
    const [color,setColor]=useState("#ffffff");
    function handleColor(event){
        setColor(event.target.value);
    }
    return(
        <>
        <div className="card">
            <img src={travelPic} alt="masaladosa" className="cardImg"></img>
            <h2 className="card-title"> Go Travel!!</h2>
            <p className="card-text">Before you run out of time</p>

        </div>
        <div className="card" style={{backgroundColor:color}}>

            <h3>Pick the Color of your vehicle </h3>
            <div className="color-display" >
                <p>Selected color:{color}</p>
                <input type="color" value={color} onChange={handleColor}/>

            </div>

        </div>
        </>

    );

}
export default Card