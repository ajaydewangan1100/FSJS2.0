

import React from 'react'

function SearchForm({ setSearch, search}) {




  return (
    <form className='rouded flex gap-2 max-w-[750px] mx-auto my-6 w-[96vw] p-3 bg-gray-500 rounded' onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='w-full rounded px-4 py-1 text-gray-700' />
        <button type="submit" className='w-24 text-[#fff] text-[20px] bg-[#20a520] rounded'> Search </button>
    </form>
  )
}

export default SearchForm