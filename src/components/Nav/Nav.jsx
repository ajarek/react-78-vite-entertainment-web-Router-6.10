import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdMovie, MdLocalMovies } from 'react-icons/md'
import { SiWindows11 } from 'react-icons/si'
import { ImUser } from 'react-icons/im'
import { BsPersonVideo,BsBookmark } from 'react-icons/bs'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <MdMovie
        color='#fc4747'
        size={50}
      />
      <Link
        className={'link'}
        to={'/'}
      >
        <SiWindows11 size={25} />
      </Link>
      <Link
        className='link'
        to={'/movie'}
      >
        <MdLocalMovies size={40} />
      </Link>
      <Link
        className='link'
        to={'/series'}
      >
        <BsPersonVideo size={30} />
      </Link>
      <Link
        className='link'
        to={'/favorites'}
      >
        <BsBookmark size={30} />
      </Link>
      <div className='user'>
        <Link
          className='link'
          to={'/'}
        >
          <ImUser
            color='#ffffff'
            size={40}
          />
        </Link>
      </div>
    </nav>
  )
}

export default Nav
