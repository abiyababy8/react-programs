import React, { useEffect, useState } from 'react'
import instance from '../instance'
import'./banner.css'

function Banner({ fetchurl }) {
  console.log(fetchurl)
  const image_base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setmovies] = useState({})
  const fetchData = async () => {
    const { data } = await instance.get(fetchurl)
    const res = data.results[Math.floor(data.results.length * Math.random())]
    setmovies(res)
  }
  useEffect(() => {
    setInterval(() => {
      fetchData()
    }, 5000);
  }, [])
  return (
    <>
      <div style={{ backgroundImage: `url(${image_base_url}${movies?.backdrop_path})`, height: '500px', backgroundSize: '100% 100%' }}>
        <div className='banner_content'>
          <h2 style={{ color: 'white' }}>{movies?.name}</h2>
          <button className='btn btn-danger'>Play <i className="fa-solid fa-play ms-2"></i></button>
          <button className='btn btn-outline-light ms-2'>More Info <i className="fa-solid fa-caret-down ms-2"></i></button>
        </div>
      </div>
    </>
  )
}

export default Banner