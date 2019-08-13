import React, { useState } from "react";
import BoxContains from "./BoxContains";

const serviceId = "mailgun";
const templateId = "eggs";

const OrderEggs = props => {
  const [name, setName] = useState("");
  const [boxes, setBoxes] = useState("");
  const [boxType, setBoxType] = useState(6);
  const [orderType, setOrderType] = useState("Eenmalig");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [priceMultiplier, setPriceMultiplier] = useState(1);

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
    console.log(boxType);
    console.log(orderType);
    console.log(address);
    console.log(phone);

    window.emailjs
      .send(serviceId, templateId, {
        name: name,
        boxes: boxes,
        boxType: boxType,
        orderType: orderType,
        address: address,
        phone: phone
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error("Failed to send feedback. Error: ", err));
  };

  const activeToggle = event => {
    event.preventDefault();
    if (boxType === 6) {
      setBoxType(10);
    } else {
      setBoxType(6);
    }
  };

  const calculatePrice = event => {
    if (!isNaN(parseInt(event.target.value))) {
      const newMultiplier = parseInt(event.target.value);
      setPriceMultiplier(newMultiplier);
    }
  };

  return (
    <form className="eggs-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Naam</label>
      <input id="name" onChange={handleChange} required value={name} />
      <label htmlFor="boxes">Aantal dozen</label>
      <div className="eggs-form-boxes">
        <input
          className="boxes"
          id="boxes"
          onChange={handleChange}
          required
          value={boxes}
          onBlur={calculatePrice}
        />
        <BoxContains
          amount={6}
          inForm
          showPrice
          active={boxType === 6 ? true : false}
          onClick={activeToggle}
          priceMultiplier={priceMultiplier}
        />
        <BoxContains
          amount={10}
          inForm
          showPrice
          active={boxType === 10 ? true : false}
          onClick={activeToggle}
          priceMultiplier={priceMultiplier}
        />
      </div>
      <label htmlFor="orderType">Soort bestelling</label>
      <select id="orderType" onChange={handleChange} required value={orderType}>
        <option value="Eenmalig">Eenmalig</option>
        <option value="1x per week">1x per week</option>
        <option value="1x per 2 weken">1x per 2 weken</option>
        <option value="1x per 4 weken">1x per 4 weken</option>
      </select>
      <label htmlFor="address">Adres</label>
      <input id="address" onChange={handleChange} required value={address} />
      <label htmlFor="phone">Telefoonnummer</label>
      <input id="phone" onChange={handleChange} required value={phone} />
      <div className="eggs-form-buttons">
        <button
          type="button"
          onClick={() => {
            props.setFormVisible(false);
          }}
        >
          Terug
        </button>
        <input type="submit" value="Bestel!" />
      </div>
    </form>
  );
};

export default OrderEggs;
