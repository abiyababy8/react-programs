import React from 'react'

function Contact() {
    return (
        <>
            <div className="contact">
                <h1>Contact Us</h1>
                <div className='d-flex mt-5'>
                    <input type="text" placeholder='Enter Your Email' className='form-control w-75' />
                    <button className='btn btn-warning ms-2'>Subscribe</button>
                </div>
                <div className="icons mt-5">
                    <ul className='d-flex'>
                        <li><i className="fa-brands fa-instagram fa-2x p-3"></i></li>
                        <li><i className="fa-brands fa-facebook fa-2x p-3"></i></li>
                        <li><i className="fa-brands fa-whatsapp fa-2x p-3"></i></li>
                        <li><i className="fa-brands fa-telegram fa-2x p-3"></i></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contact