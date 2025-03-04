import React, { useEffect, useState } from 'react'
import './banner.css'
import instance from '../instance'
function QuoteGenerator() {
    const [quote1,setQuote]=useState()
    const authorImages = {
        "Rumi": "https://upload.wikimedia.org/wikipedia/commons/8/81/Mevlana-celaleddin-i-rumi-1.jpg",
        "Abdul Kalam": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/220px-A._P._J._Abdul_Kalam.jpg",
        "Bill Gates": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bill_Gates_2018.jpg/220px-Bill_Gates_2018.jpg",
        "Albert Einstein": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
        "Abraham Lincoln": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/220px-Abraham_Lincoln_O-77_matte_collodion_print.jpg",
        "Oprah Winfrey": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Oprah_in_2014.jpg/220px-Oprah_in_2014.jpg",
        "Muhammad Ali": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/220px-Muhammad_Ali_NYWTS.jpg",
        "William Shakespeare": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/220px-Shakespeare.jpg",
        "Mother Teresa": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mother_Teresa_1.jpg/220px-Mother_Teresa_1.jpg",
        "Nelson Mandela": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/220px-Nelson_Mandela_1994.jpg",
        "Walt Disney": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Walt_Disney_1946.JPG/220px-Walt_Disney_1946.JPG",
        "Aristotle": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/220px-Aristotle_Altemps_Inv8575.jpg",
        "Abu Bakr (R.A)": "/api/placeholder/150/150",
        "Ali ibn Abi Talib (R.A)": "/api/placeholder/150/150",
        "Umar ibn Al-Khattāb (R.A)": "/api/placeholder/150/150",
        // Default image for authors not in the list
        "default": "/api/placeholder/150/150"
      };
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
    <div className='quote-container'>
            <div className='bg p-4 text-center bg-dark'>
                <p className='text-center'>"{quote1?.quote}"</p>
                <div className='author-section d-block'>
                    {quote1?.author && authorImages[quote1.author] ? (
                        <img src={authorImages[quote1.author]} alt={''} className="author-img" />
                    ) : (
                        <img src="https://via.placeholder.com/80" alt="Default Author" className="author-img" />
                    )} 
                    <p className='author-name'>- {quote1?.author}</p>
                </div>
            </div>
            <div className='btn-generate'>
                <button className='btn btn-success mt-3' onClick={generateQuote}>Next Quote</button>
            </div>
        </div>
     
    </>
  )
}

export default QuoteGenerator