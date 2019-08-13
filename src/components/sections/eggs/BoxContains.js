import React from "react";

import egg from "../../../assets/images/egg-outline/64x64.png";

const BoxContains = props => {
  let content = (
    <div onClick={props.onClick} className="boxcontains">
      <p className="boxcontains-amount-number">{props.amount}</p>
      <p className="boxcontains-amount-indicator">x</p>
      <img src={egg} alt="Ei" className="boxcontains-image" />
      <div className="boxcontains-price">
        {props.showPrice ? (
          <p>
            €
            {props.amount === 6
              ? (1.2).toFixed(2).replace(".", ",")
              : (2.0).toFixed(2).replace(".", ",")}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );

  if (props.inForm) {
    content = (
      <div
        onClick={props.onClick}
        className={
          props.active
            ? "boxcontains-form boxcontains-form-active"
            : "boxcontains-form"
        }
      >
        <p className="boxcontains-form-amount-number">{props.amount}</p>
        <p className="boxcontains-form-amount-indicator">x</p>
        <img src={egg} alt="Ei" className="boxcontains-form-image" />
        <div className="boxcontains-form-price">
          {props.showPrice ? (
            <p>
              €
              {props.amount === 6
                ? (1.2 * props.priceMultiplier).toFixed(2).replace(".", ",")
                : (2.0 * props.priceMultiplier).toFixed(2).replace(".", ",")}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
  return content;
};

export default BoxContains;
