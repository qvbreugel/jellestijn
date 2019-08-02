import React from "react";

import farmers from "../../../assets/images/farmers.jpg";

const Introduction = () => {
  return (
    <div className="introduction">
      <p classname="introduction-title">Wij zijn Jelle en Stijn</p>
      <img src={farmers} alt="Farmers" className="introduction-image" />
      <p className="introduction-text">
        Wij zijn Jelle en Stijn Zonneveld, in de Vlaardingse volksmond beter
        bekend als "De Tweeling". Direct van onze boerderij verkopen wij eieren
        en varkensvlees. De dieren worden door onszelf verzorgd en hebben een
        goed leven. Daarbovenop bezorgen wij de producten zo van het land naar
        de klant.
      </p>
    </div>
  );
};

export default Introduction;
