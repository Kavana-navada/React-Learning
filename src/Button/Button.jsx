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
    return(
        <>
        <button className={mystyles.instructionButton}> Click here to read instructions</button>
        <button style={gobtn}> Let's go</button>
        </>
    );
}
export default Button