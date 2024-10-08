import React,{useState} from "react";
function PlayTime()
{
    const [time, setTime]=useState(0);
    const IncreaseTimes =()=>{
        setTime(time+1);
    }
    const DecreaseTimes =()=>{
        setTime(time-1);
    }

    const [went,updateWent]=useState(false);
    const yesNo=()=>{
        updateWent(!went);
    }
    return(
        <div>
            <p>Have u went to trip along with your family? {went?"Yes":"No"}</p>
            <button onClick={yesNo}> Yes / No</button>
            <p>How many times:{time}</p>
            <button onClick={IncreaseTimes}> Increase Times</button>            
            <button onClick={DecreaseTimes}> Decrease Times</button>

        </div>
    );

}
export default PlayTime;