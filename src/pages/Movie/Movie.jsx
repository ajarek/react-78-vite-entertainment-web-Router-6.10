import React, { useEffect, useState, useContext } from 'react'
import { BsDot, BsBookmark } from 'react-icons/bs'
import { BsPersonVideo } from 'react-icons/bs'
import { MdMovie, MdLocalMovies } from 'react-icons/md'
import data from '../../assets/data.json'
import Search from '../../components/Search/Search'
import './Movie.css'
const Movie = () => {
  const [searchValue, setSearchValue] = useState('')
  const dataMovie = data.filter((dt) => dt.type === 'Movie')
 
  return (
    <div className='movie'>
      <Search
        placeholder={'Search for movies or TV series'}
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}
      />
      <h2>Movie</h2>
      <div className='dashboard-wrapper'>
        {dataMovie
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((dt) => {
            if (dt.id > 3) {
              return (
                <div
                  className='wrapper-data'
                  key={dt.id}
                >
                  <button className='mark'>
                    <BsBookmark />
                  </button>
                  <img
                    src={dt.image}
                    alt=''
                  />
                  <div className='info-wrapper'>
                    <span>
                      {dt.year}
                      <BsDot />
                    </span>
                    <span className='type'>
                      {dt.type === 'Movie' ? (
                        <MdMovie className='icon' />
                      ) : (
                        <BsPersonVideo className='icon' />
                      )}
                      {dt.type}
                      <BsDot />
                    </span>
                    <span>{dt.allowed}</span>
                  </div>
                  <p className='title'>{dt.title}</p>
                </div>
              )
            }
          })}
      </div>
    </div>
  )
}

export default Movie
