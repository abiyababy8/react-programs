import React from 'react'
import './examplecss.css'

function Home() {
  return (
    <>
    <h2 id="main_heading">Subjects</h2>
    <ol className="subjects">
        <li>MongoDB</li>
        <li>Express</li>
        <li>Angular</li>
        <li>React</li>
        <li>Node</li>
    </ol>
    </>
  )
}
export default Home