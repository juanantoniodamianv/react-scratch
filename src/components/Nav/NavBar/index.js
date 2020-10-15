import React from 'react'
import { Nav } from './styles'
import { Burger } from '../Burger'

export const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>
        Nav Bar Logo
      </div>
      <Burger />
    </Nav>
  )
}
