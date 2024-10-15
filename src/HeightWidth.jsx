import React,{useState,useEffect} from "react";
function HeightWidth(){
    const [height,setHeight]=useState(window.innerHeight);
    const [width,setWidth]= useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener("resize",reSize);
        console.log("event added");
        return(()=>{
            window.removeEventListener("resize",reSize);
            console.log("event removed");
        })
    },[]);
    
    useEffect(()=>{
        document.title=`size ${width} X ${height}`;
    },[width,height]);

    function reSize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
        
    }

    return(
        <>
        <p>Height: {height}px</p>
        <p>Width: {width}px</p>
        </>
    );
}
export default HeightWidth;