import mystyles from './Button.module.css'
function Button(){
    const gobtn=
    {
        backgroundColor: "rgb(125, 240, 163)",
        padding: "5px",
        color: "black",
        fontFamily:'Trebuchet MS',
        borderRadius: "5px",
        border: "none",
        margin: "10px",
        cursor: "pointer",
        
    };
    let count=0;
    const handleClick=(e)=>e.target.textContent="Read";
    const handleClick2=(name)=>
        {
            if(count<3)
            {
                count+=1;
                console.log(`${name} ,u clicked ${count}times!!`);
            }
            else
            {
                console.log(`${name},stop u already clicked ${count}times`);
            }
        };
    return(
        <>
        <button onClick={(e)=>handleClick(e)} className={mystyles.instructionButton}> Click here to read instructions</button>
        <button onClick={()=>handleClick2("hey")} style={gobtn}> Let's go</button>
        </>
    );
}
export default Button