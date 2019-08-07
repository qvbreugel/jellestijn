import React from "react";
import "./App.css";
import Header from "./components/sections/top/Header";
import Introduction from "./components/sections/introduction/Introduction";
import Eggs from "./components/sections/eggs/Eggs";
import Pigs from "./components/sections/pigs/Pigs";
import Contact from "./components/sections/contact/Contact";
import Order from "./components/sections/order/Order";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Eggs />
      <Pigs />
      <Order />
      <Contact />
    </div>
  );
}

export default App;
