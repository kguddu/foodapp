import React, { useContext, useEffect } from 'react'
import { myContext } from './context'

const RandomMeal = () => {

  const { randomPage, randomMeal } = useContext(myContext)
  useEffect(() => {
    randomPage();

  }, [randomPage]);



  return (
    <div className='random'>
      {randomMeal.map((meal) => (
        <div key={meal.idMeal} className="random-grid">
          <div className="random-control">
            <img src={meal.strMealThumb} alt="#" />
            <button className='btn' onClick={randomPage}>generate another Meal</button>
          </div>
          <div className='random-instrucction'>
            <h4>Instruction</h4>
            <p>{meal.strInstructions}</p>

          </div>
        </div>
      ))}

    </div>
  )
}

export default RandomMeal