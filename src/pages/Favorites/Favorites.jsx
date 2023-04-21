import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../App'
import data from '../../assets/data.json'
import { BsDot, BsBookmark } from 'react-icons/bs'
import { BsPersonVideo } from 'react-icons/bs'
import { MdMovie, MdLocalMovies } from 'react-icons/md'
import './Favorites.css'
const Favorites = () => {
  const { favorites, setFavorites } = useContext(AppContext)
  let dataFavorites = data.filter((dt) => favorites.includes(dt.id))
  const deleteItem = (e) => {
    setFavorites((favorites) => favorites.filter((el) => el != e.target.id))
  }
  return (
    <div className='favorites'>
      <h2>Favorites</h2>
      <div className='dashboard-wrapper'>
        {dataFavorites.map((dt) => {
          if (Number(dt.id) > 3) {
            return (
              <div
                className='wrapper-data'
                key={dt.id}
              >
                <button
                  id={dt.id}
                  onClick={deleteItem}
                  className='delete'
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
