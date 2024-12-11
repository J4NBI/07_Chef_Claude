import React from "react"

const Form = () => {
  let [ingredients, setIngredients] = React.useState(['Milch', 'Eier']);
  let [inputValue, setInputValue] = React.useState('')

  function onSubmitClick(event) {
    event.preventDefault()
    const newForm = new FormData(event.currentTarget);
    const newIngredient = newForm.get("ing");
    if (newIngredient) {
      setIngredients(prev => {
        return [...prev , newIngredient]});
      setInputValue('');
    } 
  }

  function handleX(e) {
    let id = e.target.id;
    setIngredients(prev => {
      let liste = [...prev];
      let indexZuEntfernen = id;
      if (indexZuEntfernen > -1 && indexZuEntfernen < liste.length) {
        liste.splice(indexZuEntfernen, 1);
    }
      return liste
      
    })
  }
  return (
    <>
    <form onSubmit={onSubmitClick} className='flex items-center flex-col md:flex-row justify-center' action="">
      <input onChange={e => setInputValue(e.target.value)} value={inputValue} name="ing" className='rounded-md border-2  md:w-[70%] md:mr-8 h-10 p-2' type="text"  id="ingredients" placeholder='e.g. oregano' />
      <button className="mt-2 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-md text-sm h-10 px-4 flex items-center justify-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30  mb-2">+ Add ingredients</button>
    </form>
    <ul>
      {ingredients.map((i,index) => <li ><span>👉</span> {i} <span id={index} onClick={handleX}>X</span> </li>)}
    </ul>
    </>
  )
}

export default Form