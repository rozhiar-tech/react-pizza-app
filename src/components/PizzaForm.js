import React, { useState } from "react";
import { v4 as uuid } from 'uuid';


function PizzaForm({ allPizza, setAllPizaa}) {
  const unique_id = uuid();

  const [pizza, setPizza] = useState({
    topping: "",
    size: "",
    vegetarian: "",
  });
  function handleInput(e) {
    if (e.target.name === "vegetarian") {
      setPizza({
        ...pizza,
        [e.target.name]: e.target.value === "Vegetarian" ? true : false,
      });
    }
    else if(e.target.name === "vegetarian" && e.target.value === "notVegetarian"){
      setPizza({
        ...pizza,
        [e.target.name]: e.target.value === "notVegetarian" ? false : true,
      });
    }
    else{
      setPizza({
        ...pizza,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/pizzas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pizza),
    })
      .then((r) => r.json())
      .then((updatedPizza) => {
        console.log(updatedPizza);
      });
      setAllPizaa([...allPizza, pizza]);
    
  }

  return (
    <div className="form-row">
      <div className="col-5">
        <input
        onChange={handleInput}
        name="topping"
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          value={
            //Pizza Topping Should Go Here
            null
          }
        />
      </div>
      <div className="col">
        <select value={null} className="form-control"  onChange={handleInput} name="size">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input
          name="vegetarian"
           onChange={handleInput}
            className="form-check-input"
            type="radio"
            value="Vegetarian"
            checked={null}
          />
          <label className="form-check-label">Vegetarian</label>
        </div>
        <div className="form-check">
          <input
          name="vegetarian"
           onChange={handleInput}
            className="form-check-input"
            type="radio"
            value="notVegetarian"
            checked={null}
          />
          <label className="form-check-label">Not Vegetarian</label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default PizzaForm;
