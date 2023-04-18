import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MdMovie, MdLocalMovies } from 'react-icons/md'
import { SiWindows11 } from 'react-icons/si'
import { ImUser } from 'react-icons/im'
import { BsPersonVideo } from 'react-icons/bs'
import './Nav.css'

const Nav = () => {
  console.log(NavLink)
  const [active, setActive] = useState(false)
  return (
    <nav className='nav'>
      <MdMovie
        color='#fc4747'
        size={50}
      />
      <NavLink
        className={'link'}
        to={'/'}
      >
        <SiWindows11  size={25} />
      </NavLink>
      <NavLink
        className='link'
        to={'/'}
      >
        <MdLocalMovies
         
          size={40}
        />
      </NavLink>
      <NavLink
        className='link'
        to={'/'}
      >
        <BsPersonVideo
         
          size={30}
        />
      </NavLink>
      <div className='user'>
        <NavLink
          className='link'
          to={'/'}
        >
          <ImUser
            color='#ffffff'
            size={40}
          />
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav
