import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card  from "./Card.jsx";
import Button from "./Button/Button.jsx";
import Contact from "./Contact.jsx";
function App() {
 return(
          <>
               <Header />
               <Card />
               <br />
               <Contact name="Ram" phn={7655678890} isavailable={true}/>
               <Contact name="Shany" phn={8876998899} isavailable={false}/>
               <Contact name="RIthesh" phn={8888998899} isavailable={true}/>
               <Contact></Contact>
               <Button />
               <Footer /> 
          </>
 );
}

export default App
