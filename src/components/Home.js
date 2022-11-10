import React, { useState, useCallback, useContext } from 'react'

import { myContext } from './context';

const Home = () => {
  const { homePageMeal, meals } = useContext(myContext);

  const [search, setSearch] = useState("");
 

  const fetchMealsHandler = useCallback(() => {

    homePageMeal(search)

  }, [search, homePageMeal])

  return (
    <div className='home'>
      <div className='home-search'>
        <input type='text' placeholder="search your meal..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={fetchMealsHandler}>Search Meal</button>
      </div>
      <div className='home-meal'>
        {meals ? (
          meals.map((meal) => <div className='home-grid' key={meal.idMeal}>
            <img src={meal.strMealThumb} alt="#" />
            <h4>{meal.strMeal}</h4>
          </div>)
        ) : (
          <h2>No meals Found</h2>
        )}

      </div>


    </div>
  )
}

export default Home