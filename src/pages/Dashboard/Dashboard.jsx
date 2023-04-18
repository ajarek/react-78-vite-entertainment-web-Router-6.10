import React, { useEffect, useState, useContext } from 'react'
import data from '../../assets/data.json'

import './Dashboard.css'


const Dashboard = () => {
 console.log(data);
  
  return (
    <div className='dashboard'>
    
    {data.map((dt)=>{
      return(
        <div className="wrapper" key={dt.id}>
          <img src={dt.image} alt="" width={'100%'} />

        </div>
      )

    })}
    </div>
  )
}

export default Dashboard
