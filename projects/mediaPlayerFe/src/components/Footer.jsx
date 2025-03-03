import React from 'react'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center mt-5 bg-dark'>
       <div className='d-flex align-items-center justify-content-evenly'>
         <div className='overview' style={{width:'400px'}}>
          <h5><i class="fa-solid fa-video text-warning me-3"></i>
          <span style={{color:'white'}}>MEDIA PLAYER</span></h5>
          <p style={{color:'white',textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident deleniti velit eligendi voluptatum ipsum quia assumenda nemo nisi ipsam, voluptas unde maiores. Quam veniam repudiandae cumque voluptas tenetur nostrum repellat.</p>
         </div>
         <div className='links d-flex flex-column ms-3' style={{color:'white'}}>
          <h4>LINKS</h4>
         <Link to={'/'} style={{textDecoration:'none',color:'white'}}> LANDING PAGE </Link>
          
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>HOME</Link>
          
          <Link to={'/watch'} style={{textDecoration:'none',color:'white'}}>WATCH HISTORY</Link>
         </div>
         <div className='links d-flex flex-column ms-3' style={{color:'white'}}>
         <h4>GUIDES</h4>
          REACT
          <br />
          REACT BOOTSRAP 
          <br />
          FONT AWESOME
         </div>
         <div className='contact_us ms-3' style={{color:'white'}}>
          <h4>CONTACT US</h4>
          <div className='d-flex'>
            <input type="text" placeholder='Enter your email' className='form-control'/>
            <button className='btn btn-warning ms-3'>SUBSCRIBE</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center mt-3'>
          <i class="fa-brands fa-instagram fa-2x"></i>
          <i class="fa-brands fa-facebook fa-2x"></i>
          <i class="fa-brands fa-whatsapp fa-2x"></i>
          <i class="fa-brands fa-x-twitter fa-2x"></i>
          </div>
         </div>
       </div>
    </div>
    <p className='text-center mt-5'>COPY RIGHT © 2025 MEDIA PLAYER BUILT WITH REACT</p>
    </>
  )
}

export default Footer