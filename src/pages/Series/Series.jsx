import React, { useEffect, useState, useContext } from 'react'
import { useLoaderData,  useNavigate } from 'react-router-dom'
import { BsDot,BsBookmark } from 'react-icons/bs';
import { BsPersonVideo } from 'react-icons/bs'
import { MdMovie, MdLocalMovies } from 'react-icons/md'
import data from '../../assets/data.json'
import Search from '../../components/Search/Search'


import './Series.css'

export const seriesLoader = () => {
  const dataJson =data || []
  return dataJson
}

const Series = () => {
  const data = useLoaderData()
  const [searchValue, setSearchValue] = useState('')
 const dataSeries=data.filter((dt)=>dt.type==='TV Series')
  return (
    <div className='series'>
      <Search placeholder={'Search for movies or TV series'} value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)} />
           <h2>TV Series</h2>
      <div className='dashboard-wrapper'>
        { dataSeries.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          ).map((dt) => {
          if (dt.id > 3) {
            return (
              <div
                className='wrapper-data'
                key={dt.id}
              >
               <button className="mark"><BsBookmark/></button>
                <img
                  src={dt.image}
                  alt=''
                />
                 <div className="info-wrapper">
                  <span>{dt.year}<BsDot/></span>
                  <span className='type'>{dt.type==='Movie'?<MdMovie className='icon'/>:<BsPersonVideo className='icon'/>}{dt.type}<BsDot/></span>
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

export default Series