import React,{useEffect, useState} from "react";
function DigitalClock(){
    const [time,setTime]=useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        },1000) ;

        return()=>{
            clearInterval(intervalId);
        }
    },[]);

    function formateTime(){
        let hours=time.getHours();
        let min=time.getMinutes();
        let sec=time.getSeconds();
        let meridem=hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(min)}:${padZero(sec)} ${meridem}`;

    }

    function padZero(number){
        return (number < 10 ? "0" : "")+number;
    }
    return(

        <div className="clockContainer">
            <div className="clock">
                <span>{formateTime()}</span>
            </div>

        </div>

    );
}
export default DigitalClock;