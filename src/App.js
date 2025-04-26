import "./App.css";
import { SignUp } from "./components/SignUp/SignUp.jsx";
import { MobileModal } from "./components/MobileModal/MobileModal.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Forecast } from "./components/Forecast/Forecast.jsx";
import { Pets } from "./components/Pets/Pets.jsx";
import { Nature } from "./components/Nature/Nature.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      {/* <SignUp />
      <MobileModal /> */}
      <Header />
      <Hero />
      <Forecast />
      <Pets />
      <Nature />
      <Footer />
    </div>
  );
}

export default App;
