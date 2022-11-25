import { Navbar } from "./Components/Navbar";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Secondcontainer from "./Components/Secondcontainer";
import Map from "./Components/Map";
import { Plans } from "./Components/Plans";
import { Box } from "./Components/Box";
import { Thirdcontainer } from "./Components/Thirdcontainer";
import Fourthcontainer from "./Components/Fourthcontainer";
import Subscribe from "./Components/Subscribe";
function App() {
  return (
    <div className="App" style={{margin:"8vw"}}>
   <Navbar/>
   <Secondcontainer/>
   <br/>
   <br/>
   <Thirdcontainer/>
   <br/>
   <Fourthcontainer/>
   <br/>
   <Plans/>
   <Box/>
    <Map/>
    <Testimonial/>
    <Subscribe/>
    <Footer/>
    </div>
  );
}

export default App;
