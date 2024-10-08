import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card  from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Contact from "./Contact.jsx";
import UserGreeting from "./UserGreeting.jsx";
import {LocationList, CostlyList} from "./LocationList.jsx";
import PlayTime from "./PlayTime.jsx";
function App() {
     const locationDetails=[{id:1,name:'Banglore', days:3},
          {id:2,name:'Lakshadweep',days:2},
          {id:3,name:'Andaman',days:3},
          {id:4,name:'Nepal',days:4},
          {id:5,name:'Malesiya',days:5}]; 
 return(
          <>
               <UserGreeting isloggedin={true} name="Ramya" />
               <Header />
               <Card />
               <br />
               <Contact name="Ram" phn={7655678890} isavailable={true}/>
               <Contact name="Rithesh" phn={8888998899} isavailable={true}/>
               <Contact></Contact>
               <Button />
               <LocationList items={locationDetails} category="Available package"/>
               <CostlyList items={locationDetails} category="Costly package"/>
               <hr />
               <PlayTime />
               <Footer /> 
          </>
 );
}

export default App
