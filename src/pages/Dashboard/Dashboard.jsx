import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../App'
import { useLoaderData,  useNavigate } from 'react-router-dom'
import { BsDot,BsBookmark } from 'react-icons/bs';
import { BsPersonVideo } from 'react-icons/bs'
import { MdMovie, MdLocalMovies } from 'react-icons/md'
import data from '../../assets/data.json'
import Search from '../../components/Search/Search'
import './Dashboard.css'
import ScrollContainer from 'react-indiana-drag-scroll'
export const dashboardLoader = () => {
  const dataJson = data || []
  return dataJson
}
const Dashboard = () => {

  const data = useLoaderData()
  const [searchValue, setSearchValue] = useState('')
  const { favorites, setFavorites } = useContext(AppContext)
  
  return (
    <div className='dashboard'>
      <Search placeholder={'Search for movies or TV series'}  value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}/>
      <h2>Trending</h2>
     
      <ScrollContainer vertical={false} className="scroll-container">
        {data.map((dt) => {
          if (Number(dt.id) <= 3) {
            return (
              <div
                className='wrapper-data'
                key={dt.id}
              > 
               <button className="mark"><BsBookmark/></button>
                <div className="info-wrapper">
                  <span>{dt.year}<BsDot/></span>
                  <span>{dt.type}<BsDot/></span>
                  <span>{dt.allowed}</span>
                </div>
                <img
                  src={dt.image}
                  alt=''
                />
                <p className='title'>{dt.title}</p>
              </div>
            )
          }
        })}
        </ScrollContainer>
      
      <h2>Recommended for you</h2>
      <div className='dashboard-wrapper'>
        {data.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          ).map((dt) => {
          if (Number(dt.id) > 3) {
            return (
              <div
                className='wrapper-data'
                key={dt.id}
              >
               <button onClick={()=>setFavorites([...favorites,dt.id])} className="mark"><BsBookmark/></button>
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

export default Dashboard
