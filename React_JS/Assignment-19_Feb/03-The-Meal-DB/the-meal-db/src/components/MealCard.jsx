
import React, { useEffect, useState } from 'react';
import { GiDoughRoller } from "react-icons/gi";
import MealInfo from './MealInfo';
import { Link } from "react-router-dom";
import SearchByLetter from './SearchByLetter';

const MealCard = ({ MealData, conditional, setFirstLetter }) => {

  const [showDetails, setShowDetails] = useState();
  
  useEffect(() => {
    setShowDetails();
  },[MealData])
  
  console.log(MealData);
  return (
    !showDetails 
      ? 
      <div>
        {conditional &&
        <p className='rounded text-[#ffffff] font-semibold text-center min-w-[250px] max-w-[400px] text-center  mx-auto border flex justify-center gap-1'><p>Latest Meals Here</p> 
        <GiDoughRoller className='rotate-[0deg] my-auto text-[#b61512] ' />
        </p>}
      
        {
        MealData 
        ? 
        <div className=' flex flex-wrap justify-center m-[1vw] p-[2vw] gap-[1vw] rounded '>

          {MealData.map((m) => (
            <a key={m.idMeal} href='#' className='w-[47%] md:w-[31%] lg:w-[23%] max-w-[350px] min-w-[160px]' onClick={() => setShowDetails(m) }>
              <div className='  bg-[#eeeeeecc] border-[2px] hover:border-[5px] rounded hover:scale-[1.02] duration-200 '>
                  <img src={m.strMealThumb} className="rounded " />
                  <h3 className=' rounded font-bold text-[#e5a506] mt-1 mx-2 '>{ m.strMeal }</h3>
                <div className='flex justify-between px-2 pb-1'>
                  <h3 className=' rounded font-semibold text-[0.8em] text-[#e64506] '>{ m.strArea }</h3>
                  <h3 className=' rounded font-semibold text-[0.8em] text-[#e5a506] '>{ m.strCategory }</h3>
                </div>
              </div>
            </a>
          ))}

        </div>
        :
        <p className='flex justify-center items-center h-[30vh] text-[#fff] text-xl font-semibold '>Not found...</p>
        }
        <SearchByLetter setFirst={setFirstLetter} />
      </div>
      :
      <>
      <MealInfo setShowDetails={setShowDetails} clickedMealData={showDetails} />

      <a href='#' className='fixed top-[100px] rounded p-2 text-[16px] font-bold border right-[6vw]  hover:scale-[1.5] duration-200 hover:text-white text-[#dd1212a5] ' onClick={() => setShowDetails()}>Back</a>
      </>
  )
}

export default MealCard