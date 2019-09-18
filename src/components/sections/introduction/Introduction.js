import React from "react";

import twins from "../../../assets/images/twins.png";

const Introduction = () => {
  return (
    <div className="introduction">
      <img src={twins} alt="Farmers" className="introduction-image" />
      <div className="introduction-description">
        <p className="introduction-title">Wij zijn Jelle en Stijn</p>
        <p className="introduction-text">
          Wij zijn Jelle en Stijn Zonneveld, in de Vlaardingse volksmond beter
          bekend als <span className="sevenhundred">"De Tweeling"</span>. Direct
          van onze boerderij verkopen wij eieren en varkensvlees.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
