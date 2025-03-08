import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
    return (
        <>
            <div className="index">
                <h1 className='text-center'>NATURAL WONDERS</h1>
                <Link to={'/about'}><button className='btn btn-dark'>Learn More..</button></Link>
            </div>
            <div className="usa">
                <h1 className='text-center text-light'>1. Grand Canyon (USA)</h1>
            </div>
            <div className="usa-des des">
                <p>The Grand Canyon, located in Arizona, is a massive geological formation carved by the Colorado River over millions of years. It stretches approximately 446 kilometers (277 miles) in length, up to 29 kilometers (18 miles) in width, and reaches depths of over 1,800 meters (6,000 feet). Its layered red rock formations reveal a rich geological history, attracting millions of visitors annually.</p>
            </div>
            <div className="nepal">
                <h1 className='text-center text-light'>2. Mount Everest (Nepal/Tibet)</h1>
            </div>
            <div className="nepal-des des">
                <p>Mount Everest, standing at 8,848 meters (29,029 feet), is the world's highest peak, located in the Himalayan mountain range between Nepal and Tibet. It has been a significant challenge for mountaineers worldwide and holds profound cultural and spiritual significance for local communities.</p>
            </div>

            <div className="artic">
                <h1 className='text-center text-light'>3. Northern Lights (Aurora Borealis - Arctic Regions)</h1>
            </div>
            <div className="artic-des des">
                <p>The Northern Lights, or Aurora Borealis, are mesmerizing natural light displays predominantly seen in high-latitude regions around the Arctic. They result from collisions between charged solar particles and Earth's atmosphere, creating vibrant displays of green, purple, and blue lights dancing across the night sky.</p>
            </div>

            <div className="aus">
                <h1 className='text-center text-light'>4. Great Barrier Reef (Australia)</h1>
            </div>
            <div className="aus-des des">
                <p>The Great Barrier Reef, located off Queensland's coast, is the world's largest coral reef system, comprising over 2,900 individual reefs and 900 islands, stretching over 2,300 kilometers (1,400 miles). It is renowned for its rich biodiversity, including various corals, fish species, and other marine life, making it a UNESCO World Heritage site and a popular destination for divers and tourists.</p>
            </div>

        </>
    )
}

export default Index