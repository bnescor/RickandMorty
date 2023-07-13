import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/header.css'

const Header = () => {
  const [Load, setLoad] = useState(true)
  const menuLoad = () => { setLoad(!Load) }
  return (
    <header className='main'>
      <nav className='botonera'>
        <div className={Load ? 'enlace on' : 'enlace off'}>
          <NavLink className={({ isActive }) => isActive ? 'link here' : 'link'} to='/Character/1'>Character</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'link here' : 'link'} to='/Location'>Locacion</NavLink>
        </div>
        <button onClick={menuLoad} className={Load ? 'menu' : 'menu here'}>{Load ?
          <i className='bx bx-menu-alt-right'></i>
          : <i className='bx bx-x'></i>}
        </button>
      </nav>
    </header>
  )
}

export default Header