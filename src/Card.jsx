import travelPic from "./assets/travel.jpg"
function Card(){
    return(
        <div className="card">
            <img src={travelPic} alt="masaladosa" className="cardImg"></img>
            <h2 className="card-title"> Go Travel!!</h2>
            <p className="card-text">Before you run out of time</p>

        </div>

    );

}
export default Card