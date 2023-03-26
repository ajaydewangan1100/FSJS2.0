
import React from 'react'

const SearchByLetter = ({ setFirst }) => {

    
  return (
    <div className='border text-center m-[1vw] p-2 '>
        <h1 className='text-[lg] sm:text-xl  my-1 text-white font-semibold '>Browse By First Letter</h1>
        <div className='flex flex-wrap justify-center gap-[1vw] sm:w-[75vw] m-auto ' >
        {
            (() => {
            const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            return [...alpha].map( c => (
            <p key={c} onClick={(e) => setFirst(e.target.innerText)}
            className=' flex justify-center items-center rounded-full bg-[#ffffffdd] text-[#e6a616] font-bold text-lg w-[40px] h-[40px] sm:text-xl sm:w-[50px] sm:h-[50px]  shadow-[#eee] cursor-pointer hover:scale-[1.3]  duration-100 ' >
                { c }</p>
            ))
            })()
        }
        </div>
    </div>
  )
}

export default SearchByLetter