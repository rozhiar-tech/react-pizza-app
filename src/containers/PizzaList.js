import React, { useEffect, useState } from "react";
import Pizza from "../components/Pizza";
function PizzaList() {
  const [allPizza, setAllPizaa] = useState();
  useEffect(() => {
    const fetchData = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setAllPizaa(data);
    };

    fetchData("http://localhost:3000/pizzas");
  }, []);

  console.log(allPizza);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {allPizza &&
          allPizza.map((Piz) => (
            <Pizza
              key={Piz.id}
              size={Piz.size}
              topping={Piz.topping}
              vegetarian={Piz.vegetarian}
            />
          ))}
      </tbody>
    </table>
  );
}

export default PizzaList;
