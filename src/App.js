import React from "react";
import "./App.css";
import Header from "./components/sections/top/Header";
import Introduction from "./components/sections/introduction/Introduction";
import Eggs from "./components/sections/eggs/Eggs";
import Pigs from "./components/sections/pigs/Pigs";
import Contact from "./components/sections/contact/Contact";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Eggs />
      <Pigs inStock />
      <Contact />
      <CookieConsent
        buttonText="Ik begrijpt het"
        style={{ background: "#bababa", color: "#333333" }}
        buttonStyle={{
          background: "#e6e6e6",
          color: "#333333"
        }}
      >
        Deze website gebruikt cookies om de gebruikerservaring te verbeteren. Op
        dit moment is de website nog in de ontwikkelfase en komt niet overeen
        met het eindresultaat.
      </CookieConsent>
    </div>
  );
}

export default App;
