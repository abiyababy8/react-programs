import React, { useEffect, useState } from 'react'
import './banner.css'
import instance from '../instance'
function QuoteGenerator() {
    const [quote1,setQuote]=useState()
    const generateQuote=()=>{
        fetchdata()
    }
    const fetchdata= async ()=>{
        const {data}= await instance.get("quotes")
        const res= data.quotes[Math.floor(data.quotes.length * Math.random())]
        setQuote(res)
    }
    
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <>
    <div className='bg'>
        <p className='text-center'>{quote1?.quote}</p>
        <p> - {quote1?.author}</p>
    </div>
    <div className='btn-generate'>
    <button className='btn btn-success mt-3' onClick={generateQuote}>Generate Quote</button>
    </div>
     
    </>
  )
}

export default QuoteGenerator