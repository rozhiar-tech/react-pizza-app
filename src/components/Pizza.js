import React from "react";

function Pizza({ size, topping, vegetarian }) {
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian===true?"vegeterian":"not Vegeterian"}</td>
     
      <td>
        <button type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
