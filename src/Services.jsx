import React,{useState} from "react";
function Services(){
    const [service,setService]=useState(["Hotel","Flight","Lodge"]);
    function handleAddServices(event){
        const newService=document.getElementById("inputService").value;
        document.getElementById("inputService").value="";
        setService(s=>[...s,newService]);

    }

    function handlerRemoveServices(index){
        setService(service.filter((s,i)=>i!=index));

    }
    return(
        <div>
            <h4>We provide services like :</h4>
            <ul>{service.map((service,index)=><li key={index} onClick={()=>handlerRemoveServices(index)}>{service}</li>)}</ul>

            <input type="text" placeholder="enter additional services" id="inputService" />
            <button onClick={handleAddServices}>Add Service</button>
        </div>
    );

}
export default Services;