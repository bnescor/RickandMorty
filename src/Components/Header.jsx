import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/header.css'

const Header = () => {
  return (
    <header className='main'>
      <nav className='botonera'>
        <NavLink end className={({isActive})=>isActive?'link here':'link'} to='/'>Home</NavLink>
        <NavLink className={({isActive})=>isActive?'link here':'link'} to='/Character/1'>Character</NavLink>
        <NavLink className={({isActive})=>isActive?'link here':'link'} to='/Location'>Locacion</NavLink>
        <NavLink className={({isActive})=>isActive?'link here':'link'} to='/Favorito'>Favorito</NavLink>
      </nav>
    </header>
  )
}

export default Header