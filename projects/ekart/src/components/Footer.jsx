import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5 bg-primary'>
        <div className='d-flex justify-content-center align-items-evenly'>
          <div className='overview mt-1' style={{ width: '400px' }}>
            <h5><i className="fa-solid fa-cart-shopping text-light me-3"></i>
              <span style={{ color: 'white' }}>EKART</span></h5>
            <p style={{ color: 'white', textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident deleniti velit eligendi voluptatum ipsum quia assumenda nemo nisi ipsam, voluptas unde maiores. Quam veniam repudiandae cumque voluptas tenetur nostrum repellat.</p>
          </div>
          <div className='links d-flex flex-column ms-5 mt-1' style={{ color: 'white' }}>
            <h4>LINKS</h4>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}> Home </Link>

            <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>

            <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }}>WishList</Link>
          </div>
          <div className='links d-flex flex-column ms-5 mt-1' style={{ color: 'white' }}>
            <h4>GUIDES</h4>
            React
            <br />
            React Bootstrap
            <br />
            Font Awesome
          </div>
          <div className='contact_us ms-5 mt-1' style={{ color: 'white' }}>
            <h4>CONTACT US</h4>
            <div className='d-flex'>
              <input type="text" placeholder='Enter Your Email' className='form-control' style={{borderRadius:'5px'}}/>
              <button className='btn btn-info ms-3'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly align-items-center mt-3'>
              <i className="fa-brands fa-instagram fa-2x"></i>
              <i className="fa-brands fa-facebook fa-2x"></i>
              <i className="fa-brands fa-whatsapp fa-2x"></i>
              <i className="fa-brands fa-x-twitter fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center mt-5 textStyle'>COPY RIGHT © 2025 EKART BUILT WITH REACT</p>
    </>
  )
}

export default Footer