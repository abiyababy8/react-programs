import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function WatchHistory() {
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
        <h3 className='textStyle'>WATCH HISTORY</h3>
        <Link to={'/home'} style={{ textDecoration: 'none', color: 'white', fontWeight: '500' }}><i class="fa-solid fa-arrow-left me-2"></i>BACK TO HOME </Link>
      </div>
      <table className='textStyle table mt-5 mb-5 container bg-dark' data-bs-theme='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dhurooha Mandhahaasame</td>
            <td>www.youtube.com/dhurooha_mandhahaasame</td>
            <td>2025-03-05 12:43</td>
            <td><Button variant="danger"><i class="fa-solid fa-trash"></i></Button></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory