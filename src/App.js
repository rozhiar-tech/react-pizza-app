import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
import React, { useState } from "react";
function App() {
  const [allPizza, setAllPizaa] = useState();

  return (
    <>
      <Header />
      <PizzaForm allPizza={allPizza} setAllPizaa={setAllPizaa}/>
      <PizzaList  allPizza={allPizza} setAllPizaa={setAllPizaa}/>
    </>
  );
}

export default App;
