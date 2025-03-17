import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { deleteWatchHistory, getHistory } from '../services/allApi'
function WatchHistory() {
  const [allHistory, setAllHistory] = useState([])
  const getAllHistory = async () => {
    const response = await getHistory()
    console.log(response)
    const { data } = response
    setAllHistory(data)
  }
  useEffect(() => {
    getAllHistory()
  }, [])
const deleteHistory=async(id)=>{
  await deleteWatchHistory(id)
  getAllHistory()
}
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
          {
            allHistory.length > 0 ?
              allHistory.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.caption}</td>
                  <td>{item.embeddedLink}</td>
                  <td>{item.timeStamp}</td>
                  <td><Button variant="danger" onClick={()=>deleteHistory(item.id)}><i class="fa-solid fa-trash"></i></Button></td>
                </tr>
              )):
              <p className='m-5 text-danger'>NO HISTORY FOUND</p>
          }

        </tbody>
      </table>
    </>
  )
}

export default WatchHistory