
import React from 'react'

function SearchForm({ setSearch, search, setClickedImdbId}) {

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    setClickedImdbId("");
  }

  return (
    <form className='rouded flex gap-[0.8vh] font-semibold max-w-[750px] mx-auto my-[10px] p-[0.8vh] bg-gray-500 rounded sticky top-3 '  
    onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={search} onChange={(e) => onChangeHandler(e)} className='w-full text-[20px] rounded px-2 py-1 text-gray-700 focus:outline-none focus:bg-gray-100' placeholder='Type movie name' />
        <button type="submit" className='w-12 text-[#fff] text-[20px] bg-[#20a520] rounded'></button>
    </form>
  )
}

export default SearchForm