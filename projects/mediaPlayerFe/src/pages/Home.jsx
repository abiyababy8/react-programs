import React from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-between mt-5">
         <Add/>
         <Link to={'/watch'} style={{textDecoration:'none'}}>
         <span className='fs-4 fw-bold textStyle'>WATCH HISTORY <i className="fa-solid fa-clock ms-2"></i></span>
         </Link>
      </div>
    </>
  )
}

export default Home