import React, { useState } from 'react'

function SimpleForm() {
    const [firstName, setFirstName] = useState('')
    const [email, setemail] = useState('')
    const [mobNo, setMobNo] = useState('')
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(firstName, email, mobNo)
    }
    return (
        <>
            <h2 style={{ color: 'blue' }}>Simple Form</h2>
            <form onSubmit={handleRegister}>
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="">First Name:</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} style={{ padding: '10px', marginLeft: '41px', width: '250px', borderRadius: '5px' }} placeholder='Enter your First Name'/>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="">Email:</label>
                    <input type="text" onChange={(e) => setemail(e.target.value)} style={{ padding: '10px', marginLeft: '75px', width: '250px', borderRadius: '5px' }} placeholder='Enter your Email'/>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <label htmlFor="">Mobile Number:</label>
                    <input type="text" onChange={(e) => setMobNo(e.target.value)} style={{ padding: '10px', marginLeft: '10px', width: '250px', borderRadius: '5px' }} placeholder='Enter your Mobile Number'/>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <button type='submit' style={{ padding: '20px', marginLeft: '304px', color: 'white', backgroundColor: 'blue', borderRadius: '5px' }}>Submit</button>
                </div>
            </form>
        </>
    )
}

export default SimpleForm