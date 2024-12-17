import React from 'react'

const Ingredients = (props) => {
  return (
    <>
    {props.ingredients.length > 0 && (
      <h2 className="pt-12 text-2xl font-bold">Ingredients on hand:</h2>
    )}
    <ul className="pt-12 mx-auto flex gap-8 flex-wrap max-w-[400px] justify-center items-center">
      {props.ingredients.map((i, index) => (
        <li key={index}>
          <span className='text-2xl pr-2'>👉</span> {i}
        </li>
      ))}
    </ul>
    </>
    
  )
}

export default Ingredients