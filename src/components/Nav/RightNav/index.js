import React from 'react'
import { Ul } from './styles'
import { Link } from '@reach/router'

export const RightNav = ({ open }) => {
  return (
    <>
      <Ul open={open}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='dashboard'>Dashboard</Link>
        </li>
        <li>Contact Us</li>
        <li>Sign In</li>
        <li>Sign Up</li>
      </Ul>
    </>
  )
}
