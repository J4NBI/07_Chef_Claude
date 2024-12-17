import Header from "./components/Header";
import Form from "./components/Form";
import Ingredients from "./components/Ingredients";
import GetClaudeBtn from "./components/GetClaudeBtn";
import ClaudeRecipe from "./components/ClaudeRecipe";
import getRecipeFromMistral from "../ai.js";

import React from "react";
import ReactMarkdown from "react-markdown";

// console.log(getRecipeFromMistral());

function App() {
  let [showRecipe, setShowRecipe] = React.useState(false);

  function showRecipeClick() {
    const mainBody = document.getElementById("main-body");
    mainBody.classList.toggle("body-height");
    setShowRecipe((prev) => !prev);
  }

  let [ingredients, setIngredients] = React.useState([
    "Milch",
    "Eier",
    "Mehl",
    "Salz",
  ]);

  let [getRecipeState, setGetRecipeState] = React.useState("");

  async function getRecipe() {
    let getRecipeFromMistralResult = await getRecipeFromMistral(ingredients);
    setGetRecipeState((prev) => (prev = getRecipeFromMistralResult));
    const mainBody = document.getElementById("main-body");
    mainBody.classList.toggle("body-height");
  }

  function submitForm(formData) {
    console.log(formData.get("ing"));
    const newEntry = formData.get("ing");
    setIngredients((prev) => [...prev, newEntry]);
  }

  let recipeSection = React.useRef(null)

  React.useEffect(() => {
      if(getRecipeState !== "" && recipeSection !== null) {
        recipeSection.current.scrollIntoView({behavior: "smooth"})
      }
  }, [getRecipeState])

  return (
    <>
      <div className="md:min-w-[800px] rounded-t-2xl border-4 border-gray-300 md:w-[80%] mx-auto">
        <Header />
        <main className="md:px-20 md:pt-8 p-4 max-w-[1200px]">
          <Form submit={submitForm} />
          <Ingredients ingredients={ingredients} />
          <GetClaudeBtn
             
            getRecipe={getRecipe}
            ingredients={ingredients}
            show={showRecipeClick}
            getRecipeState={setGetRecipeState}
          />
          <ClaudeRecipe showRecipe={showRecipe} />
          {getRecipeState && (
            <>
              <div ref={recipeSection} className="mb-24"></div>
              <h2  className="text-center mt-8 mb-8 font-bold text-3xl">
                Chef Claude Recommends:
              </h2>
              <ReactMarkdown className="leading-7 flex flex-col gap-5 bg-white bg-opacity-50 rounded-md p-12">
                {getRecipeState}
              </ReactMarkdown>
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
