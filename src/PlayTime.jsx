import React,{useState} from "react";
function PlayTime()
{
    const [details,setDetails]=useState({name:"Guest",phone:0,city:"NIL"})
    function handleNameChange(event){
        setDetails({...details,name:event.target.value});

    }

    function handlePhoneChange(event){
        setDetails({...details,phone:event.target.value});
    }

    function handleCityChange(event){
        setDetails({...details,city:event.target.value});
    }
    
    
    const [time, setTime]=useState(0);
    const IncreaseTimes =()=>{
        setTime(ti=>ti+1);
        setTime(ti=>ti+1);

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
            <p>Your details:{details.name} &nbsp; {details.phone} {details.city}</p>
            <label>Enter Name:</label><input type="text" value={details.name} onChange={handleNameChange}/>
            <label>Enter Phone Number:</label><input type="number" value={details.phone} onChange={handlePhoneChange}/>
            <label>Enter City:</label><input type="text" value={details.city} onChange={handleCityChange}/>


            <p>Have u went to trip along with your family? {went?"Yes":"No"}</p>
            <button onClick={yesNo}> Yes / No</button>
            <p>How many times:{time}</p>
            <button onClick={IncreaseTimes}> Increase Times</button>            
            <button onClick={DecreaseTimes}> Decrease Times</button>

        </div>
    );

}
export default PlayTime;