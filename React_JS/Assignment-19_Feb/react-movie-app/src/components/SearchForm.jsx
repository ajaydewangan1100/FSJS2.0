

import React from 'react'

function SearchForm({ setSearch, search}) {

  return (
    <form className='rouded flex gap-[0.8vh] font-semibold max-w-[750px] mx-auto my-6 p-[0.8vh] bg-gray-500 rounded' onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='w-full rounded px-2 py-1 text-gray-700' placeholder='Type movie name' />
        <button type="submit" className='w-24 text-[#fff] text-[20px] bg-[#20a520] rounded'> Search </button>
    </form>
  )
}

export default SearchForm