import React, { useState } from "react";

const serviceId = "mailgun";
const templateId = "eggs";

const OrderEggs = () => {
  const [name, setName] = useState("");
  const [boxes, setBoxes] = useState("");
  const [orderType, setOrderType] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = event => {
    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        break;
      case "boxes":
        setBoxes(event.target.value);
        break;
      case "orderType":
        setOrderType(event.target.value);
        break;
      case "address":
        setAddress(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      default:
        setName(event.target.value);
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(name);
    console.log(boxes);
    console.log(orderType);
    console.log(address);
    console.log(phone);

    window.emailjs
      .send(serviceId, templateId, {
        name: name,
        boxes: boxes,
        orderType: orderType,
        address: address,
        phone: phone
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error("Failed to send feedback. Error: ", err));
  };

  return (
    <form className="order-eggs" onSubmit={handleSubmit}>
      <p className="order-eggs-title">Eieren Bestellen</p>
      <input
        id="name"
        onChange={handleChange}
        required
        value={name}
        placeholder="Naam"
      />
      <input
        id="boxes"
        onChange={handleChange}
        required
        value={boxes}
        placeholder="Aantal Dozen"
      />
      <input
        id="orderType"
        onChange={handleChange}
        required
        value={orderType}
        placeholder="Order type"
      />
      <input
        id="address"
        onChange={handleChange}
        required
        value={address}
        placeholder="Adres"
      />
      <input
        id="phone"
        onChange={handleChange}
        required
        value={phone}
        placeholder="Telefoonnummer"
      />
      <input type="submit" value="Submit" className="btn btn--submit" />
    </form>
  );
};

export default OrderEggs;
