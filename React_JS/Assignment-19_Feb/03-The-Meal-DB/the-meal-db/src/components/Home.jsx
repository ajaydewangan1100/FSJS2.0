
import React, { useEffect, useState } from 'react';
import MealCard from './MealCard';
import SearchForm from './SearchForm';
import axios from 'axios';
import { GiEnergyArrow } from "react-icons/gi";


const Home = () => {
  
  const [searchInput, setSearchInput] = useState("");
  const [fetchedMeal, setFetchedMeal] = useState([]);
  const [firstLetter, setFirstLetter] =useState();

  
  const apiSearch = async (term) => {

    let apiURL;
    console.log(firstLetter,": firstLetter in apiSearch");
    !firstLetter
    ? 
    (apiURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + term)
    :
    (apiURL = "https://www.themealdb.com/api/json/v1/1/search.php?f=" + firstLetter)
    console.log(apiURL);
    await axios.get(apiURL)
    .then(Response => {
      setFetchedMeal(Response.data.meals);
      return Response.data.meals
    })
    .then(d => console.log(fetchedMeal))
    .catch(error => console.log(error))  

  }

  useEffect(() => {
    console.log(searchInput);
    apiSearch(searchInput);
  }, [searchInput, firstLetter])


  return (
    <div className='border rounded m-[1vw] bg-[#e6a606] h-auto '>
        <SearchForm setSearchInput={setSearchInput} setFirstLetter={setFirstLetter} />
        {
        searchInput || firstLetter
        ? 
        <MealCard MealData={fetchedMeal} conditional={false} setFirstLetter={setFirstLetter} />
        :
        <>
          <MealCard MealData={fetchedMeal} conditional={true} setFirstLetter={setFirstLetter} />
        </>
        }

        <a href='#' className='fixed bottom-[100px] rounded-[50%] p-2 px-3 text-[14px] font-bold border hover:border-[#ad121225] right-[6vw]  hover:scale-[1.5] duration-200 hover:text-white text-[#dd1212a5] '>
          <GiEnergyArrow className='rotate-[-135deg] m-auto ' /> Top</a>
    </div>
  )
}

export default Home;