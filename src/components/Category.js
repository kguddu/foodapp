import React, { useContext, useEffect } from 'react'
import { myContext } from './context'

const Category = () => {
  const { categoryPage, categories } = useContext(myContext);

  useEffect(() => {
    categoryPage()
  }, [categoryPage])

  return (
    <div className=' home category'  >
      {categories.map(category => (
        <div key={category.idCategory}>
          <img src={category.strCategoryThumb} alt="#" />
          <h4>{category.strCategory}</h4>
        </div>
      ))}

    </div>
  )
}

export default Category