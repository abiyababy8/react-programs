import React, { useEffect, useState } from 'react'
import instance from '../instance'

function Banner({ fetchurl }) {
  console.log(fetchurl)
  const image_base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setmovies] = useState()
  const fetchData = async () => {
    const {data} = await instance.get(fetchurl)
    console.log('api result:')
    console.log(data)
    setmovies(data.results[0]) 
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <h2 style={{ color: 'red' }}>Banner</h2>
<div style={{backgroundImage:`url(${image_base_url}${movies?.backdrop_path})`}}></div>
    </>
  )
}

export default Banner