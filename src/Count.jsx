import React,{useState, useEffect}from "react";
function Count(){
    const [count,setCount]=useState(0);
    const[times,setTimes]=useState(1000)
    function addCount(){
        setCount(c=>c+1);
    }

    function addTimes(){
        setTimes(t=>t+10);
    }
    useEffect(()=>{
        document.title=`kavana ${count} ${times}`;
    },[count]);
    return(
        <>
            <p>Count:{count}</p>
            <button onClick={addCount}>Add</button>
            <p>Count:{times}</p>
            <button onClick={addTimes}>Add Time</button>
        </>
    );
}
export default Count;