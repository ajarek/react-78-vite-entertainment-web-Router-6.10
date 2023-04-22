import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../App'
import { useLoaderData,  useNavigate } from 'react-router-dom'
import { BsDot, BsBookmark } from 'react-icons/bs'
import { BsPersonVideo } from 'react-icons/bs'
import { MdMovie, MdLocalMovies } from 'react-icons/md'
import './Favorites.css'

export const favoritesLoader = async() => {
  let response=await fetch('src/assets/data.json')
 let dataJson =await  response.json();
  return dataJson
}


const Favorites = () => {
  const dataLoader = useLoaderData()
  const { favorites, setFavorites } = useContext(AppContext)
  let dataFavorites = dataLoader.filter((dt) => favorites.includes(dt.id))
  const deleteItem = (e) => {
    setFavorites((favorites) => favorites.filter((el) => el != e.target.id))
  }
  return (
    <div className='favorites'>
      <h2>Favorites</h2>
      <div className='dashboard-wrapper'>
        {dataFavorites.map((dt) => {
          if (Number(dt.id) > 0) {
            return (
              <div
                className='wrapper-data'
                key={dt.id}
              >
                <button
                  id={dt.id}
                  onClick={deleteItem}
                  className='delete'
                  aria-label='remove favorites movies'
                >
                  ❌
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

export default Favorites
