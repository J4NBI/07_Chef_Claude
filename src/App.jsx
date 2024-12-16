import Header from "./components/Header";
import Form from "./components/Form";
import Ingredients from "./components/Ingredients";
import GetClaudeBtn from "./components/GetClaudeBtn";
import ClaudeRecipe from "./components/ClaudeRecipe";

import React from "react";

function App() {
  let [showRecipe, setShowRecipe] = React.useState(false);

  function showRecipeClick() {
    const mainBody = document.getElementById("main-body");
    mainBody.classList.toggle("body-height");
    setShowRecipe((prev) => !prev);
  }

  let [ingredients, setIngredients] = React.useState([]);

  function submitForm(formData) {
    console.log(formData.get("ing"));
    const newEntry = formData.get("ing");
    setIngredients((prev) => [...prev, newEntry]);
  }

  return (
    <>
      <div className="md:min-w-[800px] rounded-t-2xl border-4 border-gray-300 w-[80%] mx-auto">
        <Header />
        <main className="p-20 ">
          <Form submit={submitForm} />
          <Ingredients ingredients={ingredients} />
          <GetClaudeBtn ingredients={ingredients} show={showRecipeClick} />
          <ClaudeRecipe showRecipe={showRecipe} />
        </main>
      </div>
    </>
  );
}

export default App;
