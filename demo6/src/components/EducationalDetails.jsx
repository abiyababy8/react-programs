import React from 'react'

function EducationalDetails(data) {
    console.log(data)
  return (
    <>
    <h3>EDUCATIONAL DETAILS</h3>
    <p>Name: {data.firstName}</p>
    <p>Qualification: BTech</p>
    <p>Pass Out Year: 2024</p>
    </>
  )
}

export default EducationalDetails