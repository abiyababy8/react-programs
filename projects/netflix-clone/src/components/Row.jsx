import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './row.css'

function Row({ title, fetchurl }) {
  
  const image_base_url = "https://image.tmdb.org/t/p/original/";
  const [allmovies, setallmovies] = useState()

  const fetchData = async () => {

    const response = await instance.get(fetchurl)
    console.log("Api result:", response)
    setallmovies(response.data.results)

  }
  useEffect(() => {
    fetchData()
  }, [])

  console.log('All movies:', allmovies)

  return (
    <>
      <div className='row mt-2'>
        <h2 className='text-light'>{title}</h2>
        <div className='movie_row ms-3'>
          {
            allmovies?.map(item => (
              <img className='movies' src={`${image_base_url}${item?.poster_path}`} alt={""}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Row