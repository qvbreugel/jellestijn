import React from "react";
import NotifyMe from "./NotifyMe";

const Pigs = () => {
  return (
    <div className="pigs">
      <p className="pigs-title">Varkensvlees</p>
      <p className="pigs-text">
        Onze varkens hebben een grote plek gekregen in de stal. Ze kunnen zich
        zelfs uitleven in hun eigen modderbad.
      </p>
      <p className="pigs-text">
        Als de varkens groot genoeg zijn, worden ze stressvrij naar de slachter
        gebracht waardoor de kwaliteit van het vlees gewaarborgd blijft. Daar
        pakken wij zelf ook het vlees in.
      </p>
      <p className="pigs-heading">Op de hoogte blijven?</p>
      <p className="pigs-subheading">
        Op dit moment hebben wij geen varkensvlees. Laat hieronder je e-mail
        adres achter om bericht van ons te krijgen zodra wij weer vlees
        verkopen.
      </p>
      <NotifyMe />
    </div>
  );
};

export default Pigs;
