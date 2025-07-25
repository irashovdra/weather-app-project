import "./App.css";
import { useState } from "react";
import Slider from "./components/Nature/Nature";
import Hero from "./components/Hero/Hero";
import Weather from "./components/Weather/Weather";
import Header from "./components/Header/Header";
import News from "./components/Pets/Pets";
import Footer from "./components/Footer/Footer";  

function App() {
  const [city, setCity] = useState(["London"]);
  const [uniqueData, setUniqueData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <Hero proc={setCity} proc2={[uniqueData, setUniqueData]} />
      {isLoggedIn && (
        <>
          <Weather city={[city, setCity]} uniqueDataBlock={[uniqueData, setUniqueData]} />
          <News />
          {/* <Slider /> */}
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
