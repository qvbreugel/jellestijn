import React, { useState } from "react";
import OrderEggs from "./OrderEggs";
import BoxContains from "./BoxContains";

const Eggs = () => {
  const [formVisible, setFormVisible] = useState(false);

  const clickHandler = () => {
    setFormVisible(true);
  };
  return (
    <div className={formVisible ? "eggs eggs-order" : "eggs"}>
      <p className="eggs-title">Eieren</p>
      <p className="eggs-text">
        De kippen leven in een ruime omgeving en hebben vrije uitloop. Dagelijks
        geven wij de kippen voldoende te eten en rapen wij de eieren. Ook het
        verblijf wordt netjes onderhouden door ons.
      </p>
      <p className="eggs-text">
        De eieren worden na het rapen gewassen en direct in dozen gedaan voor de
        verkoop. Wij doen al het werk zelf met de hand en zorgen dat het zo vers
        mogelijk bij de klant terecht komt.
      </p>
      <p className="eggs-text">
        Voor het hek van de boerderij kunnen de eieren opgehaald worden. Wij
        bezorgen standaard in Vlaardingen Holy. Stuur ons een bericht als je
        wilt weten of we ook in jouw gebied kunnen bezorgen.
      </p>

      <p className="eggs-heading">Prijzen</p>
      <p className="eggs-subheading">
        Wij verkopen eieren in dozen per zes en per tien stuks.
      </p>
      <BoxContains amount={6} showPrice />
      <BoxContains amount={10} showPrice />
      <p className="eggs-heading">Bestellen?</p>
      <p className="eggs-subheading">
        Vanaf nu kun je ook online bij ons eieren bestellen. Na de bestelling
        nemen wij altijd nog even persoonlijk contact met je op.
      </p>
      {formVisible ? (
        <OrderEggs setFormVisible={setFormVisible} />
      ) : (
        <button type="button" className="eggs-button" onClick={clickHandler}>
          Bestel Eieren
        </button>
      )}
    </div>
  );
};

export default Eggs;
