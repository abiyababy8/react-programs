import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="nav">
        <ul className='d-flex'>
          <li className='p-3'><Link to={'/'}><a href="">Home</a></Link></li>
          <li className='p-3'><Link to={'/about'}><a href="">About</a></Link></li>
          <li className='p-3'><Link to={'/contact'}><a href="">Contact</a></Link></li>
        </ul>
      </div>
    </>
  )
}

export default Nav