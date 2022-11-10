
import React,{useCallback,useState} from "react";
import axios   from 'axios'


export const myContext=React.createContext();

export const AppContext=({children})=>{
    const [meals,setMeals]=useState([]);
    const [categories,setCategories]=useState([]);
    const [randomMeal,setRandmMeal]=useState([]);

    const homePageMeal = useCallback((search)=>{
           axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
           .then(res=>{
            console.log(res.data);
            setMeals(res.data.meals)
           })
    },[])

    const categoryPage= useCallback(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        .then(res=>{
            // console.log(res.data);
            setCategories(res.data.categories)
        });

    },[]);

    const randomPage=useCallback(()=>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res=>{
            // console.log(res.data)
            setRandmMeal(res.data.meals)
        })
    },[])
 
    return(
        <myContext.Provider value={{homePageMeal,meals,categoryPage,categories,randomPage,randomMeal}}>{children}</myContext.Provider>
    )
    
}