import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <div className="nav">
        <ul className='d-flex'>
            <li className='p-3'><Link to={'/home'}><a href="">Home</a></Link></li>
            <li className='p-3'><Link to={'/about'}><a href="">About</a></Link></li>
            <li className='p-3'><a href="">Contact</a></li>
        </ul>
    </div>
    </>
  )
}

export default Nav