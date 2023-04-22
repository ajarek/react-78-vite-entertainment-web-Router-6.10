import React from 'react'
import { BiSearch } from 'react-icons/bi'
import './Search.css'
const Search = ({ value, onChange, placeholder }) => {
  return (
    <div className='search'>
      <BiSearch size={30} />
      <input
        className='search-input'
        type='search'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus
      />
    </div>
  )
}

export default Search
