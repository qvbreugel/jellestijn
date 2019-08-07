import React, { useState } from "react";
import OrderEggs from "./OrderEggs";

const Order = () => {
  const [product, setProduct] = useState("eggs");

  const handleSubmit = newProduct => {
    setProduct(newProduct);
  };

  const orderPigs = <p>Varkensvlees Bestellen</p>;

  return (
    <div className="order">
      <p className="order-title">Bestellen</p>
      <button onClick={() => handleSubmit("eggs")}>Eieren</button>
      <button onClick={() => handleSubmit("pigs")}>Varkensvlees</button>
      {product === "eggs" ? <OrderEggs /> : orderPigs}
    </div>
  );
};

export default Order;
