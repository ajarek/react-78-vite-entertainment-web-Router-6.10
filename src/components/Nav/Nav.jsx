import React, { useState, useContext } from 'react'

import { MdMovie, MdLocalMovies } from 'react-icons/md'
import { SiWindows11 } from 'react-icons/si'
import { BsPersonVideo } from 'react-icons/bs'
import './Nav.css'


const Nav = () => {

  return (
    <nav className='nav'>
        
         <MdMovie/>
         <SiWindows11/>
         <MdLocalMovies/>
         <BsPersonVideo/>
      
    </nav>
  )
}

export default Nav
