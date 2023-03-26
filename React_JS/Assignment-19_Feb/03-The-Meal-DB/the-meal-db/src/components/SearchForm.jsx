
import React, { useEffect, useState } from 'react'

const SearchForm = ({ setSearchInput, setFirstLetter }) => {


  const [search, setSearch] = useState("");

  const typing = (e) => (
    // console.log(search),
    setSearch(e.target.value)
  )

  const sendSearchData = (e) => {
    e.preventDefault();
    setSearchInput(search);
    setSearch("");
    setFirstLetter("");
  }


  return (
    <form className='w-[90%] min-w-[350px] mx-auto flex justify-center gap-1 items-center flex-wrap ' onSubmit={sendSearchData}>
        <input type='text' value={search} onChange={(e) => typing(e)} placeholder='Search Meal Recipe' className='w-[60%] min-w-[200px] h-8 font-semibold text-xl text-[#107645] border-[#b61512bb] border rounded text-center outline-none ' />

        <button type='submit' className='bg-[#e68606] p-1 h-8 my-2 rounded text-white font-semibold hover:bg-[#894606] ' > Submit </button> 
    </form>
  )
}

export default SearchForm