import React from 'react'
import { Link } from 'react-router-dom'
function About() {
    return (
        <>
            <div className="about">
                <h1 className='text-center'>What Are Natural Wonders? 🌍</h1>
                <p>Natural wonders are breathtaking landscapes, formations, or phenomena that exist without human influence. These wonders showcase the Earth's power, beauty, and diversity, often leaving visitors in awe. They can be vast mountains, deep canyons, vibrant coral reefs, or even celestial events like the Northern Lights.</p>
                <Link to={'/'}><button className='btn btn-dark'>Learn More..</button></Link>
            </div>
        </>
    )
}

export default About