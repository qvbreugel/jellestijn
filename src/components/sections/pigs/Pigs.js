import React, { useState } from "react";
import NotifyMe from "./NotifyMe";
import OrderPigs from "./OrderPigs";

const Pigs = props => {
  const [formVisible, setFormVisible] = useState(false);

  const clickHandler = () => {
    setFormVisible(true);
  };

  let content = (
    <div className="pigs">
      <p className="pigs-title">Varkensvlees</p>
      <div className="pigs-top">
        <p className="pigs-text">
          Onze varkens hebben een grote plek gekregen in de stal. Ze kunnen zich
          zelfs uitleven in hun eigen modderbad.
        </p>
      </div>
      <div className="pigs-bottom">
        <p className="pigs-text">
          Als de varkens groot genoeg zijn, worden ze stressvrij naar de
          slachter gebracht waardoor de kwaliteit van het vlees gewaarborgd
          blijft. Daar pakken wij zelf ook het vlees in.
        </p>
      </div>
      <p className="pigs-heading">Op de hoogte blijven?</p>
      <p className="pigs-subheading">
        Op dit moment hebben wij geen varkensvlees. Laat hieronder je e-mail
        adres achter om bericht van ons te krijgen zodra wij weer vlees
        verkopen.
      </p>
      <NotifyMe />
    </div>
  );

  if (props.inStock) {
    content = (
      <div
        className={
          formVisible ? "pigs pigs-stock pigs-order" : "pigs pigs-stock"
        }
      >
        <p className="pigs-title">Varkensvlees</p>
        <div className="pigs-top">
          <p className="pigs-text">
            Onze varkens hebben een grote plek gekregen in de stal. Ze kunnen
            zich zelfs uitleven in hun eigen modderbad.
          </p>
        </div>
        <div className="pigs-bottom">
          <p className="pigs-text">
            Als de varkens groot genoeg zijn, worden ze stressvrij naar de
            slachter gebracht waardoor de kwaliteit van het vlees gewaarborgd
            blijft. Daar pakken wij zelf ook het vlees in.
          </p>
        </div>
        <p className="pigs-heading">Bestellen?</p>
        <div className="pigs-subheading-one">
          <p className="pigs-subheading subheading-stock">
            Je kunt ons varkensvlees online bestellen. Wij hebben onze
            vleespakketten zo geprobeerd samen te stellen dat er voor ieder wat
            wils bij zit.
          </p>
        </div>
        <div className="pigs-subheading-two">
          <p className="pigs-subheading subheading-stock">
            Mocht je bepaalde stukken vlees los willen bestellen of een eigen
            pakket samen willen stellen, neem dan contant met ons op via het
            contactformulier onderaan de pagina.
          </p>
        </div>
        {formVisible ? (
          <OrderPigs setFormVisible={setFormVisible} />
        ) : (
          <button type="button" className="pigs-button" onClick={clickHandler}>
            Bestel Varkensvlees
          </button>
        )}
      </div>
    );
  }
  return content;
};

export default Pigs;
