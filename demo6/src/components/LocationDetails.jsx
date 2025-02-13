import React from 'react'

function LocationDetails({currentLocation,permenantLocation}) {
    
  return (
   <>
   <h3>LOCATION</h3>
   <p>Current Location: {currentLocation}</p>
   <p>Permenant Location: {permenantLocation}</p>
   </>
  )
}

export default LocationDetails