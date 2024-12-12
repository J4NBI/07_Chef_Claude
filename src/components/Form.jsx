import React from "react"

const Form = () => {
  let [ingredients, setIngredients] = React.useState(['Milch', 'Eier']);
  let [inputValue, setInputValue] = React.useState('')

  function handleSubmit(e){
    e.preventDefault();
    const event = e.currentTarget;
    const formData = new FormData(event);
    const newEntry = formData.get("ing");
    setIngredients(prev => [...prev, newEntry]);
    event.reset(); 
  }

  return (
    <>
    <form onSubmit={handleSubmit} className='flex items-center flex-col md:flex-row justify-center' action="">
      <input name="ing" className='rounded-md border-2  md:w-[70%] md:mr-8 h-10 p-2' type="text"  id="ingredients" placeholder='e.g. oregano' />
      <button className="mt-2 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-md text-sm h-10 px-4 flex items-center justify-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30  mb-2">+ Add ingredients</button>
    </form>
    <ul>
      {ingredients.map((i,index) => <li ><span>👉</span> {i}</li>)}
    </ul>
    </>
  )
}

export default Form