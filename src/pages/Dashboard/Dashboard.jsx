import React, { useEffect, useState, useContext } from 'react'
import { BsDot } from 'react-icons/bs';
import { BsPersonVideo } from 'react-icons/bs'
import { MdMovie, MdLocalMovies } from 'react-icons/md'
import data from '../../assets/data.json'
import Search from '../../components/Search/Search'
import './Dashboard.css'
import ScrollContainer from 'react-indiana-drag-scroll'

const Dashboard = () => {
  console.log(data)

  return (
    <div className='dashboard'>
      <Search placeholder={'Search for movies or TV series'} />
      <h2>Trending</h2>
     
      <ScrollContainer vertical={false} className="scroll-container">
        {data.map((dt) => {
          if (dt.id <= 3) {
            return (
              <div
                className='wrapper-data'
                key={dt.id}
              > 
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
        {data.map((dt) => {
          if (dt.id > 3) {
            return (
              <div
                className='wrapper-data'
                key={dt.id}
              >
               
                <img
                  src={dt.image}
                  alt=''
                />
                 <div className="info-wrapper">
                  <span>{dt.year}<BsDot/></span>
                  <span className='type'>{dt.type==='Movie'?<MdMovie className='icon'/>:<BsPersonVideo className='icon'/>}{dt.type}<BsDot/></span>
                  <span>{dt.allowed}</span>
                </div>
                <p className='title'e>{dt.title}</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Dashboard
