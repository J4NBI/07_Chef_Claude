import React from 'react'

const Ingredients = (props) => {
  return (
    <>
    {props.ingredients.length > 0 && (
      <h2 className="ml-8 mt-8 text-2xl font-bold">Ingredients on hand:</h2>
    )}
    <ul className="ml-8 mt-8 ">
      {props.ingredients.map((i, index) => (
        <li key={index}>
          <span className='text-2xl'>👉</span> {i}
        </li>
      ))}
    </ul>
    </>
    
  )
}

export default Ingredients