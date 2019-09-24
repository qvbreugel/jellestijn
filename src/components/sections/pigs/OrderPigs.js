import React, { useState } from "react";

const serviceId = "mailgun";
const templateId = "meat";

const OrderEggs = props => {
  const [name, setName] = useState("");
  const [packageWeight, setPackageWeight] = useState("4kg");
  const [total, setTotal] = useState((43.8).toFixed(2).replace(".", ","));
  const [packageAmount, setPackageAmount] = useState("1");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [priceMultiplier, setPriceMultiplier] = useState(1);

  const handleChange = event => {
    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        break;
      case "packageWeight":
        setPackageWeight(event.target.value);
        break;
      case "packageAmount":
        setPackageAmount(event.target.value);
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
    console.log(packageWeight);
    console.log(packageAmount);
    console.log(address);
    console.log(phone);

    window.emailjs
      .send(serviceId, templateId, {
        name: name,
        packageAmount: packageAmount,
        packageWeight: packageWeight,
        price: total,
        address: address,
        phone: phone
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error("Failed to send feedback. Error: ", err));
  };

  const setMultiplier = event => {
    if (!isNaN(parseInt(event.target.value))) {
      setPriceMultiplier(event.target.value);
      calculatePrice(event.target.value);
    }
  };

  const calculatePrice = multiplier => {
    console.log(typeof multiplier);
    if (typeof multiplier !== "string") {
      multiplier = priceMultiplier;
    }
    if (packageWeight === "4kg") {
      setTotal((multiplier * 43.8).toFixed(2).replace(".", ","));
    } else if (packageWeight === "8kg") {
      setTotal((multiplier * 87.6).toFixed(2).replace(".", ","));
    }
  };

  return (
    <form className="pigs-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Naam</label>
      <input id="name" onChange={handleChange} required value={name} />
      <label htmlFor="address">Adres</label>
      <input id="address" onChange={handleChange} required value={address} />
      <label htmlFor="phone">Telefoonnummer</label>
      <input id="phone" onChange={handleChange} required value={phone} />
      <label htmlFor="packageWeight">Type Vleespakket</label>
      <select
        id="packageWeight"
        onChange={handleChange}
        required
        value={packageWeight}
        onBlur={calculatePrice}
      >
        <option value="4kg">Pakket van 4kg</option>
        <option value="8kg">Pakket van 8kg</option>
      </select>
      <label htmlFor="packageAmount">Aantal Pakketten</label>
      <div className="pigs-form-boxes">
        <input
          className="packageAmount"
          id="packageAmount"
          onChange={handleChange}
          required
          value={packageAmount}
          onBlur={setMultiplier}
        />
        <p>Totaalprijs: €{total}</p>
      </div>

      <div className="pigs-form-buttons">
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
