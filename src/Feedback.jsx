import React, { useState } from "react";
function Feedback(){
    const [userFeedback,setUserFeedback]=useState("");
    function handleFeedbackChange(event){
        setUserFeedback(event.target.value);
    }
    return(
        
            <div>
                <h3>Enter the Feedback</h3>
                <textarea onChange={handleFeedbackChange}></textarea>
                <h5>Your Feedback:</h5>
                <p>{userFeedback}</p>
            </div>
        
    );
}
export default Feedback;