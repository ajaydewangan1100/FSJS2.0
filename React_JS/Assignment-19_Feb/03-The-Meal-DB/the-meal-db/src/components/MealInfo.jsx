
import React from 'react';
import { SlGraph } from "react-icons/sl";
import { BsArrow90DegRight } from "react-icons/bs";


const MealInfo = ({ setShowDetails, clickedMealData }) => {
  console.log(clickedMealData)
  

  return (
    <div className='m-2 '>
      {/* Image and Name here */}
      <div className='h-auto sm:m-4 flex flex-wrap justify-between gap-2 h-min '>
        <div className=' rounded-xl  bg-[#eeeeee90] w-[100%] sm:w-[74%] xl:w-[35%] 2xl:w-[40%] h-min border '>
            <img src={clickedMealData.strMealThumb} className="w-[100%] min-w-[330px]  rounded-t-xl" />
          <div className='p-2'>
            <p className='text-xs flex gap-1 text-[#e64512aa] '> <SlGraph className='my-auto text-[#e64512] ' /> When You make it then you like it...</p>
          
            <h1 className='text-[#fff] font-bold text-xl '> { clickedMealData.strMeal }</h1>
              <div className='flex items-baseline gap-2 text-[#fff] font-semibold '>
                <p className='w-[10px] h-[10px] rounded-[2px] bg-[#e68606] '></p> 
              Category : { clickedMealData.strCategory } </div>
            <div className='flex items-baseline gap-2 text-[#fff] font-semibold'>
            <p className='w-[10px] h-[10px] rounded-[2px] bg-[#e68606] '></p> Origin : { clickedMealData.strArea } </div>
            {(clickedMealData.strTags !== "NA" && clickedMealData.strTags)
            && 
            <div className='flex items-baseline gap-2 text-[#e64610bb] my-1 text-sm font-semibold '>
            <p className='w-[10px] h-[10px] rounded-full bg-[#e68606] '></p> 
            Tags : { clickedMealData.strTags } </div>
            }

          </div>
        </div>
        {/* Ingredients Div here */}
        <div className='my-2 w-[100%] sm:w-[24%] xl:w-[18%] 2xl:w-[20%] h-min '>
          <h1 className='text-lg sm:text-2xl  2xl:text-[1.8em] text-[#fff] font-semibold '>Ingredients
          <BsArrow90DegRight className='inline mx-2 rotate-[90deg] text-sm text-[#eee] ' /> 
          </h1>
          <hr className='m-2 border-[#fff] border-dotted border-[1px] ' />
          <div className='flex flex-wrap sm:flex-col xl:block xl:leading-2xl sm:text-[2xl] xl:text-[1.1em] gap-2 sm:gap-1 md:gap-2 lg:text-[1.2em] 2xl:text-[1.3em] px-2 xl:overflow-auto'>
          {
            Object.keys(clickedMealData).filter(keys => (keys.includes("Ingredient") && clickedMealData[keys])).map(k => 
              (
              // <p className='border rounded-[2px] bg-[#fff] '>p</p>,
              <p className='text-[#fff] '>{clickedMealData[k]}, </p>
              ))
          }
          </div>
        </div>
        {/* Instructions div here */}
        <div className='my-2 xl:w-[45%] xl:h-[100%] 2xl:w-[38%] '>
          <h1 className='text-lg sm:text-2xl 2xl:text-[1.8em] text-[#fff] font-semibold '>Instructions
          <BsArrow90DegRight className='inline mx-2 rotate-[90deg] text-sm text-[#eee] ' /> 
          </h1>
          <hr className='m-2 border-[#fff] border-dotted border-[1px] ' />
          <div className='px-2 text-[#fff] sm:text-xl 2xl:text-[1.4em] max-h-[90vh] xl:overflow-y-auto h-[80%]'>{ clickedMealData.strInstructions } </div>
        </div>
      </div>
      <div className=' my-[4vw] text-[3vw] text-[#eee] mb-1 text-center  '>
        <p>Here is recipe of video if you want to see.</p>
        {console.log(clickedMealData.strYoutube.replace('watch?v=', "embed/"))}
        <iframe className='w-[90vw] h-[51vw] mx-auto shadow-2xl shadow-[#eee] mt-2 ' src={clickedMealData.strYoutube.replace('watch?v=', "embed/")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default MealInfo