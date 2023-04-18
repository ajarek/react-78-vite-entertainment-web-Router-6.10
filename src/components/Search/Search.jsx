import React from 'react'
import { BiSearch } from 'react-icons/bi'
import './Search.css'
const Search = ({ searchValue, setSearchValue, placeholder }) => {
  return (
    <div className='search'>
      <BiSearch size={30}/>
      <input
        className='search-input'
        type='search'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={placeholder}
        autoFocus
      />
    </div>
  )
}

export default Search
