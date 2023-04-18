import React, { useEffect, useState, useContext } from 'react'

import data from '../../assets/data.json'
import Search from '../../components/Search/Search'
import './Dashboard.css'


const Dashboard = () => {
 console.log(data);
  
  return (
    <div className='dashboard'>
    <Search placeholder={'Search for movies or TV series'}/>
    <div className="dashboard-wrapper">
    {data.map((dt)=>{
      return(
        <div className="wrapper-data" key={dt.id}>
          <img src={dt.image} alt=""  />
          <p>{dt.title}</p>

        </div>
      )

    })}
    </div>
    </div>
  )
}

export default Dashboard
