import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'
import { ToastContainer } from 'react-toastify'
function Home() {
  const [uploadVideoStatus,setUploadVideoStatus]=useState({})
  return (
    <>
      {/* first section  */}
      <div className="container d-flex align-items-center justify-content-between mt-5">
        <Add  setUploadVideoStatus={setUploadVideoStatus}/>
        <Link to={'/watch'} style={{ textDecoration: 'none' }}>
          <span className='fs-4 fw-bold textStyle'>WATCH HISTORY <i className="fa-solid fa-clock ms-2"></i></span>
        </Link>
      </div>
      {/* second section  */}
      <div className='container-fluid mt-5 textStyle w-100 mb-5 '>
        <div className='row'>
          <div className='col-md-9'>
            <View uploadVideoStatus={uploadVideoStatus}/>
          </div>
          <div className="col-md-3">
            <Category />
          </div>
        </div>

      </div>
      <ToastContainer position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnHover
        theme="colored" />
    </>
  )
}

export default Home