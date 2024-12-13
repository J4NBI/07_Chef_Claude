import React from "react";

const Form = () => {
  let [ingredients, setIngredients] = React.useState([]);
  let [showRecipe, setShowRecipe] = React.useState(false);

  function submitForm(formData) {
    const newEntry = formData.get("ing");
    setIngredients((prev) => [...prev, newEntry]);
  }

  function showRecipeClick() {
    const mainBody = document.getElementById("main-body");
    mainBody.classList.remove("body-height");
    setShowRecipe((prev) => !prev);
  }
  return (
    <div className="">
      <form
        action={submitForm}
        className="flex items-center flex-col md:flex-row justify-center"
      >
        <input
          name="ing"
          className="rounded-md border-2 w-full md:mr-8 h-10 p-2 "
          type="text"
          id="ingredients"
          placeholder="e.g. oregano"
        />
        <button className="mt-2 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-md text-sm h-10 px-4 flex items-center justify-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30  mb-2">
          + Add ingredients
        </button>
      </form>
      {ingredients.length > 0 && (
        <h2 className="ml-8 mt-8 text-2xl font-bold">Ingredients on hand:</h2>
      )}
      <ul className="ml-8 mt-8 ">
        {ingredients.map((i, index) => (
          <li>
            <span>👉</span> {i}
          </li>
        ))}
      </ul>

      {ingredients.length > 3 && (
        <div className="gap-8 my-24 border-2 border-[#ffd769] p-8 rounded-md flex justify-between items-center w-[90%] bg-white bg-opacity-45 mx-auto">
          <div>
            <h3 className="font-bold mb-2">Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button className="min-w-[150px]
          mt-2 bg-[#ffd769] transition-all duration-300 text-[#6f578e] font-bold hover:bg-[#6f578e]/90 hover:text-white focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 rounded-md text-sm h-10 px-4 flex items-center justify-center mb-2
          " 
          onClick={showRecipeClick}>Get a recipe</button>
        </div>
      )}

      {showRecipe && (
        <section className="mx-auto w-[80%]">
          <h2>Chef Claude Recommends:</h2>
          <article className="suggested-recipe-container" aria-live="polite">
            <p>
              Based on the ingredients you have available, I would recommend
              making a simple a delicious <strong>Beef Bolognese Pasta</strong>.
              Here is the recipe:
            </p>
            <h3>Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul>
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
            <strong>Instructions:</strong>
            <ol>
              <li>
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
          </article>
        </section>
      )}
    </div>
  );
};

export default Form;
